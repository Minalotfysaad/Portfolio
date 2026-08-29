import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mina Lotfy Saad | .NET Backend Developer",
  description:
    ".NET Backend Developer specializing in C#, ASP.NET Core, RESTful APIs, Entity Framework Core, SQL Server, Clean Architecture, and secure backend systems.",
  keywords: [
    ".NET Backend Developer",
    "ASP.NET Core",
    "C#",
    "Entity Framework Core",
    "SQL Server",
    "Clean Architecture",
    "RESTful API",
    "JWT Authentication",
    "Redis",
    "SOLID Principles",
    "Mina Lotfy Saad",
    "Software Engineer",
  ],
  authors: [{ name: "Mina Lotfy Saad" }],
  creator: "Mina Lotfy Saad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://minalotfy.dev",
    title: "Mina Lotfy Saad | .NET Backend Developer",
    description:
      ".NET Backend Developer building secure, scalable, and maintainable backend systems with C# and ASP.NET Core.",
    siteName: "Mina Lotfy Saad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mina Lotfy Saad | .NET Backend Developer",
    description:
      "Building secure, scalable, and maintainable backend systems with C# and ASP.NET Core.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

import { getBasePath } from "@/lib/utils";

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href={`${getBasePath()}/favicon.svg`} type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mina Lotfy Saad",
              jobTitle: ".NET Backend Developer",
              url: "https://minalotfy.dev",
              sameAs: [
                "https://github.com/Minalotfysaad",
                "https://www.linkedin.com/in/minalotfysaad",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Alexandria",
                addressCountry: "Egypt",
              },
              knowsAbout: [
                "C#",
                "ASP.NET Core",
                "Entity Framework Core",
                "SQL Server",
                "Clean Architecture",
                "RESTful APIs",
                "JWT Authentication",
                "Redis",
                "SOLID Principles",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-background text-foreground font-sans antialiased selection:bg-accent/30 selection:text-foreground min-h-screen">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
