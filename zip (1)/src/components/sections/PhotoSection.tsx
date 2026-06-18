import React from 'react';
import { CircleAlert, ExternalLink } from 'lucide-react';
import { FadeUp } from '../ui/FadeUp';
import AnimatedContent from '../react-bits/AnimatedContent';
import type { PortfolioData } from '../../data/content';

type PhotoSectionProps = {
  photo: PortfolioData['projects']['photo'];
};

export const PhotoSection: React.FC<PhotoSectionProps> = ({ photo }) => {
  const liveLinkProps = {
    href: photo.live.href,
    target: "_blank",
    rel: "noreferrer"
  };

  return (
    <section className="bg-photo-bg px-5 py-24 text-photo-text md:px-12">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="mb-16 grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-4 font-serif-en text-xs uppercase tracking-[0.28em] text-neutral-500">{photo.role}</p>
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <h2 className="font-serif-zh text-7xl font-black leading-none text-[#ece9e2] md:text-9xl">{photo.title}</h2>
                <a
                  {...liveLinkProps}
                  className="inline-flex w-fit shrink-0 items-center gap-3 border border-white/30 bg-[#ece9e2] px-5 py-4 font-sans-zh text-sm font-semibold tracking-[0.12em] text-[#080808] shadow-[0_20px_60px_rgba(236,233,226,0.12)] transition duration-300 hover:-translate-y-1 hover:bg-transparent hover:text-[#ece9e2] focus:-translate-y-1 focus:outline-none"
                >
                  {photo.live.label}
                  <ExternalLink className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                </a>
              </div>
              <p className="mt-4 font-serif-en text-3xl italic text-neutral-500">{photo.subtitle}</p>
            </div>
            <div>
              <p className="font-serif-zh text-2xl leading-10 text-neutral-300">{photo.description}</p>
              <p className="mt-6 font-serif-en text-xl italic leading-8 text-neutral-500">{photo.quote}</p>
              <div className="mt-6">
                <p className="flex max-w-2xl gap-2 font-sans-zh text-xs leading-6 text-neutral-500/75">
                  <CircleAlert className="mt-1 h-4 w-4 shrink-0" strokeWidth={1.6} aria-hidden="true" />
                  <span>{photo.live.note}</span>
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-7">
            {photo.features.map((feature, index) => (
              <AnimatedContent key={feature.title} distance={32} delay={index * 0.04}>
                <article className="border-t border-white/10 pt-6">
                  <h3 className="font-serif-zh text-2xl font-bold leading-9 text-neutral-100">{feature.title}</h3>
                  <p className="mt-3 font-sans-zh text-base leading-8 text-neutral-500">{feature.description}</p>
                </article>
              </AnimatedContent>
            ))}

            <AnimatedContent distance={32} delay={0.1} className="grid gap-2 border border-white/10 p-4 md:grid-cols-5">
              {photo.pages.map(page => (
                <div key={page.label} className="border border-white/10 bg-white/[0.03] p-3">
                  <p className="font-serif-en text-sm italic text-neutral-300">{page.label}</p>
                  <p className="mt-2 font-sans-zh text-xs leading-5 text-neutral-500">{page.text}</p>
                </div>
              ))}
            </AnimatedContent>
          </div>

          <div className="space-y-7">
            <FadeUp delay={0.12}>
              <a
                {...liveLinkProps}
                aria-label={`${photo.live.label}: ${photo.title}`}
                className="group block border border-white/10 bg-[#080808] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.55)] transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_30px_90px_rgba(0,0,0,0.68)] focus:-translate-y-1 focus:border-white/30 focus:outline-none"
              >
                <img src={photo.shots.landing} alt={`${photo.title} landing page`} className="block w-full" />
              </a>
            </FadeUp>

            <div className="grid gap-7 md:grid-cols-[0.82fr_1.18fr]">
              <FadeUp delay={0.2}>
                <a
                  {...liveLinkProps}
                  aria-label={`${photo.live.label}: ${photo.title} album detail`}
                  className="block border border-white/10 bg-[#080808] p-2 transition duration-300 hover:-translate-y-1 hover:border-white/25 focus:-translate-y-1 focus:border-white/30 focus:outline-none"
                >
                  <img src={photo.shots.kingdom} alt={`${photo.title} album detail`} className="block w-full" />
                </a>
              </FadeUp>
              <FadeUp delay={0.28}>
                <div className="border border-white/10 bg-[#121212] p-6">
                  <p className="mb-5 font-serif-en text-2xl italic text-neutral-400">Focus Mode</p>
                  <p className="font-sans-zh text-sm leading-7 text-neutral-500">{photo.focusNote}</p>
                </div>
              </FadeUp>
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              <FadeUp delay={0.32}>
                <a
                  {...liveLinkProps}
                  aria-label={`${photo.live.label}: ${photo.title} about page`}
                  className="block border border-white/10 bg-[#080808] p-2 transition duration-300 hover:-translate-y-1 hover:border-white/25 focus:-translate-y-1 focus:border-white/30 focus:outline-none"
                >
                  <img src={photo.shots.about} alt={`${photo.title} about page`} className="block w-full" />
                </a>
              </FadeUp>
              <FadeUp delay={0.38}>
                <a
                  {...liveLinkProps}
                  aria-label={`${photo.live.label}: ${photo.title} journal page`}
                  className="block border border-white/10 bg-[#080808] p-2 transition duration-300 hover:-translate-y-1 hover:border-white/25 focus:-translate-y-1 focus:border-white/30 focus:outline-none"
                >
                  <img src={photo.shots.journal} alt={`${photo.title} journal page`} className="block w-full" />
                </a>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
