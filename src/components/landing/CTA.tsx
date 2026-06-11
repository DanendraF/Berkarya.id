"use client";

import { useState } from "react";
import MinatSelector, { MINAT_LABEL, type Minat } from "./MinatSelector";

const AVATARS = [
  "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1544502062-f82887f03d1c?q=80&w=1259&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1519755898819-cef8c3021d6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function CTA() {
  const [minat, setMinat] = useState<Minat>("Desain");
  const [nama, setNama] = useState("");
  const [kontak, setKontak] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [pulse, setPulse] = useState(0);

  const onPickMinat = (m: Minat) => {
    setMinat(m);
    setPulse((n) => n + 1);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="cta"
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background:
          "radial-gradient(60% 60% at 50% 0%, oklch(0.78 0.135 85 / 0.25), transparent 70%), var(--cream)",
      }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left copy */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "var(--maroon)" }}>
            Gabung sekarang
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
            Siap mulai <span className="text-gradient-gold">berkarya?</span>
          </h2>
          <p className="mt-4 max-w-md text-base text-muted-foreground">
            Pilih minatmu di bawah, isi 2 kolom, dan tim kami akan kirim panduan onboarding dalam 24 jam.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              {AVATARS.map((a, i) => (
                <img
                  key={i}
                  src={a}
                  alt=""
                  loading="lazy"
                  className="h-10 w-10 rounded-full border-2 border-[var(--cream)] object-cover"
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Bergabung dengan{" "}
              <span className="font-bold" style={{ color: "var(--maroon)" }}>
                1.200+ creator
              </span>{" "}
              lain hari ini.
            </p>
          </div>

          <ul className="mt-6 space-y-2 text-sm">
            {[
              "Tidak ada biaya - 100% gratis.",
              "Cukup 1 menit daftar.",
              "Bisa berhenti kapan aja, no commitment.",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span
                  className="inline-flex h-5 w-5 items-center justify-center rounded-full text-cream text-xs"
                  style={{ background: "var(--maroon)" }}
                  aria-hidden
                >
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Right form card */}
        <div className="glass relative rounded-3xl p-6 md:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-10 right-10 h-32 w-32 rounded-full blur-3xl opacity-50"
            style={{ background: "var(--gradient-gold)" }}
          />

          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
            1. Pilih minat
          </label>
          <MinatSelector value={minat} onChange={onPickMinat} />

          {submitted ? (
            <div className="mt-6 rounded-2xl neu p-6 text-center animate-[scale-in_0.3s_ease-out_both]">
              <div className="text-3xl">🎉</div>
              <h3 className="mt-2 text-lg font-extrabold">Mantap, {nama || "kreator"}!</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Cek email / WA kamu dalam 24 jam buat onboarding sebagai{" "}
                <span className="font-bold" style={{ color: "var(--maroon)" }}>
                  {MINAT_LABEL[minat]}
                </span>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="nama" className="mb-1 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Nama
                </label>
                <input
                  id="nama"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  required
                  className="w-full rounded-xl neu-inset bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-[var(--gold)]"
                  placeholder="Nama lengkap"
                />
              </div>
              <div>
                <label htmlFor="kontak" className="mb-1 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Email / No WA
                </label>
                <input
                  id="kontak"
                  value={kontak}
                  onChange={(e) => setKontak(e.target.value)}
                  required
                  className="w-full rounded-xl neu-inset bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-[var(--gold)]"
                  placeholder="kamu@email.com atau 0812..."
                />
              </div>

              <button
                key={pulse}
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-extrabold text-cream shadow-[0_12px_40px_-12px_oklch(0.55_0.22_25/0.7)] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] animate-[scale-in_0.25s_ease-out_both]"
                style={{ background: "linear-gradient(135deg, #e53935, #b71c1c)" }}
              >
                Mulai sebagai {MINAT_LABEL[minat]} - Gratis
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>

              <p className="text-center text-[11px] text-muted-foreground">
                Dengan daftar kamu setuju dengan Syarat & Kebijakan Privasi kami.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
