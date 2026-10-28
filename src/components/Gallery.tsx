import { gallery } from '@/data';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-caramel-500">
            Ambiance
          </p>
          <h2 className="font-display text-4xl font-bold text-coffee-900 text-balance lg:text-5xl">
            A space that feels like a warm hug
          </h2>
          <p className="mt-4 text-lg text-coffee-600">
            Wood, light, and the gentle hum of the espresso machine — pull up a
            chair and settle in.
          </p>
        </div>

        <div className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[240px] md:grid-cols-4">
          {gallery.map((img, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-md ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="absolute bottom-4 left-4 translate-y-2 text-sm font-medium text-cream-50 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
