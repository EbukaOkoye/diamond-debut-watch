export const Header = (): JSX.Element => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border/60">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-4 grid grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-3 items-center gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src="/images/logo.png"
            alt="5 Star Luxury"
            className="h-10 w-10 shrink-0 object-contain"
          />
          <div className="min-w-0">
            <div className="font-display text-base sm:text-lg leading-none tracking-wider truncate text-foreground">
              DENVOSI
            </div>
            <div className="text-[9px] tracking-[0.35em] text-muted-foreground mt-1 truncate">
              WRIST WATCH
            </div>
          </div>
        </div>
        
        <div className="hidden sm:block"></div>

        <div className="flex justify-end">
          <a
            href="#order"
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase bg-gradient-accent text-primary-foreground px-4 sm:px-5 py-2.5 sm:py-3 shadow-red-glow transition-transform hover:scale-105"
          >
            <span>Order</span>
            <span className="hidden sm:inline">— ₦65,000</span>
          </a>
        </div>
      </div>
    </header>
  );
};
