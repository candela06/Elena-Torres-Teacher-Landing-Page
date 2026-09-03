function MobileNav() {
  return (
    <nav className="fixed bottom-0 lg:hidden w-full z-50 bg-white/90 backdrop-blur-xl shadow-[0_-4px_20px_rgba(15,23,42,0.06)]">
      <div className="flex justify-around items-center h-16 px-4">

        <a
          href="#inicio"
          className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] gap-1 text-primary font-bold"
        >
          <span className="material-symbols-outlined text-2xl">
            home
          </span>

          <span className="text-xs">
            Inicio
          </span>
        </a>

        <a
          href="#modalidades"
          className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] gap-1 text-on-surface-variant hover:text-on-surface"
        >
          <span className="material-symbols-outlined text-2xl">
            school
          </span>

          <span className="text-xs">
            Planes
          </span>
        </a>

        <a
          href="#tutor"
          className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] gap-1 text-on-surface-variant hover:text-on-surface"
        >
          <span className="material-symbols-outlined text-2xl">
            Person
          </span>

          <span className="text-xs">
            Sobre mí
          </span>
        </a>

        <a
          href="#contacto"
          className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] gap-1 text-on-surface-variant hover:text-on-surface"
        >
          <span className="material-symbols-outlined text-2xl">
            calendar_today
          </span>

          <span className="text-xs">
            Reservar
          </span>
        </a>

      </div>
    </nav>
  );
}

export default MobileNav;