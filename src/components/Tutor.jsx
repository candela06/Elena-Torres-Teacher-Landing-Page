function Tutor() {
  return (
    <section className="w-full px-gutter-mobile py-space-2xl bg-surface flex flex-col gap-space-lg">
      <div className="max-w-container-max mx-auto w-full flex flex-col gap-space-md">

        <div className="flex flex-col gap-space-2xs text-left">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
            Experiencia & Confianza
          </span>

          <h2 className="font-headline-md text-headline-md font-bold text-on-surface">
            Aprender inglés puede ser más simple cuando las clases están
            pensadas para vos.
          </h2>
        </div>

        <div className="flex flex-col gap-space-md p-space-lg rounded-2xl bg-surface-container-low shadow-sm">

          <div className="flex items-center gap-space-md">

            <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 shadow-sm">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1W6yHdKKN_KZw2qaD7s_noHl5JvLBbCHTsIA60nyXXLPb4RlX0_NTrOnXoQgPqxesUWuk5w_fTNFsgh9OsIogQ5Z2S-_-O_8dUXIB9gciwhciwXhRbDzVsfv-i8ZhOx7iw0LUnzJvGSvI0S4Yt7C0EMHRRj40i9AS_pl-5b0YwLJ4oYgOzwIMK5czjsuFc8KH4fOdAuad0mfJ30eIiESPhnefbGa4eik728QSyu0N-GtR29FnyCsQoWY1k"
                alt="Elena Torres - Profesora de inglés"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col">

              <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Elena Torres
              </span>

              <span className="font-body-sm text-body-sm text-primary font-semibold">
                Profesora de Inglés Online
              </span>

              <span className="font-label-sm text-label-sm text-on-surface-variant">
                +6 años guiando a hispanohablantes
              </span>

            </div>

          </div>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Mi objetivo no es llenarte de reglas gramaticales abstractas, sino
            darte la seguridad y soltura para comunicarte en situaciones reales
            de trabajo, viajes o estudio. Creamos un ambiente seguro y relajado
            donde equivocarse es simplemente parte del proceso.
          </p>

          <div className="flex flex-wrap gap-space-xs pt-space-xs">

            <span className="px-space-sm py-space-2xs rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-semibold shadow-sm">
              🗣️ Conversación fluida
            </span>

            <span className="px-space-sm py-space-2xs rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-semibold shadow-sm">
              💼 Inglés laboral & entrevistas
            </span>

            <span className="px-space-sm py-space-2xs rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-semibold shadow-sm">
              🎯 Nivel inicial a avanzado
            </span>

            <span className="px-space-sm py-space-2xs rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-semibold shadow-sm">
              📚 Preparación de exámenes
            </span>

          </div>

          <div className="grid grid-cols-2 gap-space-xs pt-space-xs">

            <div className="p-space-sm rounded-xl bg-surface-container-lowest flex flex-col items-center text-center">

              <span className="font-headline-sm text-headline-sm font-bold text-primary">
                100%
              </span>

              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Práctica oral activa
              </span>

            </div>

            <div className="p-space-sm rounded-xl bg-surface-container-lowest flex flex-col items-center text-center">

              <span className="font-headline-sm text-headline-sm font-bold text-secondary">
                A tu ritmo
              </span>

              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Horarios coordinables
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Tutor;