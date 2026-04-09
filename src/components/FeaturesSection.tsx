const features = [
  {
    icon: 'device_thermostat',
    iconColor: 'text-primary',
    bgColor: 'bg-primary/10',
    hoverBorder: 'hover:border-primary',
    title: 'Sledování teploty',
    description: 'V mobilní aplikaci v reálném čase. Přesnost na 0.1°C díky infračervenému senzoru.',
  },
  {
    icon: 'battery_charging_full',
    iconColor: 'text-secondary',
    bgColor: 'bg-secondary/10',
    hoverBorder: 'hover:border-secondary',
    title: '24h výdrž baterie',
    description: 'Celý den s vámi na cestách. Magnetické nabíjení zajistí energii pro tisíce měření.',
  },
  {
    icon: 'shield',
    iconColor: 'text-tertiary',
    bgColor: 'bg-tertiary/10',
    hoverBorder: 'hover:border-tertiary',
    title: 'Nerezové tělo',
    description: 'Prémiová ocel pro maximální odolnost. Odolá pádům, nárazům i extrémním teplotám.',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 mb-16">
          <span className="font-label uppercase tracking-[0.2em] text-primary font-bold text-xs">
            Core Technology
          </span>
          <h2 className="text-3xl font-headline font-bold tracking-tight heading-vibrant">
            Vybaveno pro budoucnost
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className={`bg-surface-container p-8 rounded-lg feature-card-glow transition-all duration-300 border-b-2 border-transparent ${f.hoverBorder}`}
            >
              <div className={`w-12 h-12 rounded-lg ${f.bgColor} flex items-center justify-center mb-6`}>
                <span className={`material-symbols-outlined ${f.iconColor} text-3xl`}>
                  {f.icon}
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
