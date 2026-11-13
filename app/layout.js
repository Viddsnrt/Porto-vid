import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/instrument-sans";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import MotionProvider from "@/components/MotionProvider";
import { profile } from "@/data/profile";

// Judul & deskripsi untuk Google dan pratinjau tautan — otomatis dari data/profile.js
export const metadata = {
  ...(profile.siteUrl ? { metadataBase: new URL(profile.siteUrl) } : {}),
  title: `${profile.name} | ${profile.roles.id[0]}`,
  description: profile.tagline.id,
  openGraph: {
    title: `${profile.name} | Portofolio`,
    description: profile.tagline.id,
    images: [profile.photo],
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0D2230",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <LanguageProvider>
          <MotionProvider>{children}</MotionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
