import { useEffect, useState } from 'react';
import { Coffee, Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit', href: '#footer' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-coffee-950/95 shadow-lg shadow-coffee-950/30 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-2 text-cream-100">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-caramel-500 text-coffee-950 transition-transform hover:scale-105">
            <Coffee className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-semibold tracking-wide">
            Ember & Oak
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-cream-200/90 transition-colors hover:text-caramel-400"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#menu"
              className="rounded-full bg-caramel-500 px-5 py-2 text-sm font-semibold text-coffee-950 transition-colors hover:bg-caramel-400"
            >
              Order Ahead
            </a>
          </li>
        </ul>

        <button
          className="text-cream-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden">
          <ul className="flex flex-col gap-1 bg-coffee-950/98 px-6 pb-6 pt-2 backdrop-blur-md">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-cream-200 hover:bg-coffee-800/60 hover:text-caramel-400"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
