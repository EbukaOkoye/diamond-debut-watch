export const UpCloseGallery = (): JSX.Element => {
  const photos = [
    {
      num: 'No. 01',
      title: 'DENVOSI GREEN DIAL — WRIST PROFILE',
      src: '/images/denvosi-green-wrist.jpg',
    },
    {
      num: 'No. 02',
      title: 'DENVOSI BROWN SQUARE DIAL — FLAT DISPLAY',
      src: '/images/denvosi-brown-watch.jpg',
    },
    {
      num: 'No. 03',
      title: 'FREE 2 IN 1 CYXG WIRELESS AIRPODS',
      src: '/images/cyxg-airpods-black.jpg',
    },
    {
      num: 'No. 04',
      title: 'FREE DESIGNER LEATHER KNOT BRACELET',
      src: '/images/denvosi-bracelet.jpg',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-card border-y border-border/60">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-12 bg-primary"></span>
          <span className="text-[11px] tracking-[0.4em] uppercase text-primary font-sans font-medium">
            The Watch
          </span>
          <span className="h-px w-12 bg-primary"></span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl text-center mb-12 text-foreground">
          See it <span className="text-gold-grad italic font-serif-lux">up close.</span>
        </h2>

        <div className="flex flex-col items-center gap-8">
          {photos.map((photo) => (
            <figure
              key={photo.num}
              className="relative w-full max-w-2xl border border-border/60 bg-background shadow-luxury cursor-zoom-in group"
            >
              <div className="aspect-[4/3] bg-background overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <figcaption className="absolute bottom-3 left-3 right-3 flex flex-col gap-1 bg-background/85 backdrop-blur-md border border-border/60 px-3 py-2">
                <span className="text-[8px] sm:text-[9px] tracking-[0.25em] sm:tracking-[0.35em] uppercase text-muted-foreground">
                  {photo.num}
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.3em] uppercase leading-tight text-foreground">
                  {photo.title}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
