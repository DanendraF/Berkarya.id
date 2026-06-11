"use client";

import { useState } from "react";

import HERO_VIDEO from "@/assets/vidlanding.mp4";

const HERO_FALLBACK =
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1600&q=70";

export default function Hero() {
  const [videoOk, setVideoOk] = useState(true);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background media */}
      <div className="absolute inset-0 -z-10">
        {videoOk ? (
          <video
            className="h-full w-full object-cover"
            src={HERO_VIDEO}
            poster={HERO_FALLBACK}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => setVideoOk(false)}
            aria-hidden="true"
          />
        ) : (
          <img
            src={HERO_FALLBACK}
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
          />
        )}
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        {/* Gold glow blob */}
        <div
          className="absolute -right-32 top-1/3 h-96 w-96 rounded-full blur-3xl opacity-40"
          style={{ background: "var(--gradient-gold)" }}
          aria-hidden="true"
        />
      </div>

      {/* Navbar lives in the page root (see Navbar.tsx) */}


      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-6 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl animate-[slide-up_0.9s_cubic-bezier(0.22,1,0.36,1)_both]">
          <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cream">
            <span
              className="h-1.5 w-1.5 rounded-full animate-pulse"
              style={{ background: "var(--gold)" }}
            />
            Berkarya untuk Indonesia
          </span>

          <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-cream sm:text-5xl md:text-7xl">
            Lu punya{" "}
            <span className="text-gradient-gold italic">ide gila?</span>
            <br />
            Wujudin bareng kita.
          </h1>

          <p className="mt-6 max-w-xl text-base text-cream/85 md:text-lg">
            Dari desain, coding, konten, sampai bisnis - pilih jalannya,
            kita fasilitasi. <span className="font-semibold text-cream">Gratis.</span>
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#cta"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold text-cream shadow-[0_12px_40px_-12px_oklch(0.42_0.135_22/0.7)] transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
                style={{ background: "var(--gradient-maroon)" }}
              >
                <span>✨ Mulai Karyaku</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#about"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-8 py-4 text-base font-semibold text-cream backdrop-blur-md transition-all duration-300 hover:border-gold/50 hover:bg-cream/10 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:scale-[1.04] active:scale-[0.98]"
              >
                <span>🎯 Coba tantangan 7 hari</span>
              </a>
            </div>
            <p className="text-xs text-cream/70 sm:pl-2">
              💡 <span className="font-semibold text-gold">Tantangan 7 Hari:</span> Selesaikan project pertamamu dengan bimbingan mentor.
            </p>
          </div>

          {/* Mini stats glass row */}
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-3">
            {[
              { k: "2.3K+", v: "Kreator aktif" },
              { k: "34", v: "Provinsi" },
              { k: "150+", v: "Mentor" },
            ].map((s) => (
              <div
                key={s.v}
                className="glass-dark rounded-2xl px-3 py-3 text-center text-cream"
              >
                <div className="text-xl font-extrabold text-gradient-gold">{s.k}</div>
                <div className="text-[11px] uppercase tracking-wider text-cream/75">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Visual (Right Column) */}
        <div className="hidden lg:flex justify-center animate-[fade-in_1s_ease-out_both]">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Kreator Berkolaborasi"
            className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border border-cream/20"
          />
        </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/70 animate-[float_3s_ease-in-out_infinite]"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-1 text-xs">
          <span>Scroll</span>
          <span>↓</span>
        </div>
      </div>
    </section>
  );
}
