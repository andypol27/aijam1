const links = ['Instagram', 'Twitter', 'LinkedIn', 'Support']

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/50 bg-[#111318]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-10 py-12 w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-bold text-primary font-headline">ThermoSync</span>
          <span className="font-body text-xs uppercase tracking-[0.1em] text-slate-500">
            © 2024 ThermoSync. The Digital Pulse.
          </span>
        </div>
        <div className="flex gap-8">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="font-body text-xs uppercase tracking-[0.1em] text-slate-500 hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
