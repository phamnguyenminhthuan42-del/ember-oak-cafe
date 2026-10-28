import { Leaf } from 'lucide-react';
import { ABOUT_IMAGE } from '@/data';

const stats = [
  { value: '10+', label: 'Years roasting' },
  { value: '12', label: 'Single origins' },
  { value: '100%', label: 'Ethically sourced' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-coffee-900/20">
            <img
              src={ABOUT_IMAGE}
              alt="Freshly roasted coffee beans close up"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-coffee-800 p-6 shadow-xl sm:block">
            <Leaf className="h-8 w-8 text-caramel-400" />
            <p className="mt-2 font-display text-lg font-semibold text-cream-100">
              Farm to cup
            </p>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-caramel-500">
            About Us
          </p>
          <h2 className="font-display text-4xl font-bold text-coffee-900 text-balance lg:text-5xl">
            A love letter to the bean
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-coffee-700">
            <p>
              Ember & Oak began in a tiny garage with a secondhand roaster and a
              stubborn belief: that great coffee should slow you down, not speed
              you up. A decade later we still roast in small batches, tasting
              every lot before it earns a place on the bar.
            </p>
            <p>
              We partner directly with growers who treat their land like a
              promise — because the best cup always starts at the farm. Then we
              bring it here, to a sunlit corner where neighbors become regulars
              and regulars become friends.
            </p>
          </div>

          <div className="mt-10 flex gap-8 border-t border-coffee-200 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-bold text-coffee-800">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-coffee-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
