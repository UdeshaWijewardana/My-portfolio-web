export default function robots() {
  const baseUrl = "https://danu-wijewardana.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/private/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
