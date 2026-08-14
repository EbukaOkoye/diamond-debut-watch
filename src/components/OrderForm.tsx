import { useCountdown } from '../hooks/use-countdown';
import { useOrderForm } from '../hooks/use-order-form';
import { NIGERIAN_STATES, COLOR_OPTIONS, WATCH_PACKAGES, WHATSAPP_LINK } from '../lib/constants';
import { PackageQuantity } from '../types';

interface OrderFormProps {
  selectedQty: PackageQuantity;
  onSelectPackage: (qty: PackageQuantity) => void;
}

export const OrderForm = ({ selectedQty, onSelectPackage }: OrderFormProps): JSX.Element => {
  const countdown = useCountdown(54);
  const { form, activePackage, submissionState, onSubmit, resetSuccessState } =
    useOrderForm(selectedQty);

  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = form;

  const currentQty = watch('qty');

  const handlePackageRadioChange = (qty: PackageQuantity) => {
    setValue('qty', qty);
    onSelectPackage(qty);
  };

  return (
    <section id="order" className="py-24 md:py-32 bg-background relative">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top, oklch(0.42 0.11 155 / 0.18), transparent 60%)',
        }}
      ></div>

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-12 bg-primary"></span>
          <span className="text-[11px] tracking-[0.4em] uppercase text-primary font-sans font-medium">
            Place Your Order
          </span>
          <span className="h-px w-12 bg-primary"></span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl text-center mb-4 text-foreground">
          Fill the form to order
        </h2>

        <p className="text-center text-muted-foreground mb-8 font-serif-lux italic text-lg">
          Kindly note before placing your order:
        </p>

        <ul className="max-w-xl mx-auto mb-10 space-y-2 text-sm text-muted-foreground">
          <li>• You must not travel after placing order.</li>
          <li>• You must have your cash ready on delivery (cash or transfer).</li>
          <li>• You must be available.</li>
          <li>• Delivery: 24 hours within Lagos, Abuja, Kaduna, Owerri, Port Harcourt. 1–2 days for other states.</li>
        </ul>

        {/* Countdown Timer */}
        <div className="mb-10">
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

        {/* Success Modal Confirmation */}
        {submissionState.isSuccess && submissionState.orderSummary && (
          <div className="mb-8 p-8 bg-white border-2 border-primary text-neutral-900 rounded-sm shadow-luxury animate-in fade-in-0">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-full mb-3 text-2xl">
                ✓
              </div>
              <h3 className="font-display text-2xl text-primary font-bold">Order Received!</h3>
              <p className="text-sm text-neutral-600 mt-1">
                Thank you, <strong>{submissionState.orderSummary.full_name}</strong>. Your order is being processed for delivery.
              </p>
            </div>

            <div className="bg-neutral-50 p-4 border border-neutral-200 rounded-sm text-xs space-y-2 mb-6">
              <div><strong>Package:</strong> {activePackage.countLabel}</div>
              <div><strong>Total Amount:</strong> ₦{activePackage.price.toLocaleString()} (Pay on Delivery)</div>
              <div><strong>Phone:</strong> {submissionState.orderSummary.phone}</div>
              <div><strong>Delivery Address:</strong> {submissionState.orderSummary.address}, {submissionState.orderSummary.state}</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={submissionState.whatsappUrl || WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-4 rounded-sm text-xs tracking-wider uppercase transition-colors"
              >
                Confirm on WhatsApp
              </a>
              <button
                type="button"
                onClick={resetSuccessState}
                className="flex-1 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 font-medium py-3 px-4 rounded-sm text-xs tracking-wider uppercase transition-colors"
              >
                Place Another Order
              </button>
            </div>
          </div>
        )}

        {/* Order Form */}
        <form
          onSubmit={onSubmit}
          className="bg-white text-neutral-900 border-2 border-primary/40 p-8 md:p-12 shadow-luxury space-y-6 rounded-sm"
        >
          <div className="text-center mb-6">
            <div className="font-display text-3xl text-primary font-semibold">Order NOW!</div>
            <p className="text-sm text-neutral-600 mt-2">
              Pay on delivery · Free nationwide shipping
            </p>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-xs tracking-[0.25em] uppercase text-neutral-900 font-semibold mb-2">
              Your Name *
            </label>
            <input
              type="text"
              placeholder="Full Name"
              {...register('full_name')}
              className="w-full bg-white text-neutral-900 placeholder:text-neutral-500 border border-neutral-300 px-4 py-4 rounded-sm focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-colors"
            />
            {errors.full_name && (
              <span className="text-red-600 text-xs mt-1 block">{errors.full_name.message}</span>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs tracking-[0.25em] uppercase text-neutral-900 font-semibold mb-2">
              Your Phone Number *
            </label>
            <input
              type="text"
              placeholder="+234 ..."
              {...register('phone')}
              className="w-full bg-white text-neutral-900 placeholder:text-neutral-500 border border-neutral-300 px-4 py-4 rounded-sm focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-colors"
            />
            {errors.phone && (
              <span className="text-red-600 text-xs mt-1 block">{errors.phone.message}</span>
            )}
          </div>

          {/* WhatsApp Number */}
          <div>
            <label className="block text-xs tracking-[0.25em] uppercase text-neutral-900 font-semibold mb-2">
              Your WhatsApp Number
            </label>
            <input
              type="text"
              placeholder="+234 ..."
              {...register('whatsapp')}
              className="w-full bg-white text-neutral-900 placeholder:text-neutral-500 border border-neutral-300 px-4 py-4 rounded-sm focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-colors"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs tracking-[0.25em] uppercase text-neutral-900 font-semibold mb-2">
              Your Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register('email')}
              className="w-full bg-white text-neutral-900 placeholder:text-neutral-500 border border-neutral-300 px-4 py-4 rounded-sm focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-colors"
            />
            {errors.email && (
              <span className="text-red-600 text-xs mt-1 block">{errors.email.message}</span>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-xs tracking-[0.25em] uppercase text-neutral-900 font-semibold mb-2">
              Your Address *
            </label>
            <input
              type="text"
              placeholder="Delivery address"
              {...register('address')}
              className="w-full bg-white text-neutral-900 placeholder:text-neutral-500 border border-neutral-300 px-4 py-4 rounded-sm focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-colors"
            />
            {errors.address && (
              <span className="text-red-600 text-xs mt-1 block">{errors.address.message}</span>
            )}
          </div>

          {/* State */}
          <div>
            <label className="block text-xs tracking-[0.25em] uppercase text-neutral-900 font-semibold mb-2">
              Your Delivery State *
            </label>
            <select
              {...register('state')}
              className="w-full bg-white text-neutral-900 border border-neutral-300 px-4 py-4 rounded-sm focus:border-primary outline-none"
            >
              <option value="">Select your delivery state</option>
              {NIGERIAN_STATES.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
            {errors.state && (
              <span className="text-red-600 text-xs mt-1 block">{errors.state.message}</span>
            )}
          </div>

          {/* Select Package Radio Options */}
          <div>
            <label className="block text-xs tracking-[0.25em] uppercase text-neutral-900 font-medium mb-3">
              Select your package *
            </label>
            <div className="space-y-3">
              {WATCH_PACKAGES.map((pkg) => (
                <label
                  key={pkg.id}
                  onClick={() => handlePackageRadioChange(pkg.id as PackageQuantity)}
                  className={`flex items-center justify-between p-4 border-2 cursor-pointer transition-all rounded-sm ${
                    currentQty === pkg.id
                      ? 'border-primary bg-primary/5'
                      : 'border-neutral-200 hover:border-neutral-400'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      value={pkg.id}
                      checked={currentQty === pkg.id}
                      onChange={() => handlePackageRadioChange(pkg.id as PackageQuantity)}
                      className="accent-primary w-4 h-4"
                    />
                    <span className="font-display text-lg text-neutral-900">
                      {pkg.countLabel}
                    </span>
                  </div>
                  <span className="font-display text-xl text-primary font-semibold">
                    ₦{pkg.price.toLocaleString()}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Watch Color Select */}
          <div>
            <label className="block text-xs tracking-[0.25em] uppercase text-neutral-900 font-semibold mb-2">
              Watch Color *
            </label>
            <select
              {...register('color')}
              className="w-full bg-white text-neutral-900 border border-neutral-300 px-4 py-4 rounded-sm focus:border-primary outline-none"
            >
              <option value="">Select a color</option>
              {COLOR_OPTIONS.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
            {errors.color && (
              <span className="text-red-600 text-xs mt-1 block">{errors.color.message}</span>
            )}
          </div>

          {/* Form Footer Total & Submit */}
          <div className="pt-6 border-t border-neutral-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-neutral-600">
                  Total Today
                </div>
                <div className="font-display text-3xl text-primary font-bold">
                  ₦{activePackage.price.toLocaleString()}
                </div>
              </div>
              <div className="text-right text-xs text-neutral-600">
                <div>✓ Pay on Delivery</div>
                <div>✓ Free Nationwide Shipping</div>
              </div>
            </div>

            <button
              type="submit"
              disabled={submissionState.isSubmitting}
              className="w-full bg-gradient-accent py-5 text-sm tracking-[0.3em] uppercase font-medium text-white shadow-red-glow hover:scale-[1.01] transition-transform disabled:opacity-60 rounded-sm"
            >
              {submissionState.isSubmitting ? 'Processing Order...' : 'Place Your Order Now'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
