import { ArticlesSection } from "@/components/articles-section";
import { CategorySection } from "@/components/category-section";
import { CollectionsStrip } from "@/components/collections-strip";
import { CtaBanner } from "@/components/cta-banner";
import { CustomizeSection } from "@/components/customize-section";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { SaleBanner } from "@/components/sale-banner";
import { SiteFooter } from "@/components/site-footer";
import { TestimonialFeatures } from "@/components/testimonial-features";
import { TopBar } from "@/components/top-bar";
import { MarqueeHeading } from "@/components/marquee-heading";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <TopBar />
      <Header />
      <HeroSection />
      <CategorySection />
      <CollectionsStrip />
      <MarqueeHeading text="premium t-shirt sales  *  everyday icons  *  fresh new drops" />
      <SaleBanner />
      <CustomizeSection />
      <TestimonialFeatures />
      <ArticlesSection />
      <CtaBanner />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
