import { Metadata } from "next";
import { PricingContent } from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description: "View our transparent pricing for premium beauty services including skin care, hair care, body spa, bridal packages, and more at Vintage Salon.",
};

export default function PricingPage() {
  return <PricingContent />;
}
