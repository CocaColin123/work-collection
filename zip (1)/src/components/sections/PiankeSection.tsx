import React from 'react';
import { FadeUp } from '../ui/FadeUp';
import AnimatedContent from '../react-bits/AnimatedContent';
import { portfolioData } from '../../data/content';

type FanShot = {
  src: string;
  alt: string;
  height: number;
};

const fanTransforms = [
  'md:-translate-x-[15rem] md:translate-y-16 md:-rotate-[10deg]',
  'md:-translate-x-[8rem] md:translate-y-4 md:-rotate-[5deg]',
  'md:translate-x-0 md:-translate-y-4 md:rotate-0',
  'md:translate-x-[8rem] md:translate-y-5 md:rotate-[5deg]',
  'md:translate-x-[15rem] md:translate-y-16 md:rotate-[10deg]'
];

const fanHoverTransforms = [
  'md:group-hover:-translate-x-[20rem] md:group-hover:translate-y-20 md:group-hover:-rotate-[13deg]',
  'md:group-hover:-translate-x-[10rem] md:group-hover:translate-y-5 md:group-hover:-rotate-[7deg]',
  'md:group-hover:translate-x-0 md:group-hover:-translate-y-8 md:group-hover:rotate-0',
  'md:group-hover:translate-x-[10rem] md:group-hover:translate-y-6 md:group-hover:rotate-[7deg]',
  'md:group-hover:translate-x-[20rem] md:group-hover:translate-y-20 md:group-hover:rotate-[13deg]'
];

const fanZIndexes = [10, 18, 30, 16, 8];

type ShowcaseCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

const PiankeFanShowcase: React.FC<{ shots: readonly FanShot[]; copy: ShowcaseCopy }> = ({ shots, copy }) => {
  const displayShots = shots.slice(1);

  return (
    <AnimatedContent distance={44} className="group mt-20 border-t border-pianke-text/15 pt-12">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif-en text-xs uppercase tracking-[0.24em] text-pianke-accent">{copy.eyebrow}</p>
          <h3 className="mt-3 font-serif-zh text-3xl font-bold">{copy.title}</h3>
        </div>
        <p className="max-w-xl font-sans-zh text-sm leading-7 text-[#5c503e]">
          {copy.description}
        </p>
      </div>

      <div className="relative min-h-[760px] overflow-visible md:min-h-[620px]">
        <div className="hidden md:block">
          {displayShots.map((shot, index) => (
            <figure
              key={shot.src}
              className={`absolute left-1/2 top-10 w-[260px] -translate-x-1/2 border border-pianke-text/10 bg-[#fffdf7] p-2 shadow-[0_22px_70px_rgba(61,52,39,0.14)] transition-transform duration-700 ease-out ${fanTransforms[index]} ${fanHoverTransforms[index]}`}
              style={{ zIndex: fanZIndexes[index] }}
            >
              <img src={shot.src} alt={shot.alt} className="block h-auto w-full" />
              <figcaption className="mt-3 border-t border-pianke-text/10 pt-2 font-sans-zh text-xs text-[#6f634f]">{shot.alt}</figcaption>
            </figure>
          ))}
        </div>

        <div className="grid gap-5 md:hidden">
          {displayShots.map(shot => (
            <figure key={shot.src} className="border border-pianke-text/10 bg-[#fffdf7] p-2 shadow-[0_14px_45px_rgba(61,52,39,0.12)]">
              <img src={shot.src} alt={shot.alt} className="block h-auto w-full" />
              <figcaption className="mt-3 border-t border-pianke-text/10 pt-2 font-sans-zh text-xs text-[#6f634f]">{shot.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </AnimatedContent>
  );
};

export const PiankeSection: React.FC = () => {
  const { pianke } = portfolioData.projects;

  return (
    <section className="bg-pianke-bg px-5 py-24 text-pianke-text md:px-12">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="mb-16 grid gap-8 border-b border-pianke-text/15 pb-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="mb-7 font-serif-en text-xs uppercase tracking-[0.28em] text-pianke-accent">{pianke.tag}</p>
              <div className="mb-6 flex items-center gap-5">
                <div className="grid h-16 w-16 place-items-center border border-pianke-text/15 bg-[#fffdf7] font-serif-en text-2xl font-bold italic text-pianke-accent">
                  {pianke.logoText}
                </div>
                <div>
                  <h2 className="font-serif-zh text-7xl font-black leading-none md:text-9xl">{pianke.title}</h2>
                  <p className="mt-3 font-serif-en text-2xl italic text-pianke-accent">{pianke.subtitle}</p>
                </div>
              </div>
              <p className="font-sans-zh text-lg leading-9 text-[#5c503e]">{pianke.description}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {pianke.stats.map(stat => (
                <AnimatedContent key={stat.label} distance={28} className="border border-pianke-text/10 bg-[#fffdf7] p-5">
                  <p className="font-serif-en text-4xl italic text-pianke-accent">{stat.value}</p>
                  <p className="mt-2 font-sans-zh text-sm leading-6 text-[#5c503e]">{stat.label}</p>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </FadeUp>

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="relative">
            <FadeUp>
              <div className="mx-auto max-w-[360px] border border-pianke-text/10 bg-[#fffdf7] p-3 shadow-[0_24px_70px_rgba(61,52,39,0.14)]">
                <img src={pianke.shots.phone} alt={pianke.shots.gallery[1].alt} className="block w-full" />
              </div>
            </FadeUp>

            <FadeUp delay={0.16} className="mt-6 lg:absolute lg:-right-10 lg:bottom-10 lg:mt-0 lg:w-64">
              <div className="border border-pianke-text/10 bg-[#fffdf7] p-2 shadow-[0_20px_55px_rgba(61,52,39,0.12)]">
                <img src={pianke.shots.secondary} alt={pianke.shots.gallery[5].alt} className="block w-full" />
              </div>
            </FadeUp>
          </div>

          <div className="space-y-10">
            {pianke.features.map((feature, index) => (
              <FadeUp key={feature.step} delay={index * 0.08}>
                <article className="reveal-trigger grid gap-5 border-t border-pianke-text/15 pt-7 outline-none md:grid-cols-[9rem_1fr]" tabIndex={0}>
                  <p className="font-serif-en text-xs uppercase tracking-[0.2em] text-pianke-accent">{feature.step}</p>
                  <div>
                    <h3 className="font-serif-zh text-2xl font-bold leading-9">{feature.title}</h3>
                    <p className="mt-4 font-sans-zh text-base leading-8 text-[#5c503e]">{feature.description}</p>
                    <div className="reveal-panel grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out">
                      <div className="overflow-hidden">
                        <ul className="space-y-3 bg-gradient-to-b from-pianke-bg to-[#f1eadc] p-5">
                          {feature.details.map(detail => (
                            <li key={detail} className="grid grid-cols-[1.25rem_1fr] gap-3 font-sans-zh text-sm leading-7 text-[#5c503e]">
                              <span className="mt-3 h-px bg-pianke-accent/70" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>

        <PiankeFanShowcase shots={pianke.shots.gallery} copy={pianke.showcase} />
      </div>
    </section>
  );
};
