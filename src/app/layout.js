import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://my-portfolio-web-jet.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "D.A.N.U Wijewardana | Digital Marketing, Web Design & Social Media",
    template: "%s | D.A.N.U Wijewardana",
  },
  description:
    "Portfolio of D.A.N.U Wijewardana, featuring digital marketing, social media management, Meta Ads, graphic design, and responsive web development work.",
  keywords: [
    "D.A.N.U Wijewardana",
    "Danu Wijewardana",
    "Digital Marketing Specialist",
    "Social Media Manager",
    "Social Media Management",
    "Web Designer Sri Lanka",
    "WordPress Developer",
    "Meta Ads Specialist",
    "Fashion Event Digital Support",
    "Frontend Developer",
    "Graphic Designer",
    "Fashion Model UNI Academy",
    "BSc Hons IT",
    "Next.js Portfolio",
  ],
  authors: [{ name: "D.A.N.U Wijewardana", url: siteUrl }],
  creator: "D.A.N.U Wijewardana",
  publisher: "D.A.N.U Wijewardana",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "D.A.N.U Wijewardana | Digital Marketing, Web Design & Social Media",
    description:
      "Explore selected web projects, social media creative campaigns, and digital work by D.A.N.U Wijewardana.",
    url: siteUrl,
    siteName: "D.A.N.U Wijewardana Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/hero-background.png`,
        width: 1672,
        height: 941,
        alt: "D.A.N.U Wijewardana — Digital Marketing, Web Design and Social Media portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D.A.N.U Wijewardana | Digital Marketing, Web Design & Social Media",
    description:
      "Final year BSc (Hons) IT student specializing in Social Media Management, Meta Ads, and Web Development.",
    images: [`${siteUrl}/images/hero-background.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export const viewport = {
  themeColor: "#f7f6f2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  // Schema.org Structured Data (JSON-LD) for Rich Google Search Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        "name": "D.A.N.U Wijewardana",
        "alternateName": ["Danu Wijewardana", "Nimesh Udesha Wijewardana"],
        "jobTitle": "Digital Marketer, Social Media Manager & Web Designer",
        "description": "Final year BSc (Hons) IT student with experience in Social Media Management, Meta Ads, and Web Development.",
        "url": siteUrl,
        "image": `${siteUrl}/images/hero-background.png`,
        "email": "mailto:nimeshudeshawijewardana@gmail.com",
        "telephone": "+94750739897",
        "knowsAbout": [
          "Digital Marketing",
          "Social Media Management",
          "Web Development",
          "WordPress",
          "Next.js",
          "Meta Ads",
          "HTML & CSS",
          "Graphic Design",
          "Fashion Event Digital Support"
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "Fashion Model UNI Academy & Fashion Model Hub TV"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "D.A.N.U Wijewardana Portfolio",
        "description": "Personal portfolio website of D.A.N.U Wijewardana.",
        "publisher": {
          "@id": `${siteUrl}/#person`
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile-page`,
        "url": siteUrl,
        "name": "D.A.N.U Wijewardana Portfolio",
        "isPartOf": {
          "@id": `${siteUrl}/#website`
        },
        "mainEntity": {
          "@id": `${siteUrl}/#person`
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${siteUrl}/images/hero-background.png`,
          "width": 1672,
          "height": 941
        },
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
