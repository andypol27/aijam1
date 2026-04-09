const rows = [
  { feature: 'Temperature display', lite: 'LED Top', pro: 'OLED Touch', ultra: 'Holographic' },
  { feature: 'App support', lite: 'Basic', pro: 'Full Sync', ultra: 'AI Prediction' },
  { feature: 'Battery life', lite: '12 Hours', pro: '24 Hours', ultra: '48 Hours' },
  { feature: 'Material', lite: '304 Steel', pro: '316 Steel', ultra: 'Titanium Alloy' },
]

export function ComparisonTable() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold tracking-tight mb-4 heading-vibrant">
            Vyberte si svou verzi
          </h2>
          <p className="text-on-surface-variant">Porovnání parametrů pro váš životní styl</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-body border-collapse">
            <thead>
              <tr className="bg-surface-container-high">
                <th className="p-6 font-label text-sm uppercase tracking-wider text-outline-variant">
                  Feature
                </th>
                <th className="p-6 font-headline text-xl font-bold">Lite</th>
                <th className="p-6 font-headline text-xl font-bold text-primary">Pro</th>
                <th className="p-6 font-headline text-xl font-bold text-secondary">Ultra</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {rows.map((row, i) => (
                <tr key={row.feature} className={i % 2 !== 0 ? 'bg-surface-container/30' : ''}>
                  <td className="p-6 text-on-surface-variant text-sm">{row.feature}</td>
                  <td className="p-6 text-on-surface">{row.lite}</td>
                  <td className="p-6 text-on-surface">{row.pro}</td>
                  <td className="p-6 text-on-surface font-bold">{row.ultra}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
