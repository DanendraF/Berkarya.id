import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import HowItWorks from "@/components/landing/HowItWorks";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Berkarya untuk Indonesia - Wujudkan ide gilamu, gratis" },
      {
        name: "description",
        content:
          "Program kreatif untuk generasi muda Indonesia: mentoring praktisi, komunitas, tools gratis, dan showcase ke hiring partner. Mulai karyamu hari ini.",
      },
      { property: "og:title", content: "Berkarya untuk Indonesia" },
      {
        property: "og:description",
        content:
          "Dari desain, coding, konten, sampai bisnis - pilih jalannya, kita fasilitasi. Gratis.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <CTA />
      <Footer />
      <FloatingCTA />
    </main>
  );
}

function FloatingCTA() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden animate-[slide-up_0.3s_ease-out_both]">
      <a href="#cta" className="flex w-full items-center justify-center rounded-2xl px-6 py-4 text-base font-extrabold text-cream shadow-2xl active:scale-95 transition-transform" style={{ background: "linear-gradient(135deg, #e53935, #b71c1c)" }}>
        Gabung Sekarang - Gratis
      </a>
    </div>
  );
}
