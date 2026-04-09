import heroImg from '../assets/hero.png'

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute top-20 right-[-10%] w-[80%] h-[80%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-8">
        <div className="w-full">
          <span className="font-label uppercase tracking-[0.2em] text-secondary font-bold text-xs">
            Precision Engineering
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter mt-4 leading-[0.9] text-on-surface">
            <span className="heading-vibrant">Dokonalá teplota</span>
            <br />
            <span className="gradient-text">v každém doušku.</span>
          </h1>
          <p className="font-body text-lg text-on-surface-variant mt-6 max-w-md font-light leading-relaxed">
            Chytrá termoska s Bluetooth připojením, která hlídá váš pitný režim i ideální klima nápoje.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="gradient-bg text-white font-headline font-bold py-4 px-10 rounded-lg text-lg hover:shadow-[0_0_20px_rgba(255,49,49,0.4)] transition-all">
              Koupit nyní
            </button>
            <button className="border border-[#FF1493]/50 text-[#FF1493] font-headline font-bold py-4 px-10 rounded-lg text-lg hover:bg-[#FF1493]/10 transition-all">
              Více informací
            </button>
          </div>
        </div>
        <div className="w-full mt-12 relative group">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <img
            src={heroImg}
            alt="ThermoSync Smart Thermos"
            className="w-full max-w-2xl mx-auto object-contain relative z-10 filter drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  )
}
