export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0c0e12]/60 backdrop-blur-lg shadow-[0_0_40px_rgba(0,245,255,0.08)]">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            thermostat
          </span>
          <span className="text-xl font-black text-primary tracking-tighter font-headline">
            ThermoSync
          </span>
        </div>
        <button className="gradient-bg text-white px-4 py-2 rounded-lg font-headline font-bold text-sm tracking-tight hover:scale-105 active:scale-95 transition-all shadow-lg shadow-red-500/20">
          Buy Now
        </button>
      </nav>
    </header>
  )
}
