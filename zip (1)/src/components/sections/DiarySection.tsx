import React from 'react';
import { FadeUp } from '../ui/FadeUp';
import AnimatedContent from '../react-bits/AnimatedContent';
import type { PortfolioData } from '../../data/content';

type DiarySectionProps = {
  diary: PortfolioData['projects']['diary'];
};

export const DiarySection: React.FC<DiarySectionProps> = ({ diary }) => {
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
            <p className="max-w-3xl font-serif-zh text-2xl font-bold leading-10">{diary.description}</p>
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
              <div className="border border-[#2d2b28]/15 bg-[#fffdf8] p-3 shadow-[0_28px_80px_rgba(45,43,40,0.14)]">
                <img src={diary.shots.cover} alt={`${diary.title} cover page`} className="block w-full" />
              </div>
            </FadeUp>

            <FadeUp delay={0.26} className="mt-6 lg:absolute lg:-bottom-4 lg:-left-10 lg:mt-0 lg:w-[72%]">
              <div className="border border-[#2d2b28]/15 bg-[#f5efe4] p-3 shadow-[0_24px_70px_rgba(45,43,40,0.12)]">
                <img src={diary.shots.timeline} alt={`${diary.title} timeline page`} className="block w-full" />
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};
