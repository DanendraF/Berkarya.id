import { useEffect, useState } from "react";
import { useReveal } from "./use-reveal";

const FEATURES = [
  {
    icon: "💡",
    tag: "01 - Mentoring",
    title: "1-on-1 bareng praktisi yang udah ngirim karya",
    desc: "Sesi privat & group bareng desainer, engineer, dan kreator yang karyanya kamu lihat tiap hari.",
    stat: "150+",
    statLabel: "mentor aktif",
    span: "lg:col-span-2 lg:row-span-2",
    accent: "maroon",
  },
  {
    icon: "🤝",
    tag: "02 - Komunitas",
    title: "Kolaborasi lintas kota & disiplin",
    desc: "Weekly jam, offline meetup di 12 kota.",
    span: "lg:col-span-2",
    accent: "gold",
  },
  {
    icon: "🛠",
    tag: "03 - Tools",
    title: "Figma, GitHub Pack, resource kurasi",
    desc: "Akses pro tools - gratis.",
    span: "",
    accent: "neu",
  },
  {
    icon: "🏆",
    tag: "04 - Showcase",
    title: "Pajang karyamu ke 80+ studio mitra",
    desc: "Karya terbaik langsung dilihat hiring partner.",
    span: "",
    accent: "neu",
  },
];

const KARYA = [
  {
    src: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=70",
    title: "Brand Identity - Warung Lokal",
    by: "Sari, 21",
    category: "Branding",
    city: "Bandung",
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=70",
    title: "Dashboard Edu-Tech",
    by: "Rafi, 22",
    category: "Product",
    city: "Jakarta",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kampanye #LautKita",
    by: "Andi, 19",
    category: "Konten",
    city: "Makassar",
  },
  {
    src: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Mobile App - Tani Pintar",
    by: "Dewi, 23",
    category: "Product",
    city: "Yogyakarta",
  },
];

const TESTIS = [
  {
    text: "Dari gabung program ini, project animasiku dipakai buat kampanye sosial. Asli life-changing.",
    name: "Andi",
    age: 19,
    avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "Mentor-nya nggak nge-judge. Dari nol coding sekarang udah ngerjain freelance pertama.",
    name: "Nadya",
    age: 20,
    avatar: "https://images.unsplash.com/photo-1544502062-f82887f03d1c?q=80&w=1259&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "Komunitasnya bikin betah. Tiap minggu ada hal baru yang bikin pengen ngulik.",
    name: "Yoga",
    age: 22,
    avatar: "https://images.unsplash.com/photo-1519755898819-cef8c3021d6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full blur-3xl opacity-40"
        style={{ background: "var(--gradient-gold)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full blur-3xl opacity-30"
        style={{ background: "var(--gradient-maroon)" }}
      />

      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <header
          className={`mx-auto max-w-2xl text-center ${visible ? "animate-[slide-up_0.7s_ease-out_both]" : "opacity-0"}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "var(--maroon)" }}>
            Program
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            Apa yang bakal lo <span className="text-gradient-gold">dapet?</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Empat pilar yang dirancang biar lo nggak cuma belajar - tapi benar-benar ngirim karya.
          </p>
        </header>

        {/* Feature grid */}
        <FeatureGrid />

        {/* Testimoni */}
        <TestiCarousel items={TESTIS} />

        {/* Social proof */}
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <div className="glass inline-flex items-center gap-3 rounded-full px-5 py-2 text-sm font-semibold">
            <span
              className="inline-block h-2 w-2 rounded-full animate-pulse"
              style={{ background: "var(--maroon)" }}
            />
            Sudah <span className="text-gradient-gold text-base">2.300+</span>
            anak muda dari{" "}
            <span className="font-extrabold" style={{ color: "var(--maroon)" }}>
              34 provinsi
            </span>{" "}
            berkarya
          </div>
          <ProvinceBadges />
        </div>

        {/* Karya alumni */}
        <div id="karya" className="mt-20">
          <div className="mb-6 flex items-end justify-between">
            <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Karya alumni pilihan
            </h3>
            <a
              href="#cta"
              className="hidden text-sm font-semibold md:inline-block"
              style={{ color: "var(--maroon)" }}
            >
              Lihat semua →
            </a>
          </div>
          <KaryaGrid items={KARYA} />
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(200px,auto)]">
      {FEATURES.map((f, i) => (
        <FeatureCard key={f.title} {...f} index={i} />
      ))}
    </div>
  );
}

function FeatureCard({
  icon,
  tag,
  title,
  desc,
  stat,
  statLabel,
  span,
  accent,
  index,
}: {
  icon: string;
  tag: string;
  title: string;
  desc: string;
  stat?: string;
  statLabel?: string;
  span?: string;
  accent: string;
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const isFeatured = accent === "maroon";
  const isGold = accent === "gold";

  const base =
    "group relative overflow-hidden rounded-3xl p-6 md:p-7 transition-all duration-300 hover:-translate-y-1.5 flex flex-col";

  const surface = isFeatured
    ? "text-cream shadow-[0_24px_60px_-20px_oklch(0.42_0.135_22/0.55)]"
    : isGold
      ? "glass shadow-[0_18px_40px_-20px_oklch(0.78_0.135_85/0.5)]"
      : "neu hover:shadow-[0_24px_60px_-20px_oklch(0.42_0.135_22/0.3)]";

  const featuredBg = isFeatured
    ? { background: "var(--gradient-maroon)" }
    : isGold
      ? { background: "linear-gradient(135deg, oklch(0.97 0.04 88 / 0.9), oklch(0.88 0.09 88 / 0.6))" }
      : undefined;

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${index * 90}ms`, ...featuredBg }}
      className={`${base} ${surface} ${span ?? ""} ${
        visible ? "animate-[slide-up_0.7s_ease-out_both]" : "opacity-0"
      }`}
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl opacity-0 transition-opacity group-hover:opacity-70"
        style={{
          background: isFeatured ? "var(--gradient-gold)" : "var(--gradient-maroon)",
        }}
        aria-hidden
      />

      <div className="flex items-center justify-between">
        <span
          className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
            isFeatured ? "text-cream/70" : "text-foreground/55"
          }`}
        >
          {tag}
        </span>
        <div
          className={`grid h-11 w-11 place-items-center rounded-2xl text-xl ${
            isFeatured ? "bg-cream/15 backdrop-blur" : "neu"
          }`}
          aria-hidden
        >
          {icon}
        </div>
      </div>

      <h3
        className={`mt-4 font-extrabold tracking-tight ${
          isFeatured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-2 text-sm leading-relaxed ${
          isFeatured ? "text-cream/80" : "text-muted-foreground"
        }`}
      >
        {desc}
      </p>

      {stat && (
        <div
          className={`mt-auto flex items-baseline gap-2 pt-5 ${
            isFeatured ? "border-t border-cream/15" : "border-t border-foreground/10"
          }`}
        >
          <span className={`text-3xl font-black ${isFeatured ? "text-gradient-gold" : ""}`} style={!isFeatured ? { color: "var(--maroon)" } : undefined}>
            {stat}
          </span>
          <span className={`text-xs ${isFeatured ? "text-cream/70" : "text-muted-foreground"}`}>
            {statLabel}
          </span>
        </div>
      )}
    </div>
  );
}


function TestiCarousel({
  items,
}: {
  items: { text: string; name: string; age: number; avatar: string }[];
}) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, [items.length]);
  const t = items[i];
  return (
    <div className="mt-14 flex justify-center">
      <figure
        key={i}
        className="glass max-w-2xl rounded-3xl p-8 text-center animate-[fade-in_0.6s_ease-out_both]"
      >
        <div className="mx-auto mb-5 h-16 w-16 overflow-hidden rounded-full neu p-1">
          <img
            src={t.avatar}
            alt={`Foto ${t.name}`}
            className="h-full w-full rounded-full object-cover"
            loading="lazy"
          />
        </div>
        <blockquote className="text-base italic leading-relaxed md:text-lg">
          “{t.text}”
        </blockquote>
        <figcaption className="mt-4 text-sm font-semibold" style={{ color: "var(--maroon)" }}>
          - {t.name}, {t.age} thn
        </figcaption>
        <div className="mt-5 flex justify-center gap-2" role="tablist" aria-label="Testimoni">
          {items.map((_, idx) => (
            <button
              key={idx}
              role="tab"
              aria-selected={idx === i}
              aria-label={`Testimoni ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-8" : "w-2 opacity-40"
              }`}
              style={{ background: "var(--maroon)" }}
            />
          ))}
        </div>
      </figure>
    </div>
  );
}

function ProvinceBadges() {
  const provinces = ["Aceh", "Sumut", "Riau", "Jakarta", "Jabar", "Jateng", "DIY", "Jatim", "Bali", "NTT", "Kalbar", "Sulsel", "Maluku", "Papua"];
  return (
    <div className="mt-2 flex max-w-3xl flex-wrap justify-center gap-2">
      {provinces.map((p) => (
        <span
          key={p}
          className="neu rounded-full px-3 py-1 text-xs font-semibold transition hover:scale-110 hover:text-cream"
          style={{ ["--hover" as string]: "var(--maroon)" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--maroon)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "")}
        >
          {p}
        </span>
      ))}
    </div>
  );
}

type Karya = {
  src: string;
  title: string;
  by: string;
  category: string;
  city: string;
};

function getGridClasses(index: number, total: number): string {
  if (total === 1) {
    return "md:col-span-3 md:row-span-2";
  }
  if (total === 2) {
    if (index === 0) return "md:col-span-2 md:row-span-2";
    return "md:col-span-1 md:row-span-2";
  }
  if (total === 3) {
    if (index === 0) return "md:col-span-2 md:row-span-2";
    return "md:row-span-1";
  }
  if (total === 4) {
    if (index === 0) return "md:col-span-2 md:row-span-2";
    if (index === 3) return "md:col-span-3 md:row-span-1";
    return "md:row-span-1";
  }
  if (index === 0) return "md:col-span-2 md:row-span-2";
  return "md:row-span-1";
}

function KaryaGrid({ items }: { items: Karya[] }) {
  const categories = ["Semua", ...Array.from(new Set(items.map((i) => i.category)))];
  const [active, setActive] = useState("Semua");
  const filtered = active === "Semua" ? items : items.filter((i) => i.category === active);

  return (
    <div>
      {/* Category chips */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((c) => {
          const on = c === active;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition ${
                on
                  ? "text-cream shadow-md"
                  : "neu text-foreground/70 hover:text-foreground"
              }`}
              style={on ? { background: "var(--gradient-maroon)" } : undefined}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Bento layout: featured + grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:auto-rows-[240px]">
        {filtered.map((k, i) => {
          const featured = i === 0 || (filtered.length === 4 && i === 3) || (filtered.length === 1);
          return (
            <KaryaCard
              key={k.title}
              k={k}
              featured={featured}
              className={getGridClasses(i, filtered.length)}
            />
          );
        })}
      </div>
    </div>
  );
}

function KaryaCard({
  k,
  className = "",
  featured = false,
}: {
  k: Karya;
  className?: string;
  featured?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <a
      href="#karya"
      className={`group relative block overflow-hidden rounded-3xl glass min-h-[200px] ${className}`}
    >
      {!loaded && <div className="absolute inset-0 skeleton" aria-hidden />}
      <img
        src={k.src}
        alt={`Karya ${k.title} oleh ${k.by}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.04_25/0.9)] via-[oklch(0.22_0.04_25/0.2)] to-transparent" />

      {/* Top tags */}
      <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
        <span
          className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cream backdrop-blur"
          style={{ background: "oklch(0.42 0.135 22 / 0.75)" }}
        >
          {k.category}
        </span>
        <span className="rounded-full bg-cream/85 px-2.5 py-1 text-[10px] font-bold text-foreground backdrop-blur">
          📍 {k.city}
        </span>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-5 text-cream">
        <div className="text-base font-extrabold leading-tight md:text-lg">{k.title}</div>
        <div className="mt-1 flex items-center justify-between text-xs text-cream/80">
          <span>oleh {k.by}</span>
          <span
            className="inline-flex translate-x-1 items-center gap-1 rounded-full bg-cream/15 px-2.5 py-1 font-semibold opacity-0 backdrop-blur transition-all group-hover:translate-x-0 group-hover:opacity-100"
          >
            Lihat →
          </span>
        </div>
      </div>
    </a>
  );
}

