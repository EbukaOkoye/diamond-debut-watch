import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TickerBanner } from './components/TickerBanner';
import { FreeBonusSection } from './components/FreeBonusSection';
import { ShowcaseSection } from './components/ShowcaseSection';
import { UpCloseGallery } from './components/UpCloseGallery';
import { PackageSelector } from './components/PackageSelector';
import { OrderForm } from './components/OrderForm';
import { Footer } from './components/Footer';
import { StickyOrderButton } from './components/StickyOrderButton';
import { PackageQuantity } from './types';

export const App = (): JSX.Element => {
  const [selectedQty, setSelectedQty] = useState<PackageQuantity>('1');

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StickyOrderButton />
      <Header />
      <main>
        <HeroSection />
        <TickerBanner />
        <FreeBonusSection />
        <ShowcaseSection />
        <UpCloseGallery />
        <PackageSelector
          selectedQty={selectedQty}
          onSelectPackage={(qty) => setSelectedQty(qty)}
        />
        <OrderForm
          selectedQty={selectedQty}
          onSelectPackage={(qty) => setSelectedQty(qty)}
        />
      </main>
      <Footer />
    </div>
  );
};
