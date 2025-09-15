"use client";

import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

const defaultTitle = "Dubai Villa Movers - Professional Furniture Movers in UAE | Trusted Moving Services";
const defaultDescription = "Professional furniture movers in UAE. Quick, stress-free, and affordable moving services. Expert packing, transportation, and delivery across Dubai, Abu Dhabi, Sharjah. Get free quote!";
const defaultURL = "https://www.tariqmovers.com/";
const defaultImage = "/og-image.jpg"; // Replace with your OG image path

const defaultKeywords = `
abu dhabi to dubai movers,
best dubai movers,
sharjah to dubai movers,
expert dubai movers,
top rated dubai movers,
dubai movers and packers,
dubai movers and packers reviews,
movers dubai to abu dhabi price,
movers dubai to ajman,
movers dubai to al ain,
best movers and packers in dubai,
cheap movers and packers in dubai,
expert movers and packers dubai,
villa movers and packers in dubai,
office movers and packers in dubai,
dubai best movers,
dubai moving building,
beautiful home movers dubai,
best office movers in dubai,
best furniture movers in dubai,
best villa movers in dubai,
movers in bur dubai,
movers dubai cost,
moving company dubai cost,
dubai movers review,
movers company dubai,
movers dubai dubizzle,
delight international movers dubai,
movers and packers dubai to abu dhabi,
movers and packers in downtown dubai,
delight international movers dubai photos,
how much does it cost to move in dubai,
expert movers and packers dubai reviews,
easy movers dubai,
executive movers dubai,
movers from dubai to sharjah,
movers from dubai to riyadh,
movers from dubai to ajman,
movers from dubai to abu dhabi price,
movers from dubai to muscat,
movers from dubai to ras al khaimah,
furniture movers and packers in dubai,
fit movers dubai,
fast movers dubai,
movers from sharjah to dubai,
save and fast movers and packers dubai,
movers global dubai,
professional mover in dubai,
latest mover in dubai,
fast movers in uae,
Movers in UAE,
best movers in uae,
cheap movers in uae,
international movers in uae,
furniture movers in uae,
best packers and movers in uae,
home movers in uae,
house movers in uae,
office movers in uae,
top movers in uae,
best international movers in uae,
movers in the uae,
movers and packers in uae,
cheapest movers dubai,
cheap movers in dubai,
movers companies in dubai,
movers abu dhabi price,
uae moving companies,
office movers and packers in uae,
movers to arabia,
movers in abu dhabi,
best movers company in uae,
uae movers,
big factories in uae,
movers in business bay,
movers company uae,
moving companies in dubai,
uae movers and packers,
movers company in uae,
movers and packers dubai cost,
movers in uae dubai,
uae mover,
movers in dubai international city,
movers in dip,
moving uae flag,
f movers,
f movers uae,
movers in fujairah,
furniture movers in mobile al,
g movers,
g movers dubai,
g movers abu dhabi,
g movers international,
h e movers,
mover in uae,
movers in international city,
ie movers,
movers in jvc dubai,
movers in khalifa city,
movers in al quoz,
movers packers uae,
international movers and packers dubai,
movers in al qusais,
r a movers,
movers in sharjah,
movers uae to ksa,
t mobile in uae,
t-mobile in dubai,
u movers and packers dubai,
x movers,
movers zone uae,
z movers moving company,
1+ movers,
2b movers,
2 movers.com,
2 movers 1 hour,
movers in dubai,
movers 4 uae,
movers in upland,
4 movers,
5-star movers,
5 movers,
6 movers,
international movers in abu dhabi
`;

const defaultTags = [
  "#UAEMoversAndPackers",
  "#BestMoversInDubaiReviews",
  "#BestMoversInUAE",
  "#BestMoversAndPackersDubaiUAE",
  "#BestMoversAndPackersInDubai",
  "#BestMoversInDubai",
  "#BestMoversUAE",
  "#BestMoversCompanyInDubai",
  "#BestMovingCompanyUAE",
  "#BestDubaiMovers",
  "#BestInternationalMoversDubai",
  "#DubaiBestMovers",
  "#BestMoversInAbuDhabi",
  "#BestMoversInDubaiReviews",
  "#DubaiUAERate",
  "#DubaiUAEDifference",
  "#TopMoversInDubai",
  "#GoodMoversInDubai",
  "#BestMoversAndPackersInUAE",
];

const SEO = ({ title, description, url, image }: SEOProps) => {
  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoURL = url || defaultURL;
  const seoImage = image || defaultImage;

  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={defaultKeywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={seoURL} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoURL} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoURL} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={seoImage} />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Dubai Villa Movers",
            image: seoImage,
            url: seoURL,
            telephone: "+923421712536",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dubai",
              addressCountry: "UAE",
            },
            sameAs: [
              "https://www.facebook.com/YourPage",
              "https://www.instagram.com/YourPage",
            ],
          }),
        }}
      />

      {/* Hashtags */}
      <meta name="twitter:label1" content={defaultTags.join(", ")} />
    </Head>
  );
};

export default SEO;
