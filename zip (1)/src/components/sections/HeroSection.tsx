import React from 'react';
import { FadeUp } from '../ui/FadeUp';
import SplitText from '../react-bits/SplitText';
import AnimatedContent from '../react-bits/AnimatedContent';
import { portfolioData } from '../../data/content';

export const HeroSection: React.FC = () => {
  const { hero } = portfolioData;

  return (
    <section className="min-h-screen bg-[#f7f5f0] text-ink px-5 py-8 md:px-12 md:py-12 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-ink/20" />
      <div className="absolute right-[-8vw] top-[8vh] hidden h-[36rem] w-[36rem] rounded-full border border-ink/10 md:block" />
      <div className="absolute bottom-[8vh] left-[-6vw] hidden h-72 w-72 rotate-12 border border-ink/10 md:block" />

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-between">
        <FadeUp>
          <div className="flex flex-col gap-4 border-b border-ink/20 pb-6 md:flex-row md:items-center md:justify-between">
            <p className="font-serif-en text-xs uppercase tracking-[0.28em] text-neutral-500">{hero.eyebrow}</p>
            <nav className="flex flex-wrap gap-3 font-sans-zh text-xs uppercase tracking-[0.18em] text-neutral-600">
              {hero.contact.map(link => (
                <a key={link.label} href={link.href} className="border border-ink/15 px-3 py-2 transition-colors hover:bg-ink hover:text-[#f7f5f0]">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </FadeUp>

        <div className="grid gap-10 py-16 lg:py-20">
          <div>
            <div className="mb-9 max-w-5xl">
              <SplitText
                text={hero.mainTitle}
                tag="span"
                splitType="chars"
                textAlign="left"
                delay={18}
                duration={0.9}
                className="block font-serif-zh text-[clamp(2.3rem,10vw,8rem)] font-black leading-[1.04]"
              />
              <SplitText
                text={hero.mainTitleEmphasis}
                tag="span"
                splitType="chars"
                textAlign="left"
                delay={14}
                duration={0.9}
                className="mt-2 block font-serif-zh text-[clamp(2.3rem,10vw,8rem)] font-black leading-[1.04] text-[#536b35]"
              />
            </div>

            <FadeUp delay={0.25}>
              <div className="grid min-w-0 gap-7 border-t border-ink/30 pt-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  <h1 className="mb-3 font-serif-zh text-4xl font-bold">{hero.name}</h1>
                  <p className="font-sans-zh text-sm leading-7 text-neutral-600">
                    {hero.role}
                    <br />
                    {hero.location}
                  </p>
                </div>
                <p className="min-w-0 max-w-full break-words font-sans-zh text-base leading-8 text-neutral-800 [overflow-wrap:anywhere] md:col-span-8 md:max-w-3xl md:text-[1.35rem] md:leading-10">
                  {hero.intro}
                </p>
              </div>
            </FadeUp>
          </div>

          <AnimatedContent distance={40} delay={0.2} className="grid gap-3 md:grid-cols-3">
            {hero.facts.map(fact => (
              <div key={fact.label} className="border border-ink/15 bg-[#ebe7dc] p-5">
                <p className="font-serif-en text-4xl italic text-[#536b35]">{fact.value}</p>
                <p className="mt-3 font-sans-zh text-sm leading-6 text-neutral-600">{fact.label}</p>
              </div>
            ))}
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};
