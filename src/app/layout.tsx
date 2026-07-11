import type { Metadata, Viewport } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Velath Prabhakaran | Managing Director, Velath Engineering International FZC",
  description:
    "I am Velath Prabhakaran, Managing Director of Velath Engineering International FZC, a UAE-based leader in capital equipment, pressure vessels, boilers, heat exchangers, and industrial engineering for the oil & gas sector.",
  keywords: [
    "Velath Prabhakaran",
    "Velath Engineering International FZC",
    "Managing Director UAE",
    "pressure vessels UAE",
    "boilers Sharjah",
    "heat exchangers oil gas",
    "steel engineering UAE",
    "industrial engineering UAE",
    "capital equipment UAE",
    "Kerala businessman UAE",
    "Thrissur UAE",
  ],
  authors: [{ name: "Velath Prabhakaran" }],
  openGraph: {
    title: "Velath Prabhakaran | Managing Director, Velath Engineering International FZC",
    description:
      "Leading UAE-based capital equipment and engineering services provider for the oil & gas and industrial sectors.",
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: "/prabhakaran.jpg",
        width: 400,
        height: 500,
        alt: "Velath Prabhakaran - Managing Director",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velath Prabhakaran | Managing Director, Velath Engineering International FZC",
    description:
      "Leading UAE-based capital equipment and engineering services provider for the oil & gas and industrial sectors.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#060d18",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Velath Prabhakaran",
  jobTitle: "Managing Director",
  image: "/prabhakaran.jpg",
  worksFor: {
    "@type": "Organization",
    name: "Velath Engineering International FZC",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sharjah",
      addressCountry: "AE",
    },
    industry: "Industrial Engineering, Oil & Gas",
  },
  homeLocation: {
    "@type": "Place",
    name: "United Arab Emirates",
  },
  birthPlace: {
    "@type": "Place",
    name: "Velur, Thrissur, Kerala, India",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jakarta.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
