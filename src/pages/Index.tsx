import albumCover from "@/assets/kataloget-cover.jpeg";
import { Button } from "@/components/ui/button";

const tracks = [
  "Morgenlys",
  "Bakkerne",
  "Kataloget",
  "Stille Vand",
  "Mellem Træerne",
  "Hjem",
  "Vinternat",
  "Sidste Sang",
];

const shows = [
  { date: "14. MAJ", city: "København", venue: "VEGA" },
  { date: "22. MAJ", city: "Aarhus", venue: "Train" },
  { date: "05. JUN", city: "Odense", venue: "Posten" },
  { date: "19. JUN", city: "Aalborg", venue: "Studenterhuset" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-cream text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="container flex items-center justify-between py-6">
          <a href="#top" className="font-display text-2xl tracking-wider text-brand-brown-deep">
            ALLE FORREST
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-brand-brown-deep">
            <a href="#album" className="hover:text-brand-orange-deep transition-colors">Album</a>
            <a href="#koncerter" className="hover:text-brand-orange-deep transition-colors">Koncerter</a>
            <a href="#om" className="hover:text-brand-orange-deep transition-colors">Om</a>
            <a href="#kontakt" className="hover:text-brand-orange-deep transition-colors">Kontakt</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden grain">
        <div className="absolute inset-0 bg-gradient-hills" aria-hidden />
        {/* Wave silhouettes */}
        <svg
          className="absolute inset-x-0 bottom-0 w-full h-[70%]"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d="M0,220 C320,120 600,300 900,220 C1140,160 1280,260 1440,200 L1440,600 L0,600 Z" fill="hsl(var(--orange-light))" />
          <path d="M0,320 C260,220 580,400 880,320 C1120,260 1280,360 1440,300 L1440,600 L0,600 Z" fill="hsl(var(--orange))" />
          <path d="M0,420 C240,340 560,480 860,420 C1120,370 1300,440 1440,400 L1440,600 L0,600 Z" fill="hsl(var(--orange-deep))" />
          <path d="M0,500 C260,460 600,540 900,500 C1140,470 1300,510 1440,490 L1440,600 L0,600 Z" fill="hsl(var(--brown))" />
        </svg>

        <div className="container relative z-10 pt-40 pb-32 md:pt-48 md:pb-48 text-center">
          <p className="text-sm md:text-base font-semibold uppercase tracking-[0.4em] text-brand-brown-deep/80 mb-6">
            Debutalbum · Ude nu
          </p>
          <h1 className="font-display text-7xl sm:text-8xl md:text-[10rem] leading-none text-brand-brown-deep tracking-wide text-balance">
            ALLE FORREST
          </h1>
          <p className="mt-8 max-w-xl mx-auto text-lg text-brand-brown-deep/80">
            Et nyt dansk lydlandskab — varmt, jordnært og fyldt med horisont.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-brand-brown-deep text-brand-cream hover:bg-brand-brown rounded-full px-8 h-12 uppercase tracking-widest text-xs">
              Lyt til Kataloget
            </Button>
            <Button size="lg" variant="outline" className="border-brand-brown-deep text-brand-brown-deep hover:bg-brand-brown-deep hover:text-brand-cream rounded-full px-8 h-12 uppercase tracking-widest text-xs bg-transparent">
              Se koncerter
            </Button>
          </div>
        </div>
      </section>

      {/* Album */}
      <section id="album" className="bg-brand-brown-deep text-brand-cream py-24 md:py-32">
        <div className="container grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-orange/20 rounded-sm blur-2xl" aria-hidden />
            <img
              src={albumCover}
              alt="Albumcover for Kataloget af Alle Forrest"
              className="relative w-full max-w-md mx-auto rounded-sm shadow-warm"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-orange-light mb-4">
              Album · 2026
            </p>
            <h2 className="font-display text-6xl md:text-8xl leading-none text-brand-cream">
              KATALOGET
            </h2>
            <p className="mt-6 text-brand-cream/75 text-lg max-w-md">
              Otte sange om landskaber, længsel og lange aftener. Indspillet i en gammel lade i Sønderjylland over en sommer.
            </p>

            <ol className="mt-10 divide-y divide-brand-cream/10 border-y border-brand-cream/10">
              {tracks.map((t, i) => (
                <li key={t} className="flex items-center gap-6 py-3 group">
                  <span className="font-display text-2xl text-brand-orange w-8 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-brand-cream group-hover:text-brand-orange-light transition-colors">
                    {t}
                  </span>
                  <span className="text-xs text-brand-cream/50 tabular-nums">
                    {`0${Math.floor(Math.random() * 2) + 3}:${String(Math.floor(Math.random() * 60)).padStart(2, "0")}`}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-widest">
              {["Spotify", "Apple Music", "Tidal", "Bandcamp"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="px-5 py-3 rounded-full border border-brand-cream/20 hover:border-brand-orange hover:text-brand-orange-light transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shows */}
      <section id="koncerter" className="py-24 md:py-32 bg-brand-cream">
        <div className="container">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <h2 className="font-display text-5xl md:text-7xl text-brand-brown-deep">KONCERTER</h2>
            <p className="text-brand-brown/70 max-w-sm">Forår &amp; sommer 2026 — Kataloget Tour</p>
          </div>
          <ul className="divide-y divide-brand-brown-deep/15 border-y border-brand-brown-deep/15">
            {shows.map((s) => (
              <li key={s.date} className="grid grid-cols-12 items-center py-6 gap-4 group">
                <span className="col-span-3 md:col-span-2 font-display text-2xl md:text-3xl text-brand-orange-deep">
                  {s.date}
                </span>
                <span className="col-span-5 md:col-span-6 text-lg md:text-xl text-brand-brown-deep">
                  {s.city} <span className="text-brand-brown/60">— {s.venue}</span>
                </span>
                <span className="col-span-4 text-right">
                  <a
                    href="#"
                    className="inline-block text-xs uppercase tracking-widest px-5 py-3 rounded-full border border-brand-brown-deep text-brand-brown-deep hover:bg-brand-brown-deep hover:text-brand-cream transition-colors"
                  >
                    Køb billet
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section id="om" className="py-24 md:py-32 bg-brand-orange-deep text-brand-cream grain relative overflow-hidden">
        <div className="container grid md:grid-cols-5 gap-12 items-center relative z-10">
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-cream/70 mb-4">Om bandet</p>
            <h2 className="font-display text-5xl md:text-7xl">EN VARM HORISONT</h2>
          </div>
          <div className="md:col-span-3 space-y-5 text-brand-cream/90 text-lg leading-relaxed">
            <p>
              Alle Forrest er en dansk kvartet, der bygger sange ud af stille observationer — træer, marker, sene tog hjem.
            </p>
            <p>
              Med skæve harmonier, varme guitarer og en stemme der lægger sig tæt op ad lytteren, tegner bandet et landskab
              man kan gå ind i og blive lidt.
            </p>
            <p className="text-sm uppercase tracking-widest text-brand-cream/60 pt-4">
              Mads · Sigrid · Jonas · Alma
            </p>
          </div>
        </div>
      </section>

      {/* Footer / contact */}
      <footer id="kontakt" className="bg-brand-brown-deep text-brand-cream py-16">
        <div className="container grid md:grid-cols-3 gap-10">
          <div>
            <p className="font-display text-3xl tracking-wider">ALLE FORREST</p>
            <p className="text-brand-cream/60 mt-2 text-sm">Kataloget · Ude nu</p>
          </div>
          <div className="text-sm space-y-2">
            <p className="uppercase tracking-widest text-brand-orange-light text-xs mb-3">Kontakt</p>
            <p>Booking: <a className="hover:text-brand-orange-light" href="mailto:booking@alleforrest.dk">booking@alleforrest.dk</a></p>
            <p>Presse: <a className="hover:text-brand-orange-light" href="mailto:presse@alleforrest.dk">presse@alleforrest.dk</a></p>
          </div>
          <div className="text-sm space-y-2">
            <p className="uppercase tracking-widest text-brand-orange-light text-xs mb-3">Følg</p>
            <div className="flex gap-4">
              {["Instagram", "YouTube", "Spotify"].map((s) => (
                <a key={s} href="#" className="hover:text-brand-orange-light transition-colors">{s}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="container mt-12 pt-6 border-t border-brand-cream/10 text-xs text-brand-cream/50 flex justify-between">
          <span>© 2026 Alle Forrest</span>
          <span>Made with care i Danmark</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
