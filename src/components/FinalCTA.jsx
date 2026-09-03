function FinalCTA() {
  const message =
    "Hola, quisiera empezar a aprender inglés con vos";

  return (
    <section className="w-full px-4 py-8 lg:px-6 lg:py-12 bg-surface">

      <div className="relative w-full max-w-container-max mx-auto overflow-hidden rounded-2xl bg-gradient-to-br from-surface-container-lowest via-surface to-primary-fixed/30 shadow-lg">

        {/* Ambient Background Accents */}
        <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-primary-container/15 blur-3xl pointer-events-none" />

        <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none" />

        {/* Content */}
        <div className="relative flex flex-col items-center text-center px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">

          {/* Small Tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed/50 text-on-surface font-label-sm text-label-sm font-bold mb-4">

            <span
              className="material-symbols-outlined text-[14px] text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              bolt
            </span>

            <span>
              Empieza esta misma semana
            </span>

          </div>

          {/* Heading */}
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile lg:text-display-hero font-bold tracking-tight text-on-surface">
            ¿Listo para mejorar tu inglés?
          </h2>

          {/* Description */}
          <p className="mt-3 max-w-lg font-body-sm text-body-sm lg:font-body-md lg:text-body-md text-on-surface-variant leading-relaxed">
            Contame qué estás buscando y encontramos la modalidad y el horario ideal para vos.
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-2 w-full max-w-sm mt-6">

            <a
              href={`https://wa.me/?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-space-xs w-full sm:w-auto min-w-[220px] py-space-md px-space-lg rounded-full bg-[#008C44] hover:bg-[#007a3b] text-white font-label-md text-label-md font-bold shadow-lg active:scale-[0.99] transition-all"
            >

              <span className="material-symbols-outlined text-[20px]">
                chat
              </span>

              <span>
                Hablar por WhatsApp
              </span>

            </a>

            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Consultá sin compromiso • Coordinación directa
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FinalCTA;