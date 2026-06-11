import { useReveal } from "./use-reveal";

const STEPS = [
  {
    num: "01",
    title: "Pilih Minat & Daftar",
    desc: "Tentukan jalurmu: Desain, Coding, Konten, atau Bisnis. Daftar gratis dalam 1 menit.",
  },
  {
    num: "02",
    title: "Tantangan 7 Hari",
    desc: "Selesaikan mini-project dengan panduan mentor. Buktikan komitmenmu untuk mulai.",
  },
  {
    num: "03",
    title: "Showcase & Hiring",
    desc: "Karya terbaikmu otomatis masuk ke radar 80+ hiring partner kami.",
  },
];

export default function HowItWorks() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden bg-foreground text-cream">
      {/* Decorative gradient */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,var(--maroon)_0,transparent_50%)] opacity-20 blur-3xl rounded-full"
        aria-hidden
      />

      <div ref={ref} className="mx-auto max-w-6xl px-6 relative z-10">
        <div className={`max-w-2xl ${visible ? "animate-[slide-up_0.7s_ease-out_both]" : "opacity-0"}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gradient-gold">
            Cara Kerja
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            Tiga langkah menuju karya nyatamu.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <div 
              key={step.num}
              className={`relative glass-dark p-8 rounded-3xl ${visible ? "animate-[fade-in_0.7s_ease-out_both]" : "opacity-0"}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="text-5xl font-black text-cream/10 absolute top-4 right-6 pointer-events-none">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mt-8">{step.title}</h3>
              <p className="mt-3 text-sm text-cream/70 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
