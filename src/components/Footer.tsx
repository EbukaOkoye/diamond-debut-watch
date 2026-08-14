import { WHATSAPP_NUMBER, WHATSAPP_LINK } from '../lib/constants';

export const Footer = (): JSX.Element => {
  return (
    <footer className="py-10 border-t border-border/60 bg-card">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 grid sm:grid-cols-3 items-center gap-4 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-3">
          <img src="/images/logo.png" alt="Denvosi NG" className="h-8 w-8 object-contain" />
          <span className="font-display tracking-widest text-sm text-foreground">DENVOSI</span>
        </div>
        <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase text-center">
          © {new Date().getFullYear()} Denvosi Wrist watch
        </p>
        <p className="text-[10px] text-muted-foreground tracking-[0.25em] uppercase text-center sm:text-right">
          WhatsApp:{' '}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            {WHATSAPP_NUMBER}
          </a>
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 mt-8 pt-6 border-t border-border/60">
        <p className="text-[10px] sm:text-[11px] leading-relaxed text-muted-foreground text-center max-w-4xl mx-auto">
          Disclaimer. This site is not part of Facebook website, Facebook Inc. It is also not part of the google website or Alphabet Inc. Additionally, This site is not endorsed by Facebook or Google in any way. Facebook and Google is a trademark of Facebook Inc. and Alphabet Inc Respectively
        </p>
      </div>
    </footer>
  );
};
