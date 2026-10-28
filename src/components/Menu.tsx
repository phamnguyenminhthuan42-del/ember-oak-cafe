import { Coffee as CoffeeIcon, Leaf, Croissant } from 'lucide-react';
import { menu } from '@/data';

const icons: Record<string, typeof CoffeeIcon> = {
  Coffee: CoffeeIcon,
  Tea: Leaf,
  Pastries: Croissant,
};

export default function Menu() {
  return (
    <section id="menu" className="bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-caramel-500">
            Our Menu
          </p>
          <h2 className="font-display text-4xl font-bold text-coffee-900 text-balance lg:text-5xl">
            Crafted with care, served with a smile
          </h2>
          <p className="mt-4 text-lg text-coffee-600">
            Seasonal favorites and year-round classics — there's something for
            every mood.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {Object.entries(menu).map(([category, items]) => {
            const Icon = icons[category];
            return (
              <div
                key={category}
                className="group flex flex-col rounded-3xl border border-coffee-200/70 bg-cream-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-coffee-900/10"
              >
                <div className="mb-8 flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-coffee-800 text-caramel-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-coffee-900">
                    {category}
                  </h3>
                </div>

                <ul className="flex flex-col gap-5">
                  {items.map((item) => (
                    <li key={item.name} className="flex items-baseline gap-3">
                      <div className="flex-1">
                        <p className="font-medium text-coffee-800">{item.name}</p>
                        <p className="text-sm text-coffee-500">{item.description}</p>
                      </div>
                      <span className="flex-shrink-0 font-display text-lg font-semibold text-caramel-600">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
