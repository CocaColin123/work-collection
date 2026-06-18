import React from 'react';
import { CircleAlert, ExternalLink } from 'lucide-react';
import { FadeUp } from '../ui/FadeUp';
import AnimatedContent from '../react-bits/AnimatedContent';
import type { PortfolioData } from '../../data/content';

type DiarySectionProps = {
  diary: PortfolioData['projects']['diary'];
};

export const DiarySection: React.FC<DiarySectionProps> = ({ diary }) => {
  const liveLinkProps = {
    href: diary.live.href,
    target: "_blank",
    rel: "noreferrer"
  };

  return (
    <section className="bg-diary-bg px-5 py-24 text-[#2d2b28] md:px-12">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="mb-14 grid gap-8 border-b border-[#2d2b28]/15 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-4 font-serif-en text-xs uppercase tracking-[0.26em] text-diary-accent">{diary.role}</p>
              <h2 className="font-serif-zh text-7xl font-black leading-none md:text-9xl">{diary.title}</h2>
              <p className="mt-4 font-serif-en text-3xl italic text-diary-accent">{diary.subtitle}</p>
            </div>
            <div className="max-w-3xl lg:justify-self-end">
              <p className="font-serif-zh text-2xl font-bold leading-10">{diary.description}</p>
              <div className="mt-5">
                <p className="flex max-w-2xl gap-2 font-sans-zh text-xs leading-6 text-[#2d2b28]/45">
                  <CircleAlert className="mt-1 h-4 w-4 shrink-0" strokeWidth={1.6} aria-hidden="true" />
                  <span>{diary.live.note}</span>
                </p>
              </div>
              <div className="mt-6 flex lg:justify-end">
                <a
                  {...liveLinkProps}
                  className="inline-flex w-fit shrink-0 items-center gap-3 border border-[#2d2b28]/35 bg-[#2d2b28] px-5 py-4 font-sans-zh text-sm font-semibold tracking-[0.12em] text-[#fffdf7] shadow-[0_18px_45px_rgba(45,43,40,0.16)] transition duration-300 hover:-translate-y-1 hover:bg-[#fffdf7] hover:text-[#2d2b28] focus:-translate-y-1 focus:outline-none"
                >
                  {diary.live.label}
                  <ExternalLink className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </FadeUp>

        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-7">
            <AnimatedContent distance={36} className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {diary.stats.map(stat => (
                <div key={stat.label} className="border border-[#2d2b28]/10 bg-[#fffdf7] p-4">
                  <span className="mb-4 block h-1 w-12" style={{ backgroundColor: stat.hex }} />
                  <p className="font-serif-zh text-2xl font-bold">{stat.label}</p>
                  <p className="mt-1 font-serif-en text-sm uppercase tracking-[0.14em] text-[#8d806a]">{stat.count}</p>
                </div>
              ))}
            </AnimatedContent>

            {diary.features.map((feature, index) => (
              <AnimatedContent key={feature.title} distance={28} delay={index * 0.04}>
                <article className="border-t border-[#c4964c]/35 pt-6">
                  <h3 className="font-serif-zh text-2xl font-bold leading-9">{feature.title}</h3>
                  <p className="mt-3 font-sans-zh text-base leading-8 text-[#2d2b28]/75">{feature.description}</p>
                </article>
              </AnimatedContent>
            ))}
          </div>

          <div className="relative min-h-[620px]">
            <FadeUp delay={0.12}>
              <a
                {...liveLinkProps}
                aria-label={`${diary.live.label}: ${diary.title}`}
                className="group block border border-[#2d2b28]/15 bg-[#fffdf8] p-3 shadow-[0_28px_80px_rgba(45,43,40,0.14)] transition duration-300 hover:-translate-y-1 hover:border-[#2d2b28]/35 hover:shadow-[0_32px_90px_rgba(45,43,40,0.18)] focus:-translate-y-1 focus:border-[#2d2b28]/45 focus:outline-none"
              >
                <img src={diary.shots.cover} alt={`${diary.title} cover page`} className="block w-full" />
              </a>
            </FadeUp>

            <FadeUp delay={0.26} className="mt-6 lg:absolute lg:-bottom-4 lg:-left-10 lg:mt-0 lg:w-[72%]">
              <a
                {...liveLinkProps}
                aria-label={`${diary.live.label}: ${diary.title} timeline`}
                className="group block border border-[#2d2b28]/15 bg-[#f5efe4] p-3 shadow-[0_24px_70px_rgba(45,43,40,0.12)] transition duration-300 hover:-translate-y-1 hover:border-[#2d2b28]/35 hover:shadow-[0_28px_78px_rgba(45,43,40,0.16)] focus:-translate-y-1 focus:border-[#2d2b28]/45 focus:outline-none"
              >
                <img src={diary.shots.timeline} alt={`${diary.title} timeline page`} className="block w-full" />
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};
