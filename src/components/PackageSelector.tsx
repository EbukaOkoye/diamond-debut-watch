import { WATCH_PACKAGES } from '../lib/constants';
import { PackageQuantity } from '../types';

interface PackageSelectorProps {
  selectedQty: PackageQuantity;
  onSelectPackage: (qty: PackageQuantity) => void;
}

export const PackageSelector = ({
  selectedQty,
  onSelectPackage,
}: PackageSelectorProps): JSX.Element => {
  return (
    <section className="py-24 md:py-28 bg-card border-y border-border/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-12 bg-primary"></span>
          <span className="text-[11px] tracking-[0.4em] uppercase text-primary font-sans font-medium">
            Choose Quantity
          </span>
          <span className="h-px w-12 bg-primary"></span>
        </div>

        <h2 className="font-display text-3xl md:text-5xl text-center mb-16 text-foreground">
          How many do you <span className="text-gold-grad italic font-serif-lux">want?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {WATCH_PACKAGES.map((pkg) => {
            const isSelected = selectedQty === pkg.id;

            return (
              <button
                key={pkg.id}
                type="button"
                onClick={() => {
                  onSelectPackage(pkg.id);
                  const orderSection = document.getElementById('order');
                  if (orderSection) {
                    orderSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`relative text-left p-7 md:p-8 border bg-background transition-all hover:-translate-y-1 ${
                  pkg.isPopular
                    ? 'border-primary shadow-red-glow'
                    : isSelected
                    ? 'border-primary/80 shadow-luxury'
                    : 'border-border/60 hover:border-primary/50'
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-3 left-7 px-3 py-1 bg-gradient-accent text-[9px] tracking-[0.35em] uppercase text-primary-foreground font-medium">
                    Most Popular
                  </div>
                )}

                <div className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-4">
                  {pkg.title}
                </div>

                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-display text-4xl md:text-5xl text-gold-grad">
                    ₦{pkg.price.toLocaleString()}
                  </span>
                </div>

                {pkg.originalPrice && pkg.savings ? (
                  <div className="flex items-center gap-3 mb-5">
                    <span className="line-through text-muted-foreground text-sm">
                      ₦{pkg.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">
                      Save ₦{pkg.savings.toLocaleString()}
                    </span>
                  </div>
                ) : (
                  <div className="mb-5 h-5"></div>
                )}

                <p className="text-muted-foreground font-serif-lux italic text-base leading-relaxed mb-6">
                  {pkg.description}
                </p>

                <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-foreground border-b border-primary pb-1">
                  Select Package <span>→</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
