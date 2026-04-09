const reviews = [
  {
    text: '"Nejlepší investice pro můj ranní rituál. Káva vydrží přesně na 62 stupních celé dopoledne."',
    name: 'Marek Novotný',
    role: 'Tech Reviewer',
    stars: 5,
    highlight: false,
  },
  {
    text: '"Aplikace je neskutečně přehledná. Konečně vím, kolik vody jsem přes den skutečně vypila."',
    name: 'Jana Svobodová',
    role: 'Yoga Instructor',
    stars: 5,
    highlight: true,
  },
  {
    text: '"Design, který se neokouká. V autě vypadá fantasticky a funguje bezchybně."',
    name: 'Petr Černý',
    role: 'Architect',
    stars: 4,
    highlight: false,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 text-secondary mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined"
          style={{ fontVariationSettings: `'FILL' ${i < count ? 1 : 0}` }}
        >
          star
        </span>
      ))}
    </div>
  )
}

export function ReviewsSection() {
  return (
    <section className="py-24 px-6 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-headline font-bold mb-12 text-center tracking-tight heading-vibrant">
          Prověřeno profesionály
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className={`bg-surface p-8 rounded-lg shadow-xl relative ${r.highlight ? 'border-l-4 border-primary' : ''}`}
            >
              <StarRating count={r.stars} />
              <p className="italic text-on-surface-variant mb-6 leading-relaxed">{r.text}</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline">person</span>
                </div>
                <div>
                  <p className="font-bold text-sm">{r.name}</p>
                  <p className="text-xs text-outline tracking-wider uppercase font-label">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
