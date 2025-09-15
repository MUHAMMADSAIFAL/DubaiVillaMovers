"use client";
import { useState, useEffect, useCallback } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Review {
  id: number;
  name: string;
  text: string;
  stars: number;
}

const starTexts: Record<number, string> = {
  1: "Good work",
  2: "Very good work",
  3: "Great service, keep it up!",
  4: "Excellent experience!",
  5: "Outstanding, highly recommended!",
};

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: "John Doe",
      text: "Great moving service, handled everything smoothly!",
      stars: 5,
    },
    {
      id: 2,
      name: "Sarah Lee",
      text: "Good work, very Good System And Fast Moving",
      stars: 5,
    },
    {
      id: 3,
      name: "Michael Smith",
      text: "Fast, reliable and professional.",
      stars: 5,
    },
  ]);

  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slideshow
  const cycleReviews = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    if (reviews.length > 1) {
      const interval = setInterval(cycleReviews, 8000);
      return () => clearInterval(interval);
    }
  }, [cycleReviews, reviews.length]);

  // Handle post (incremental ID)
  const handlePost = () => {
    if (!newReview || rating === 0 || !name.trim()) return;

    setReviews((prev) => [
      {
        id: prev.length > 0 ? prev[0].id + 1 : 1,
        name: name.trim(),
        text: newReview.trim(),
        stars: rating,
      },
      ...prev,
    ]);

    setNewReview("");
    setRating(0);
    setName("");
    setShowForm(false);
  };

  return (
    <section
      id="reviews"
      className="container mx-auto px-4 py-10"
      aria-labelledby="reviews-title"
    >
      <h2
        id="reviews-title"
        className="text-4xl font-bold text-center mb-6 text-white"
      >
        Client Reviews
      </h2>

      {/* Toggle review form */}
      <div className="text-center mb-6">
        <button
          type="button"
          onClick={() => setShowForm((prev) => !prev)}
          className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 
                     text-white rounded-lg font-semibold shadow-md 
                     hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
          aria-expanded={showForm}
          aria-controls="review-form"
        >
          {showForm ? "Close Review Form" : "Give a Review"}
        </button>
      </div>

      {/* Review Form */}
      {showForm && (
        <form
          id="review-form"
          className="bg-white p-6 rounded-2xl shadow-lg mb-8 max-w-2xl mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            handlePost();
          }}
        >
          <input
            id="reviewer-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full p-3 border rounded-lg mb-4"
            required
          />

          <textarea
            id="review-text"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write your review..."
            className="w-full p-3 border rounded-lg mb-4 resize-none"
            rows={3}
            required
          />

          {/* Stars */}
          <fieldset className="mb-4">
            <legend className="sr-only">Select Rating</legend>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => {
                    setRating(star);
                    setNewReview(starTexts[star]);
                  }}
                  className="focus:outline-none"
                  aria-label={`${star} star${star > 1 ? "s" : ""}`}
                  aria-pressed={rating === star}
                >
                  <Star
                    className={`w-7 h-7 transition-colors ${
                      star <= rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-400"
                    }`}
                  />
                </button>
              ))}
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-blue-600 
                       text-white py-2 rounded-lg font-medium 
                       hover:scale-105 transition-transform 
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Post Review
          </button>
        </form>
      )}

      {/* Review Slideshow */}
      {reviews.length > 0 && (
        <div className="relative h-48 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.article
              key={reviews[currentIndex].id}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 1, opacity: 1}}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut"}}
              className="absolute w-full bg-gradient-to-br from-emerald-400/70 to-teal-600/70 
                         hover:from-teal-700/80 hover:to-emerald-500/80
                         p-6 rounded-xl shadow-lg text-white 
                         transition-all duration-700 ease-in-out"
              aria-live="polite"
            >
              {/* Stars */}
              <div className="flex items-center mb-2" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < reviews[currentIndex].stars
                        ? "text-yellow-300 fill-yellow-300"
                        : "text-white/30"
                    }`}
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="mb-3 text-lg">{reviews[currentIndex].text}</p>
              <p className="font-semibold">{reviews[currentIndex].name}</p>
            </motion.article>
          </AnimatePresence>
        </div>
      )}
    </section>
  );
};

export default Reviews;
