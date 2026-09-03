function WhatsAppButton() {
  const message =
    "Hola Elena, quisiera consultar por las clases de inglés";

  return (
    <div className="fixed bottom-20 right-4 z-40 flex items-center gap-2 pointer-events-none">

      <span className="pointer-events-auto px-2.5 py-1 rounded-full bg-white text-on-surface text-xs font-bold shadow-md animate-bounce">
        ¡Escribime!
      </span>

      <a
        aria-label="Escribir por WhatsApp"
        href={`https://wa.me/?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg active:scale-90 transition-transform"
      >
        <span className="material-symbols-outlined text-3xl">
          chat
        </span>
      </a>

    </div>
  );
}

export default WhatsAppButton;