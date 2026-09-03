function Footer() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant/40">
      <div className="max-w-container-max mx-auto px-4 py-10 lg:px-6 lg:py-12">

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Marca */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[26px] text-primary">
                dictionary
              </span>

              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">
                  Elena Torres
                </span>

                <span className="font-label-sm text-label-sm text-pink-700 font-semibold">
                  Online English Tutor
                </span>
              </div>
            </div>

            <p className="max-w-xs font-body-sm text-body-sm text-on-surface-variant">
              Clases de inglés online adaptadas a vos, a tu nivel y a tus
              objetivos.
            </p>
          </div>

          {/* Navegación */}
          <div className="flex flex-col gap-3">
            <h3 className="font-label-md text-label-md font-bold text-on-surface">
              Navegación
            </h3>

            <div className="flex flex-col gap-2">
              <a
                href="#inicio"
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                Inicio
              </a>

              <a
                href="#modalidades"
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                Modalidades
              </a>

              <a
                href="#tutor"
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                Sobre mí
              </a>
            </div>
          </div>

          {/* Clases */}
          <div className="flex flex-col gap-3">
            <h3 className="font-label-md text-label-md font-bold text-on-surface">
              Clases
            </h3>

            <div className="flex flex-col gap-2">
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Clases individuales
              </span>

              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Grupos reducidos
              </span>

              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Clases grupales
              </span>
            </div>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-3">
            <h3 className="font-label-md text-label-md font-bold text-on-surface">
              Contacto
            </h3>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              Instagram
            </a>

            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Consultas y reservas
            </span>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-outline-variant/40 flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            © 2026 Elena Torres. Todos los derechos reservados.
          </span>

          <span className="font-label-sm text-label-sm text-on-surface-variant">
            Clases de inglés online
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;