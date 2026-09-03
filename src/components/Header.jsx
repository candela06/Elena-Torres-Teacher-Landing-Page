function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="h-16 px-4 lg:px-8 xl:px-12 flex items-center justify-between gap-2 max-w-[1200px] mx-auto">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="material-symbols-outlined text-[26px] text-primary">
            dictionary
          </div>

          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-slate-900 leading-none">
              Elena Torres
            </span>

            <span className="text-xs text-pink-700 font-semibold">
              Tutora de Inglés Online
            </span>
          </div>
        </div>

        {/* Navegación de escritorio */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#inicio"
            className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
          >
            Inicio
          </a>

          <a
            href="#modalidades"
            className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
          >
            Planes
          </a>

          <a
            href="#tutor"
            className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
          >
            Sobre mí
          </a>

          <a
            href="#contacto"
            className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
          >
            Reservar
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Header;