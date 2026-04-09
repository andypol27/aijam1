export function CTASection() {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto bg-surface-container rounded-xl p-12 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
        <h2 className="text-4xl font-headline font-black tracking-tight mb-6 heading-vibrant">
          Připojte se k digitální tepu
        </h2>
        <p className="text-on-surface-variant mb-10 text-lg">
          Získejte svou ThermoSync ještě dnes s dopravou zdarma.
        </p>
        <button className="gradient-bg text-white font-headline font-bold py-5 px-12 rounded-lg text-xl hover:shadow-[0_0_30px_rgba(255,49,49,0.3)] hover:scale-105 transition-all">
          Objednat nyní
        </button>
      </div>
    </section>
  )
}
