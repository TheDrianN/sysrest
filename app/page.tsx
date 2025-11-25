"use client";
import FeaturesGrid from "@/components/sections/FeatureSection";
import PricingSection from "@/components/sections/PricingSection";
import Hero from "@/components/sections/Hero";
import CtaSection from "@/components/sections/CtaSection";
import SunatSection from "@/components/sections/SunatSection";
import FAQSection from "@/components/sections/FAQSection";
import CustomSolutionsSection from "@/components/sections/CustomSolutionsSection";
import Layout from "@/components/layouts/Layout";

export default function Home() {
  return (
    <main className="w-full">
      <Layout>
        <Hero />
        <FeaturesGrid />
        <SunatSection />
        <PricingSection />
        <CustomSolutionsSection />
        <FAQSection />
        <CtaSection />
      </Layout>
    </main>
  );
}
