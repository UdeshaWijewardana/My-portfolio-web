import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://danu-wijewardana.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "D.A.N.U Wijewardana | Digital Marketing • Web Design • Social Media Management",
    template: "%s | D.A.N.U Wijewardana",
  },
  description:
    "Official portfolio of D.A.N.U Wijewardana — Final year BSc (Hons) IT student with practical experience in Social Media Management, Meta Ads campaigns, and responsive Web Development.",
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
    title: "D.A.N.U Wijewardana | Digital Marketing • Web Design • Social Media Management",
    description:
      "Explore selected web projects, social media creative campaigns, and digital work by D.A.N.U Wijewardana.",
    url: siteUrl,
    siteName: "D.A.N.U Wijewardana Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/social/profile.jpeg",
        width: 894,
        height: 1280,
        alt: "D.A.N.U Wijewardana - Digital Marketer & Web Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D.A.N.U Wijewardana | Digital Marketing • Web Design • Social Media Management",
    description:
      "Final year BSc (Hons) IT student specializing in Social Media Management, Meta Ads, and Web Development.",
    images: ["/assets/social/profile.jpeg"],
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
  themeColor: "#070913",
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
        "image": `${siteUrl}/assets/social/profile.jpeg`,
        "email": "mailto:nimeshudeshawijewardana@gmail.com",
        "telephone": "+94716973217",
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
      }
    ]
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#070913] text-slate-100 antialiased selection:bg-purple-600 selection:text-white min-h-screen relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
