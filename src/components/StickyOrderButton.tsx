export const StickyOrderButton = (): JSX.Element => {
  return (
    <a
      href="#order"
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 inline-flex items-center gap-2 px-5 py-3.5 sm:px-7 sm:py-4 bg-gradient-accent text-primary-foreground font-sans text-xs sm:text-sm tracking-[0.25em] uppercase font-medium shadow-red-glow rounded-full transition-transform hover:scale-[1.03]"
    >
      <span>Order Now</span>
      <span aria-hidden="true">→</span>
    </a>
  );
};
