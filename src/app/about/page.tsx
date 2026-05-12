import { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover the story behind Vintage Salon. Over 12 years of expertise in luxury beauty, skin care, hair care, and bridal services in New York.",
};

export default function AboutPage() {
  return <AboutContent />;
}
