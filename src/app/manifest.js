export default function manifest() {
  return {
    name: "D.A.N.U Wijewardana Portfolio",
    short_name: "DANU.",
    description:
      "Portfolio of D.A.N.U Wijewardana — Digital Marketing, Social Media Management, and Web Design.",
    start_url: "/",
    display: "standalone",
    background_color: "#070913",
    theme_color: "#070913",
    icons: [
      {
        src: "/assets/social/profile.jpeg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/assets/social/profile.jpeg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
