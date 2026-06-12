import React from 'react';
import { FadeUp } from '../ui/FadeUp';
import { portfolioData } from '../../data/content';

export const FooterSection: React.FC = () => {
  const { footer } = portfolioData;

  return (
    <footer className="bg-ink px-5 py-28 text-center text-[#f7f5f0] md:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <FadeUp>
          <h2 className="font-serif-zh text-5xl font-black leading-tight md:text-8xl">
            {footer.quoteTitle}
          </h2>
          <p className="mx-auto mt-8 max-w-3xl font-sans-zh text-lg leading-9 text-neutral-400 md:text-xl">
            {footer.quote}
          </p>
        </FadeUp>

        <FadeUp delay={0.18}>
          <nav className="mt-14 flex flex-wrap justify-center gap-3">
            {footer.links.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="border border-white/15 px-5 py-3 font-sans-zh text-xs uppercase tracking-[0.18em] text-neutral-300 transition-colors hover:border-[#f7f5f0] hover:text-[#f7f5f0]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mx-auto my-14 h-px w-28 bg-white/15" />
          <div className="font-serif-en text-xs uppercase tracking-[0.22em] text-neutral-600">
            <p className="mb-2">{footer.copyright}</p>
            <p>{footer.tagline}</p>
          </div>
        </FadeUp>
      </div>
    </footer>
  );
};
