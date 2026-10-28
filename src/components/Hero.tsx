import { ArrowDown, Star } from 'lucide-react';
import { HERO_IMAGE } from '@/data';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-coffee-950/70 via-coffee-950/55 to-coffee-950/85" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cream-200/30 bg-cream-100/10 px-4 py-1.5 text-cream-100 backdrop-blur-sm animate-fade-in">
          <span className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-caramel-400 text-caramel-400" />
            ))}
          </span>
          <span className="text-xs font-medium tracking-wide">
            Roasting small batches since 2014
          </span>
        </div>

        <h1 className="font-display text-5xl font-bold leading-[1.05] text-cream-50 text-balance sm:text-6xl lg:text-7xl animate-fade-up">
          Brewed to Perfection
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream-200/90 animate-fade-up [animation-delay:0.15s] opacity-0">
          Slow-roasted beans, handcrafted pours, and a warm corner of the city
          that feels like home. Come for the coffee — stay for the calm.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up [animation-delay:0.3s] opacity-0">
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 rounded-full bg-caramel-500 px-8 py-4 text-base font-semibold text-coffee-950 shadow-xl shadow-caramel-600/30 transition-all hover:scale-[1.03] hover:bg-caramel-400"
          >
            View Menu
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#about"
            className="rounded-full border border-cream-200/40 px-8 py-4 text-base font-semibold text-cream-50 backdrop-blur-sm transition-colors hover:bg-cream-100/10"
          >
            Our Story
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream-200/40 p-1.5">
          <span className="h-2 w-1 rounded-full bg-cream-200/80 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
