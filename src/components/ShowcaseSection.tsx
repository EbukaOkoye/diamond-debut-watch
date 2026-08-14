export const ShowcaseSection = (): JSX.Element => {
  return (
    <section id="showcase" className="py-20 md:py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-12 bg-primary"></span>
          <span className="text-[11px] tracking-[0.4em] uppercase text-primary font-sans font-medium">
            Why You'll Love It
          </span>
          <span className="h-px w-12 bg-primary"></span>
        </div>

        <h2 className="font-display text-4xl md:text-6xl text-center mb-4 max-w-3xl mx-auto leading-tight text-foreground">
          Original. Waterproof. <span className="text-gold-grad italic font-serif-lux">Yours.</span>
        </h2>

        <p className="text-center text-muted-foreground font-serif-lux italic text-lg mb-20 max-w-xl mx-auto">
          Everything that comes with your Denvosi Wrist watch order.
        </p>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Sticky Left Image */}
          <div className="lg:sticky lg:top-28">
            <div className="relative aspect-square border border-border/60 shadow-luxury bg-card overflow-hidden">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/25 via-transparent to-gold/10 blur-3xl pointer-events-none"></div>
              <img
                src="/images/denvosi-brown-watch.jpg"
                alt="Denvosi Wrist watch brown edition detail"
                className="relative w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-5 left-5 text-[9px] tracking-[0.4em] uppercase text-muted-foreground bg-background/80 backdrop-blur px-3 py-1.5 border border-border/60">
                DENVOSI SQUARE EDITION
              </div>
            </div>
          </div>

          {/* Right Feature List */}
          <div className="space-y-16 md:space-y-24">
            <div className="relative pl-6 border-l border-border/60">
              <div className="absolute -left-px top-0 w-px h-12 bg-primary"></div>
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-display text-3xl text-gold-grad">01</span>
                <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-medium">
                  Original
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-4 leading-tight text-foreground">
                100% Genuine Denvosi
              </h3>
              <p className="text-muted-foreground leading-relaxed font-serif-lux text-lg">
                Original Denvosi Wrist watch. Premium craftsmanship at an unbelievable offer you won't find anywhere else.
              </p>
            </div>

            <div className="relative pl-6 border-l border-border/60">
              <div className="absolute -left-px top-0 w-px h-12 bg-primary"></div>
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-display text-3xl text-gold-grad">02</span>
                <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-medium">
                  Waterproof
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-4 leading-tight text-foreground">
                100% Water Proof
              </h3>
              <p className="text-muted-foreground leading-relaxed font-serif-lux text-lg">
                Built to last. 100% waterproof construction with high quality luxury finish.
              </p>
            </div>

            <div className="relative pl-6 border-l border-border/60">
              <div className="absolute -left-px top-0 w-px h-12 bg-primary"></div>
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-display text-3xl text-gold-grad">03</span>
                <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-medium">
                  Warranty
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-4 leading-tight text-foreground">
                1 Year Warranty
              </h3>
              <p className="text-muted-foreground leading-relaxed font-serif-lux text-lg">
                Comes with full 1 year warranty. Free delivery and pay on delivery nationwide.
              </p>
            </div>

            <div className="relative pl-6 border-l border-border/60">
              <div className="absolute -left-px top-0 w-px h-12 bg-primary"></div>
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-display text-3xl text-gold-grad">04</span>
                <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-medium">
                  Double Bonus
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-4 leading-tight text-foreground">
                Free Bracelet & 2 in 1 CYXG Airpods
              </h3>
              <p className="text-muted-foreground leading-relaxed font-serif-lux text-lg">
                Every Denvosi Wrist watch order includes a free designer bracelet and free 2 in 1 CYXG wireless airpods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
