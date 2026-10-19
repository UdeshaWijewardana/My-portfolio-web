export default function sitemap() {
  const baseUrl = "https://my-portfolio-web-jet.vercel.app";
  const currentDate = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
