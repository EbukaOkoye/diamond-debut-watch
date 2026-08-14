export const TickerBanner = (): JSX.Element => {
  return (
    <section aria-hidden="true" className="border-y border-border/60 bg-card overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-muted-foreground">
        <span className="text-gold-grad font-medium">◆ Original Denvosi Wrist watch</span>
        <span>Free Bracelet & CYXG Airpods</span>
        <span className="text-gold-grad">◆</span>
        <span>100% Waterproof</span>
        <span className="text-gold-grad">◆</span>
        <span>Pay on Delivery</span>
        <span className="text-gold-grad">◆</span>
        <span>Free Nationwide Delivery</span>
      </div>
    </section>
  );
};
