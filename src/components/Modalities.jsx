function Modalities() {
  return (
    <section
      id="modalidades"
      className="w-full px-gutter-mobile py-space-2xl lg:px-gutter-desktop lg:py-space-3xl bg-surface-container-low flex flex-col gap-space-lg lg:gap-space-2xl"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-space-2xs max-w-container-max mx-auto w-full text-center">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
          Flexibilidad Total
        </span>

        <h2 className="font-headline-md text-headline-md lg:text-3xl font-bold text-on-surface">
          Elegí la modalidad ideal para vos
        </h2>

        <p className="font-body-sm text-body-sm lg:text-base text-on-surface-variant max-w-md lg:max-w-2xl mx-auto">
          Encontrá la forma de aprender inglés que mejor se adapta a tu
          rutina, objetivos y estilo de vida.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md lg:gap-6 max-w-container-max mx-auto w-full items-stretch">

        {/* Modalidad 1 */}
        <div className="relative w-full rounded-2xl bg-surface-container-lowest p-space-lg lg:p-7 shadow-md flex flex-col justify-between gap-space-md lg:gap-6">

          <div className="absolute -top-3 left-space-lg px-space-sm py-space-2xs rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-sm">
            Más personalizada
          </div>

          <div className="flex flex-col gap-space-xs pt-space-2xs">

            <div className="flex items-center justify-between gap-4">
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Clases individuales
              </h3>

              <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[22px]">
                  person
                </span>
              </div>
            </div>

            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Un espacio exclusivo para vos, con clases personalizadas según
              tu nivel, objetivos específicos y disponibilidad.
            </p>

          </div>

          <ul className="flex flex-col gap-space-xs py-space-xs">

            <li className="flex items-start gap-space-xs">
              <span
                className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>

              <span className="font-body-sm text-body-sm text-on-surface">
                Atención 100% personalizada
              </span>
            </li>

            <li className="flex items-start gap-space-xs">
              <span
                className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>

              <span className="font-body-sm text-body-sm text-on-surface">
                Contenido adaptado a tus metas particulares
              </span>
            </li>

            <li className="flex items-start gap-space-xs">
              <span
                className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>

              <span className="font-body-sm text-body-sm text-on-surface">
                Seguimiento individual clase a clase
              </span>
            </li>

            <li className="flex items-start gap-space-xs">
              <span
                className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>

              <span className="font-body-sm text-body-sm text-on-surface">
                Sesiones virtuales interactivas
              </span>
            </li>

          </ul>

          <a
            className="flex items-center justify-center gap-space-xs w-full py-space-sm px-space-md rounded-xl bg-[#25D366] text-white font-label-md text-label-md font-bold shadow-sm active:scale-[0.99] hover:brightness-95 transition-all"
            href="https://wa.me/?text=Hola%2C%20me%20interesa%20la%20modalidad%20de%20Clases%20Individuales"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[20px]">
              chat
            </span>

            <span>
              Quiero clases individuales
            </span>
          </a>

        </div>


        {/* Modalidad 2 */}
        <div className="relative w-full rounded-2xl bg-surface-container-lowest p-space-lg lg:p-7 shadow-sm flex flex-col justify-between gap-space-md lg:gap-6">

          <div className="flex flex-col gap-space-xs">

            <div className="inline-flex self-start px-space-sm py-space-2xs rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold">
              Grupos reducidos
            </div>

            <div className="flex items-center justify-between gap-4 mt-space-2xs">
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Grupos de hasta 3
              </h3>

              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[22px]">
                  groups
                </span>
              </div>
            </div>

            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Aprendé junto a otras dos personas y disfrutá una experiencia
              dinámica, participativa y enriquecedora.
            </p>

          </div>

          <ul className="flex flex-col gap-space-xs py-space-xs">

            <li className="flex items-start gap-space-xs">
              <span
                className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>

              <span className="font-body-sm text-body-sm text-on-surface">
                Grupos reducidos con participación activa
              </span>
            </li>

            <li className="flex items-start gap-space-xs">
              <span
                className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>

              <span className="font-body-sm text-body-sm text-on-surface">
                Mayor interacción y conversación real
              </span>
            </li>

            <li className="flex items-start gap-space-xs">
              <span
                className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>

              <span className="font-body-sm text-body-sm text-on-surface">
                Actividades colaborativas y debates
              </span>
            </li>

            <li className="flex items-start gap-space-xs">
              <span
                className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>

              <span className="font-body-sm text-body-sm text-on-surface">
                Sesiones virtuales en vivo
              </span>
            </li>

          </ul>

          <a
            className="flex items-center justify-center gap-space-xs w-full py-space-sm px-space-md rounded-xl bg-surface-container text-on-surface font-label-md text-label-md font-bold hover:bg-surface-container-highest transition-colors"
            href="https://wa.me/?text=Hola%2C%20quiero%20consultar%20por%20las%20clases%20en%20Grupo%20de%203"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[20px] text-secondary">
              chat
            </span>

            <span>
              Quiero formar un grupo
            </span>
          </a>

        </div>


        {/* Modalidad 3 */}
        <div className="relative w-full rounded-2xl bg-surface-container-lowest p-space-lg lg:p-7 shadow-sm flex flex-col justify-between gap-space-md lg:gap-6">

          <div className="flex flex-col gap-space-xs">

            <div className="inline-flex self-start px-space-sm py-space-2xs rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold">
              Para equipos y grupos
            </div>

            <div className="flex items-center justify-between gap-4 mt-space-2xs">
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Clases grupales
              </h3>

              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[22px]">
                  corporate_fare
                </span>
              </div>
            </div>

            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Una propuesta a medida para empresas, comunidades o grupos
              familiares que deseen capacitarse juntos.
            </p>

          </div>

          <ul className="flex flex-col gap-space-xs py-space-xs">

            <li className="flex items-start gap-space-xs">
              <span
                className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>

              <span className="font-body-sm text-body-sm text-on-surface">
                Ideal para grupos y entornos laborales
              </span>
            </li>

            <li className="flex items-start gap-space-xs">
              <span
                className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>

              <span className="font-body-sm text-body-sm text-on-surface">
                Contenido adaptable al rubro u objetivos
              </span>
            </li>

            <li className="flex items-start gap-space-xs">
              <span
                className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>

              <span className="font-body-sm text-body-sm text-on-surface">
                Clases virtuales con material exclusivo
              </span>
            </li>

            <li className="flex items-start gap-space-xs">
              <span
                className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>

              <span className="font-body-sm text-body-sm text-on-surface">
                Propuesta y horarios a coordinar
              </span>
            </li>

          </ul>

          <a
            className="flex items-center justify-center gap-space-xs w-full py-space-sm px-space-md rounded-xl bg-surface-container text-on-surface font-label-md text-label-md font-bold hover:bg-surface-container-highest transition-colors"
            href="https://wa.me/?text=Hola%2C%20quisiera%20solicitar%20una%20propuesta%20para%20un%20grupo%20o%20equipo"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[20px] text-secondary">
              chat
            </span>

            <span>
              Consultar para mi grupo
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Modalities;