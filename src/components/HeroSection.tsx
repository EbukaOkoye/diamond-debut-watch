import { useCountdown } from '../hooks/use-countdown';

export const HeroSection = (): JSX.Element => {
  const countdown = useCountdown(54);

  return (
    <section className="relative bg-gradient-dark overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 75% 35%, oklch(0.42 0.11 155 / 0.45), transparent 55%)',
        }}
      ></div>
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      ></div>

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 pt-14 pb-16 md:pt-20 md:pb-24 text-center">
        {/* Watch Image Container */}
        <div className="relative mx-auto max-w-md mb-10">
          <div className="absolute -inset-10 bg-gradient-to-br from-primary/25 via-transparent to-gold/10 blur-3xl pointer-events-none"></div>
          <div className="relative aspect-square overflow-hidden border border-border/60 shadow-luxury bg-card">
            <img
              src="/images/denvosi-green-wrist.jpg"
              alt="Denvosi Wrist watch"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>

        {/* Content & Typography */}
        <div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] mb-6">
            <span className="block text-foreground">Denvosi Wrist watch</span>
          </h1>

          <ul className="text-base md:text-lg text-muted-foreground font-serif-lux italic space-y-1 mb-8">
            <li>Free designer bracelet included</li>
            <li>Free 2 in 1 CYXG airpods included</li>
            <li>Free nationwide delivery</li>
            <li>Pay on delivery</li>
          </ul>

          {/* Pricing */}
          <div className="flex items-baseline justify-center gap-4 mb-8">
            <div className="font-display text-5xl md:text-6xl text-gold-grad">₦65,000</div>
            <div className="text-muted-foreground line-through font-display text-2xl">₦90,000</div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="flex gap-2 sm:gap-5 justify-center w-full max-w-md mx-auto">
              <div className="flex flex-col items-center min-w-0 flex-1">
                <div className="relative w-full max-w-[7rem] aspect-[3/4] bg-gradient-to-b from-card to-background border border-border/60 rounded-sm flex items-center justify-center shadow-luxury">
                  <span className="font-display text-3xl sm:text-5xl md:text-6xl text-metallic tabular-nums">
                    {countdown.days}
                  </span>
                  <div className="absolute inset-x-0 top-1/2 h-px bg-border/40"></div>
                </div>
                <span className="mt-3 text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-muted-foreground uppercase font-sans">
                  Days
                </span>
              </div>

              <div className="flex flex-col items-center min-w-0 flex-1">
                <div className="relative w-full max-w-[7rem] aspect-[3/4] bg-gradient-to-b from-card to-background border border-border/60 rounded-sm flex items-center justify-center shadow-luxury">
                  <span className="font-display text-3xl sm:text-5xl md:text-6xl text-metallic tabular-nums">
                    {countdown.hours}
                  </span>
                  <div className="absolute inset-x-0 top-1/2 h-px bg-border/40"></div>
                </div>
                <span className="mt-3 text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-muted-foreground uppercase font-sans">
                  Hours
                </span>
              </div>

              <div className="flex flex-col items-center min-w-0 flex-1">
                <div className="relative w-full max-w-[7rem] aspect-[3/4] bg-gradient-to-b from-card to-background border border-border/60 rounded-sm flex items-center justify-center shadow-luxury">
                  <span className="font-display text-3xl sm:text-5xl md:text-6xl text-metallic tabular-nums">
                    {countdown.minutes}
                  </span>
                  <div className="absolute inset-x-0 top-1/2 h-px bg-border/40"></div>
                </div>
                <span className="mt-3 text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-muted-foreground uppercase font-sans">
                  Minutes
                </span>
              </div>

              <div className="flex flex-col items-center min-w-0 flex-1">
                <div className="relative w-full max-w-[7rem] aspect-[3/4] bg-gradient-to-b from-card to-background border border-border/60 rounded-sm flex items-center justify-center shadow-luxury">
                  <span className="font-display text-3xl sm:text-5xl md:text-6xl text-metallic tabular-nums">
                    {countdown.seconds}
                  </span>
                  <div className="absolute inset-x-0 top-1/2 h-px bg-border/40"></div>
                </div>
                <span className="mt-3 text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-muted-foreground uppercase font-sans">
                  Seconds
                </span>
              </div>
            </div>
          </div>

          {/* Place Order CTA Button */}
          <a
            href="#order"
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-accent text-primary-foreground font-sans text-sm tracking-[0.25em] uppercase font-medium shadow-red-glow overflow-hidden transition-transform hover:scale-[1.02]"
          >
            <span className="absolute inset-0 animate-shimmer opacity-60"></span>
            <span className="relative z-10 flex items-center gap-3">
              Place Order Now
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
