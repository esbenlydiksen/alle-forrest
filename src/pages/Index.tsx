import albumCover from "@/assets/kataloget-cover.jpeg";
import { Button } from "@/components/ui/button";


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
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-brand-brown-deep text-brand-cream hover:bg-brand-brown rounded-full px-8 h-12 uppercase tracking-widest text-xs">
              <a href="#album">Lyt til Kataloget</a>
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


            <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-widest">
              {[
                { name: "Spotify", url: "https://open.spotify.com/album/6SXdhvAAEhrkkCVjDbXMd3" },
                { name: "Apple Music", url: "https://itunes.apple.com/album/id/1895031976" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full border border-brand-cream/20 hover:border-brand-orange hover:text-brand-orange-light transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* About */}
      <section id="om" className="py-24 md:py-32 bg-brand-orange-deep text-brand-cream grain relative overflow-hidden">
        <div className="container grid md:grid-cols-5 gap-12 items-center relative z-10">
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-cream/70 mb-4">Om bandet</p>
            <h2 className="font-display text-5xl md:text-7xl">ALLE FORREST</h2>
          </div>
          <div className="md:col-span-3 space-y-5 text-brand-cream/90 text-lg leading-relaxed">
            <p>
              Alle Forrest er en dansk trio bestående af Anders Basby, Uffe Kasper Rasmussen og Esben Lydiksen.
            </p>
          </div>
        </div>
      </section>

      {/* Footer / contact */}
      <footer id="kontakt" className="bg-brand-brown-deep text-brand-cream py-16">
        <div className="container grid md:grid-cols-2 gap-10">
          <div>
            <p className="font-display text-3xl tracking-wider">ALLE FORREST</p>
            <p className="text-brand-cream/60 mt-2 text-sm">Kataloget · Ude nu</p>
          </div>
          <div className="text-sm space-y-2">
            <p className="uppercase tracking-widest text-brand-orange-light text-xs mb-3">Kontakt</p>
            <p>Booking: <a className="hover:text-brand-orange-light" href="mailto:booking@alleforrest.dk">booking@alleforrest.dk</a></p>
            <p>Presse: <a className="hover:text-brand-orange-light" href="mailto:presse@alleforrest.dk">presse@alleforrest.dk</a></p>
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
