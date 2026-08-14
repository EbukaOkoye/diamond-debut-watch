export const FreeBonusSection = (): JSX.Element => {
  return (
    <section className="py-20 md:py-28 bg-white border-y-2 border-primary/40 relative overflow-hidden text-neutral-900">
      <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-px w-16 bg-primary"></span>
          <span className="text-[11px] tracking-[0.4em] uppercase text-primary font-sans font-medium">
            Limited Time Bonus
          </span>
          <span className="h-px w-16 bg-primary"></span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mb-10">
          {/* Free Bonus 1: Bracelet */}
          <div className="relative aspect-square border-2 border-primary/30 shadow-luxury overflow-hidden bg-card">
            <img
              src="/images/denvosi-bracelet.jpg"
              alt="Free designer leather bracelet"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-accent text-[9px] tracking-[0.35em] uppercase text-primary-foreground shadow-red-glow">
              FREE BONUS 1
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur px-3 py-2 border border-border/60 text-xs font-semibold uppercase tracking-wider text-center">
              Free Designer Bracelet
            </div>
          </div>

          {/* Free Bonus 2: CYXG Airpods */}
          <div className="relative aspect-square border-2 border-primary/30 shadow-luxury overflow-hidden bg-card">
            <img
              src="/images/cyxg-airpods-black.jpg"
              alt="Free 2 in 1 CYXG Wireless Airpods"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-accent text-[9px] tracking-[0.35em] uppercase text-primary-foreground shadow-red-glow">
              FREE BONUS 2
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur px-3 py-2 border border-border/60 text-xs font-semibold uppercase tracking-wider text-center">
              Free 2 in 1 CYXG Airpods
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-accent text-[10px] tracking-[0.35em] uppercase text-primary-foreground mb-6 shadow-red-glow">
            <span className="inline-block text-sm">★</span> TWO FREE GIFTS WITH EVERY ORDER
          </div>

          <h3 className="font-display text-3xl md:text-5xl mb-5 leading-tight text-black">
            Free Bracelet & 2 in 1 CYXG Airpods <span className="text-gold-grad italic font-serif-lux">Included.</span>
          </h3>

          <p className="text-neutral-700 font-serif-lux text-xl leading-relaxed mb-5 max-w-xl mx-auto">
            Every Denvosi Wrist watch order comes with a free designer bracelet and free 2 in 1 CYXG airpods. No coupon code needed.
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className="line-through text-neutral-500 font-display text-2xl">₦25,000 VALUE</span>
            <span className="text-[11px] tracking-[0.3em] uppercase text-primary border border-primary/40 px-3 py-1.5 font-medium">
              100% FREE TODAY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
