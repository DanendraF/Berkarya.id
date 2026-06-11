"use client";

export type Minat = "Desain" | "Coding" | "Konten Kreator";
export const MINAT_LABEL: Record<Minat, string> = {
  Desain: "Desainer",
  Coding: "Developer",
  "Konten Kreator": "Konten Kreator",
};

const OPTIONS: { key: Minat; icon: string }[] = [
  { key: "Desain", icon: "🎨" },
  { key: "Coding", icon: "💻" },
  { key: "Konten Kreator", icon: "🎬" },
];

export default function MinatSelector({
  value,
  onChange,
}: {
  value: Minat;
  onChange: (m: Minat) => void;
}) {
  return (
    <div
      role="radiogroup"
      aria-label="Pilih minat"
      className="grid grid-cols-3 gap-2 rounded-2xl neu-inset p-2"
    >
      {OPTIONS.map((o) => {
        const active = value === o.key;
        return (
          <button
            key={o.key}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(o.key)}
            className={`flex flex-col items-center justify-center gap-1 rounded-xl px-3 py-3 text-xs font-bold transition-all md:text-sm ${
              active
                ? "text-cream shadow-[0_10px_30px_-10px_oklch(0.42_0.135_22/0.5)] scale-[1.02]"
                : "text-foreground/70 hover:text-foreground"
            }`}
            style={active ? { background: "var(--gradient-maroon)" } : undefined}
          >
            <span className="text-xl" aria-hidden>{o.icon}</span>
            <span>{o.key}</span>
          </button>
        );
      })}
    </div>
  );
}
