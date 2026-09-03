import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Las clases son completamente online?",
      answer:
        "Sí, las clases se realizan de manera 100% virtual a través de videollamada (Google Meet o Zoom), desde la comodidad de tu casa y con materiales digitales interactivos compartidos en tiempo real.",
    },
    {
      question: "¿Necesito tener conocimientos previos?",
      answer:
        "No necesariamente. La modalidad y la metodología se adaptan a distintos niveles, desde personas que arrancan desde cero absoluto hasta quienes buscan perfeccionar su fluidez profesional o preparar entrevistas de trabajo.",
    },
    {
      question: "¿Cómo se coordinan las sesiones y horarios?",
      answer:
        "La coordinación de días, horarios y objetivos se realiza directamente y de forma ágil por WhatsApp. Evaluamos tu disponibilidad y encontramos un espacio fijo o flexible que encaje en tu rutina.",
    },
    {
      question: "¿Puedo consultar por clases para un grupo?",
      answer:
        "¡Totalmente! La modalidad grupal está pensada tanto para amigos y compañeros como para equipos de trabajo o empresas que requieran capacitación con objetivos claros y seguimiento continuo.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section className="w-full px-gutter-mobile py-space-2xl bg-surface-container-low flex flex-col gap-space-lg">
      <div className="max-w-container-max mx-auto w-full flex flex-col gap-space-md">
        <div className="flex flex-col gap-space-2xs text-center">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
            Respuestas Claras
          </span>

          <h2 className="font-headline-md text-headline-md font-bold text-on-surface">
            Preguntas Frecuentes
          </h2>

          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Todo lo que necesitás saber antes de comenzar tus clases.
          </p>
        </div>

        <div className="flex flex-col gap-space-xs w-full" id="faq-accordion">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden transition-all"
              >
                <button
                  aria-expanded={isOpen}
                  className="faq-toggle w-full p-space-md flex items-center justify-between text-left gap-space-xs"
                  type="button"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-label-lg text-label-lg font-bold text-on-surface">
                    {faq.question}
                  </span>

                  <span
                    className={`material-symbols-outlined text-primary transition-transform duration-200 icon-expand ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-content px-space-md pb-space-md">
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;