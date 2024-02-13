import "@/styles/globals.css";
export const metadata = {
  title: "Ethan McFarland",
  description: "My personal portfolio website",
  icons: {
    icon: "icon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
