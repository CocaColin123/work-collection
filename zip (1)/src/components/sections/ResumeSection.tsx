import React from 'react';
import { FadeUp } from '../ui/FadeUp';
import AnimatedContent from '../react-bits/AnimatedContent';
import { portfolioData } from '../../data/content';

export const ResumeSection: React.FC = () => {
  const { resume, paradigm } = portfolioData;

  return (
    <section className="bg-[#fbfaf7] px-5 py-24 text-ink md:px-12">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="mb-16 grid gap-6 border-y border-ink/15 py-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="mb-4 font-serif-en text-xs uppercase tracking-[0.26em] text-neutral-500">{resume.eyebrow}</p>
              <h2 className="font-serif-zh text-5xl font-black leading-tight md:text-7xl">{resume.title}</h2>
            </div>
            <div className="lg:col-span-8">
              <h3 className="mb-5 font-serif-zh text-3xl font-bold">{paradigm.title}</h3>
              <p className="max-w-4xl font-serif-zh text-xl leading-10 text-neutral-700">{paradigm.subtitle}</p>
              <p className="mt-5 max-w-4xl font-sans-zh text-base leading-8 text-neutral-600">{paradigm.description}</p>
            </div>
          </div>
        </FadeUp>

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-10">
            {resume.experience.map((exp, index) => (
              <FadeUp key={exp.company} delay={index * 0.08}>
                <article className="reveal-trigger border-t border-ink/20 pt-7 outline-none" tabIndex={0}>
                  <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                    <div>
                      <h3 className="font-serif-zh text-2xl font-bold">{exp.company}</h3>
                      <p className="mt-1 text-sm text-neutral-500">{exp.companyTag}</p>
                    </div>
                    <p className="font-serif-en text-sm uppercase tracking-[0.16em] text-neutral-500">{exp.period}</p>
                  </div>
                  <p className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-[#536b35]">{exp.role}</p>
                  <p className="font-serif-zh text-base leading-8 text-neutral-700">{exp.summary}</p>
                  <div className="reveal-panel grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out">
                    <div className="overflow-hidden">
                      <ul className="space-y-3 bg-gradient-to-b from-[#fbfaf7] to-[#f0ece3] p-5">
                        {exp.details.map(detail => (
                          <li key={detail} className="grid grid-cols-[1.25rem_1fr] gap-3 font-sans-zh text-sm leading-7 text-neutral-600">
                            <span className="mt-3 h-px bg-ink/30" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}

            <FadeUp>
              <article className="border border-ink/15 bg-[#f2eee5] p-6">
                <p className="mb-3 font-serif-en text-xs uppercase tracking-[0.24em] text-neutral-500">{resume.education.period}</p>
                <h3 className="font-serif-zh text-2xl font-bold">{resume.education.school}</h3>
                <p className="mt-2 font-serif-zh text-sm text-neutral-600">{resume.education.major}</p>
                <p className="mt-4 font-sans-zh text-sm leading-7 text-neutral-700">{resume.education.summary}</p>
              </article>
            </FadeUp>
          </div>

          <div>
            <AnimatedContent distance={50} delay={0.1} className="grid gap-4 md:grid-cols-2">
              {resume.skillGroups.map(group => (
                <section key={group.title} className="border border-ink/15 bg-[#f7f5f0] p-6">
                  <h3 className="mb-5 font-serif-zh text-xl font-bold">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(item => (
                      <span key={item} className="border border-ink/10 bg-[#fffdf8] px-3 py-2 font-sans-zh text-sm text-neutral-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </section>
              ))}
            </AnimatedContent>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {paradigm.features.map((feature, index) => (
                <FadeUp key={feature.title} delay={0.12 + index * 0.08}>
                  <section className="bg-ink p-6 text-[#f7f5f0]">
                    <h3 className="mb-3 font-serif-zh text-xl font-bold">{feature.title}</h3>
                    <p className="font-sans-zh text-sm leading-7 text-neutral-300">{feature.description}</p>
                  </section>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
