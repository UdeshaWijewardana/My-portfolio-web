export default function manifest() {
  return {
    name: "D.A.N.U Wijewardana Portfolio",
    short_name: "DANU.",
    description:
      "Portfolio of D.A.N.U Wijewardana — Digital Marketing, Social Media Management, and Web Design.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f6f2",
    theme_color: "#f7f6f2",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
