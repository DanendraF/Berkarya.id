const SOCIALS = [
  { name: "Instagram", href: "https://instagram.com/", icon: InstagramIcon },
  { name: "TikTok", href: "https://tiktok.com/", icon: TikTokIcon },
  { name: "GitHub", href: "https://github.com/", icon: GitHubIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]" style={{ background: "var(--maroon)" }}>
      {/* Trust Badges */}
      <div className="border-b border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 text-center text-cream sm:flex-row sm:justify-between sm:text-left">
          <div className="max-w-sm">
            <h4 className="text-lg font-bold">Dipercaya oleh Hiring Partner</h4>
            <p className="mt-2 text-sm text-cream/70">Karya alumni kami telah dilirik oleh berbagai perusahaan teknologi top di Indonesia.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-70 grayscale transition-all hover:grayscale-0">
            <span className="text-xl font-black italic tracking-tighter">GOJEK</span>
            <span className="text-xl font-bold tracking-tight">tokopedia</span>
            <span className="text-xl font-bold">Traveloka</span>
            <span className="text-xl font-black">Shopee</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-cream sm:flex-row">
        <p className="text-sm text-cream/85">
          © {new Date().getFullYear()} Berkarya.id - Danendra Farrel Adriansyah.
        </p>
        <ul className="flex items-center gap-2">
          {SOCIALS.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 text-cream transition hover:bg-cream/15"
              >
                <s.icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16 3c.5 2.4 2.2 4 4.5 4.3v3a8 8 0 0 1-4.5-1.4v6.5a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.2a3 3 0 1 0 2 2.8V3h3z" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.3-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.48.12-3.08 0 0 .98-.31 3.2 1.18a11 11 0 0 1 5.83 0c2.22-1.5 3.2-1.18 3.2-1.18.64 1.6.24 2.79.12 3.08.75.82 1.2 1.85 1.2 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
    </svg>
  );
}
