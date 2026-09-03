function Hero() {
  return (
    <section className="relative w-full px-gutter-mobile py-space-xl lg:px-gutter-desktop lg:py-space-3xl overflow-hidden bg-gradient-to-b from-primary-fixed/30 via-surface-container-low to-surface">

      {/* Ambient Background */}
      <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-primary-container/20 blur-3xl pointer-events-none" />

      <div className="absolute top-1/2 -left-20 w-48 h-48 rounded-full bg-secondary-container/25 blur-2xl pointer-events-none" />

      <div className="relative max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-space-lg">

          {/* Value Proposition Tag */}
          <div className="flex items-center gap-2 self-start px-3 py-1 rounded-full bg-white shadow-sm text-pink-700">

            <span
              className="material-symbols-outlined"
              style={{
                fontVariationSettings: "'FILL' 1",
                fontSize: "18px",
              }}
            >
              verified
            </span>

            <span className="text-sm font-semibold tracking-wide">
              Clases 1 a 1 y Grupos Reducidos
            </span>

          </div>


          {/* Main Heading */}
          <div className="flex flex-col gap-space-xs">

            <h1 className="font-headline-lg-mobile text-headline-lg-mobile lg:text-display-hero font-bold tracking-tight text-on-surface">

              Aprendé inglés a tu ritmo,{" "}

              <span className="text-primary font-extrabold">
                desde donde estés.
              </span>

            </h1>

            <p className="font-body-md text-body-md lg:text-body-lg text-on-surface-variant leading-relaxed max-w-xl">
              Clases de inglés online por sesiones, adaptadas a tus objetivos,
              nivel y forma de aprender sin presiones.
            </p>

          </div>

          {/* WhatsApp Status */}
          <div className="flex items-center gap-space-2xs text-on-surface-variant font-label-sm text-label-sm">

            <span className="w-2 h-2 rounded-full bg-secondary" />

            <span>
              Respuesta rápida • Sin compromiso
            </span>
          </div>

          {/* Conversion Actions */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-space-xs w-full pt-space-xs">

              
            {/* WhatsApp */}
            <a
              className="group relative flex items-center justify-center gap-space-xs w-full sm:w-auto lg:w-full xl:w-auto py-space-md px-space-lg rounded-xl bg-[#25D366] text-white font-label-lg text-label-lg font-bold shadow-md active:scale-[0.99] hover:brightness-95 transition-all"
              href="https://wa.me/?text=Hola%2C%20quisiera%20consultar%20por%20las%20clases%20de%20ingl%C3%A9s"
              rel="noopener noreferrer"
              target="_blank"
            >

              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.84a8.18 8.18 0 0 1-5.82 2.41h-.01c-1.49 0-2.96-.4-4.24-1.16l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.41 1.02 2.58c.13.17 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.28Z" />
              </svg>

              <span>
                Consultar por WhatsApp
              </span>

            </a>

              

            {/* Modalities */}
            <a
              className="flex items-center justify-center gap-space-2xs w-full sm:w-auto lg:w-full xl:w-auto py-space-md px-space-lg rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md font-semibold shadow-sm hover:bg-surface-container transition-colors"
              href="#modalidades"
            >

              <span>
                Ver modalidades
              </span>

              <span className="material-symbols-outlined text-[18px]">
                arrow_downward
              </span>

            </a>

          </div>


          


          

        </div>


        {/* RIGHT COLUMN — TEACHER IMAGE */}
        <div className="relative w-full max-w-xl mx-auto lg:ml-auto">

       


          {/* Image Card */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-surface-container aspect-[4/3]">

            <img
              alt="Profesora de inglés online en su espacio de enseñanza"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida/AEtjO1W6yHdKKN_KZw2qaD7s_noHl5JvLBbCHTsIA60nyXXLPb4RlX0_NTrOnXoQgPqxesUWuk5w_fTNFsgh9OsIogQ5Z2S-_-O_8dUXIB9gciwhciwXhRbDzVsfv-i8ZhOx7iw0LUnzJvGSvI0S4Yt7C0EMHRRj40i9AS_pl-5b0YwLJ4oYgOzwIMK5czjsuFc8KH4fOdAuad0mfJ30eIiESPhnefbGa4eik728QSyu0N-GtR29FnyCsQoWY1k"
            />


            {/* Bottom Glass Badge */}
            <div className="absolute bottom-3 left-3 right-3 p-space-sm rounded-xl bg-surface-container-lowest/90 backdrop-blur-md shadow-md flex items-center justify-between">

              <div className="flex items-center gap-space-xs">

                <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary">

                  <span className="material-symbols-outlined text-[20px]">
                    laptop_mac
                  </span>

                </div>

                <div className="flex flex-col">

                  <span className="font-label-md text-label-md font-bold text-on-surface leading-tight">
                    100% Online
                  </span>

                  <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                    Personalizado a tu nivel
                  </span>

                </div>

              </div>


              <div className="flex items-center gap-1 text-[#ffb020]">

                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  star
                </span>

                <span className="font-label-md text-label-md font-bold text-on-surface">
                  5.0
                </span>

              </div>

            </div>

          </div>


          

        </div>

      </div>
    </section>
  );
}

export default Hero;