import { Clock, MapPin, Phone, Instagram, Facebook, Twitter, Coffee } from 'lucide-react';

const hours = [
  { day: 'Monday – Friday', time: '7:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 9:00 PM' },
  { day: 'Sunday', time: '8:00 AM – 6:00 PM' },
];

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-coffee-950 text-cream-200">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#top" className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-caramel-500 text-coffee-950">
                <Coffee className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-xl font-semibold text-cream-50">
                Ember & Oak
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-300/70">
              Small-batch coffee, warm corners, and a neighborhood that feels
              like home. Stop by any day of the week.
            </p>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-cream-50">
              <MapPin className="h-5 w-5 text-caramel-400" /> Visit Us
            </h3>
            <address className="text-sm not-italic leading-relaxed text-cream-300/80">
              412 Maple Lane
              <br />
              Old Town District
              <br />
              Portland, OR 97204
            </address>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-cream-50">
              <Clock className="h-5 w-5 text-caramel-400" /> Hours
            </h3>
            <ul className="space-y-2 text-sm text-cream-300/80">
              {hours.map((h) => (
                <li key={h.day} className="flex flex-col">
                  <span className="font-medium text-cream-200">{h.day}</span>
                  <span className="text-cream-300/60">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-cream-50">
              <Phone className="h-5 w-5 text-caramel-400" /> Contact
            </h3>
            <a
              href="tel:+15035550127"
              className="text-sm text-cream-300/80 transition-colors hover:text-caramel-400"
            >
              (503) 555-0127
            </a>
            <a
              href="mailto:hello@emberandoak.co"
              className="mt-1 block text-sm text-cream-300/80 transition-colors hover:text-caramel-400"
            >
              hello@emberandoak.co
            </a>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-cream-300/20 text-cream-300 transition-all hover:scale-110 hover:border-caramel-400 hover:text-caramel-400"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream-300/10 pt-8 text-sm text-cream-300/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Ember & Oak Coffee. All rights reserved.</p>
          <p>Brewed with love in Portland, OR.</p>
        </div>
      </div>
    </footer>
  );
}
