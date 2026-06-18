import React, { useEffect, useMemo, useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { FadeUp } from '../ui/FadeUp';
import AnimatedContent from '../react-bits/AnimatedContent';
import type { PortfolioData } from '../../data/content';

type FanShot = {
  src: string;
  alt: string;
  height: number;
};

type ShowcaseCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

type TemplateModule = PortfolioData['projects']['pianke']['templateBoard']['modules'][number];
type TemplateShot = TemplateModule['shots'][number];
type PiankeFeatureItem = PortfolioData['projects']['pianke']['features'][number];
type PiankeCapability = {
  id: 'output' | 'memory' | 'motion';
  step: string;
  title: string;
  description: string;
  points: string[];
  primary: TemplateShot;
  supporting: TemplateShot[];
  mediaLabel: string;
};

type PiankeSectionProps = {
  pianke: PortfolioData['projects']['pianke'];
};

type TemplateModuleList = PortfolioData['projects']['pianke']['templateBoard']['modules'];

const archiveCardClass = [
  'left-[3%] top-[14%] h-[300px] w-[190px] -rotate-[8deg] z-20',
  'left-[21%] top-[3%] h-[330px] w-[220px] rotate-[4deg] z-30',
  'left-[41%] top-[15%] h-[320px] w-[220px] -rotate-[3deg] z-40',
  'left-[61%] top-[5%] h-[330px] w-[220px] rotate-[8deg] z-30',
  'left-[80%] top-[28%] h-[250px] w-[190px] -rotate-[5deg] z-20',
  'left-[31%] top-[47%] h-[185px] w-[330px] rotate-[2deg] z-10'
];

const archiveHoverClass = [
  'lg:group-hover:left-[0%] lg:group-hover:top-[18%] lg:group-hover:-rotate-[12deg]',
  'lg:group-hover:left-[19%] lg:group-hover:top-[1%] lg:group-hover:rotate-[0deg]',
  'lg:group-hover:left-[40%] lg:group-hover:top-[10%] lg:group-hover:rotate-[1deg]',
  'lg:group-hover:left-[62%] lg:group-hover:top-[2%] lg:group-hover:rotate-[5deg]',
  'lg:group-hover:left-[82%] lg:group-hover:top-[32%] lg:group-hover:-rotate-[2deg]',
  'lg:group-hover:left-[27%] lg:group-hover:top-[58%] lg:group-hover:rotate-[0deg]'
];

const findShot = (modules: TemplateModuleList, moduleId: string, shotIndex: number): TemplateShot => {
  const module = modules.find(item => item.id === moduleId) ?? modules[0];
  return module.shots[shotIndex] ?? module.shots[0];
};

const findModule = (modules: TemplateModuleList, moduleId: string): TemplateModule => modules.find(item => item.id === moduleId) ?? modules[0];

const stackDeckHeightClass: Record<string, string> = {
  'entry-frame': 'min-h-[500px]',
  'moment-card': 'min-h-[500px]',
  'window-reversal': 'min-h-[470px]',
  'garden-film': 'min-h-[500px]',
  'color-system': 'min-h-[470px]',
  export: 'min-h-[380px]'
};

const stackCardClass: Record<string, string[]> = {
  'entry-frame': [
    'left-[5%] top-[14%] h-[310px] w-[210px] -rotate-[8deg] z-20',
    'left-[20%] top-[8%] h-[340px] w-[230px] rotate-[3deg] z-30',
    'left-[38%] top-[4%] h-[250px] w-[430px] -rotate-[2deg] z-40',
    'left-[50%] top-[43%] h-[230px] w-[250px] rotate-[4deg] z-30',
    'left-[66%] top-[28%] h-[260px] w-[250px] -rotate-[5deg] z-20',
    'left-[8%] top-[48%] h-[235px] w-[260px] rotate-[5deg] z-10'
  ],
  'moment-card': [
    'left-[2%] top-[8%] h-[380px] w-[250px] -rotate-[6deg] z-20',
    'left-[23%] top-[17%] h-[360px] w-[240px] rotate-[4deg] z-30',
    'left-[44%] top-[6%] h-[390px] w-[220px] -rotate-[2deg] z-40',
    'left-[61%] top-[25%] h-[310px] w-[210px] rotate-[6deg] z-20',
    'left-[75%] top-[9%] h-[330px] w-[205px] -rotate-[4deg] z-10'
  ],
  'window-reversal': [
    'left-[6%] top-[12%] h-[330px] w-[250px] -rotate-[7deg] z-20',
    'left-[20%] top-[22%] h-[320px] w-[250px] rotate-[5deg] z-30',
    'left-[40%] top-[8%] h-[250px] w-[360px] -rotate-[2deg] z-40',
    'left-[63%] top-[20%] h-[320px] w-[250px] rotate-[4deg] z-30'
  ],
  'garden-film': [
    'left-[4%] top-[9%] h-[390px] w-[305px] -rotate-[6deg] z-20',
    'left-[31%] top-[15%] h-[390px] w-[305px] rotate-[2deg] z-30',
    'left-[58%] top-[5%] h-[390px] w-[305px] rotate-[7deg] z-20'
  ],
  'color-system': [
    'left-[5%] top-[14%] h-[230px] w-[330px] -rotate-[5deg] z-40',
    'left-[34%] top-[3%] h-[380px] w-[245px] rotate-[3deg] z-30',
    'left-[54%] top-[26%] h-[285px] w-[255px] -rotate-[3deg] z-20',
    'left-[70%] top-[11%] h-[245px] w-[270px] rotate-[6deg] z-30'
  ],
  export: ['left-[16%] top-[6%] h-[365px] w-[250px] -rotate-[5deg] z-30']
};

const stackHoverClass: Record<string, string[]> = {
  'entry-frame': [
    'lg:group-hover:left-[1%] lg:group-hover:top-[20%] lg:group-hover:-rotate-[12deg]',
    'lg:group-hover:left-[18%] lg:group-hover:top-[3%] lg:group-hover:rotate-[0deg]',
    'lg:group-hover:left-[36%] lg:group-hover:top-[0%] lg:group-hover:rotate-[1deg]',
    'lg:group-hover:left-[45%] lg:group-hover:top-[50%] lg:group-hover:rotate-[8deg]',
    'lg:group-hover:left-[70%] lg:group-hover:top-[19%] lg:group-hover:-rotate-[2deg]',
    'lg:group-hover:left-[8%] lg:group-hover:top-[57%] lg:group-hover:rotate-[2deg]'
  ],
  'moment-card': [
    'lg:group-hover:left-[0%] lg:group-hover:top-[13%] lg:group-hover:-rotate-[10deg]',
    'lg:group-hover:left-[20%] lg:group-hover:top-[8%] lg:group-hover:rotate-[1deg]',
    'lg:group-hover:left-[41%] lg:group-hover:top-[2%] lg:group-hover:rotate-[0deg]',
    'lg:group-hover:left-[60%] lg:group-hover:top-[20%] lg:group-hover:rotate-[9deg]',
    'lg:group-hover:left-[78%] lg:group-hover:top-[8%] lg:group-hover:-rotate-[2deg]'
  ],
  'window-reversal': [
    'lg:group-hover:left-[1%] lg:group-hover:top-[17%] lg:group-hover:-rotate-[10deg]',
    'lg:group-hover:left-[22%] lg:group-hover:top-[32%] lg:group-hover:rotate-[2deg]',
    'lg:group-hover:left-[38%] lg:group-hover:top-[2%] lg:group-hover:rotate-[1deg]',
    'lg:group-hover:left-[70%] lg:group-hover:top-[17%] lg:group-hover:rotate-[8deg]'
  ],
  'garden-film': [
    'lg:group-hover:left-[0%] lg:group-hover:top-[13%] lg:group-hover:-rotate-[9deg]',
    'lg:group-hover:left-[31%] lg:group-hover:top-[5%] lg:group-hover:rotate-[0deg]',
    'lg:group-hover:left-[63%] lg:group-hover:top-[13%] lg:group-hover:rotate-[9deg]'
  ],
  'color-system': [
    'lg:group-hover:left-[1%] lg:group-hover:top-[7%] lg:group-hover:-rotate-[2deg]',
    'lg:group-hover:left-[30%] lg:group-hover:top-[9%] lg:group-hover:rotate-[0deg]',
    'lg:group-hover:left-[52%] lg:group-hover:top-[32%] lg:group-hover:-rotate-[8deg]',
    'lg:group-hover:left-[73%] lg:group-hover:top-[5%] lg:group-hover:rotate-[3deg]'
  ],
  export: ['lg:group-hover:left-[10%] lg:group-hover:top-[0%] lg:group-hover:-rotate-[2deg]']
};

const stackImageClass: Record<TemplateShot['frame'], string> = {
  phone: 'h-full w-full object-cover object-top',
  wide: 'h-full w-full object-cover object-center',
  poster: 'h-full w-full object-cover object-center',
  motionWide: 'h-full w-full object-cover object-center',
  motionTall: 'h-full w-full object-cover object-center'
};

const stackCaptionIndexes: Record<string, number[]> = {
  'entry-frame': [0, 2],
  'moment-card': [0],
  'window-reversal': [2, 3],
  'garden-film': [0],
  'color-system': [0, 3],
  export: [0]
};

const PiankeFanShowcase: React.FC<{ shots: readonly FanShot[]; copy: ShowcaseCopy }> = ({ shots, copy }) => {
  const displayShots = shots.filter((_, index) => [1, 2, 3, 4, 5].includes(index));

  return (
    <AnimatedContent distance={44} className="group mt-12 border-t border-pianke-text/15 pt-10">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif-en text-xs uppercase tracking-[0.24em] text-pianke-accent">{copy.eyebrow}</p>
          <h3 className="mt-3 font-serif-zh text-3xl font-bold">{copy.title}</h3>
        </div>
        <p className="max-w-xl font-sans-zh text-sm leading-7 text-[#5c503e]">{copy.description}</p>
      </div>

      <div className="relative min-h-[460px] overflow-hidden border border-pianke-text/10 bg-[#f5efe4]">
        <div className="absolute inset-x-[4%] top-[16%] h-px bg-pianke-text/10" />
        <div className="absolute bottom-[15%] right-[5%] h-px w-[42%] bg-pianke-text/10" />
        <div className="hidden lg:block">
          {displayShots.slice(0, 6).map((shot, index) => (
            <figure
              key={shot.src}
              className={`absolute overflow-hidden rounded-[8px] border border-pianke-text/10 bg-[#fffdf7] p-2 shadow-[0_22px_70px_rgba(61,52,39,0.15)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${archiveCardClass[index]} ${archiveHoverClass[index]}`}
              style={{ transitionDelay: `${index * 28}ms` }}
            >
              <img src={shot.src} alt={shot.alt} className="block h-full w-full rounded-[4px] bg-[#f8f2e8] object-contain" />
            </figure>
          ))}
        </div>

        <div className="grid gap-5 p-5 lg:hidden">
          {displayShots.map(shot => (
            <figure key={shot.src} className="border border-pianke-text/10 bg-[#fffdf7] p-2 shadow-[0_14px_45px_rgba(61,52,39,0.12)]">
              <img src={shot.src} alt={shot.alt} className="block h-[260px] w-full bg-[#f8f2e8] object-contain" />
            </figure>
          ))}
        </div>
      </div>
    </AnimatedContent>
  );
};

const StackedShotCard: React.FC<{
  shot: TemplateShot;
  onOpen: (shot: TemplateShot) => void;
  viewLabel: string;
  placement: string;
  hoverPlacement: string;
  index: number;
  showCaption: boolean;
  imageClassName?: string;
}> = ({ shot, onOpen, viewLabel, placement, hoverPlacement, index, showCaption, imageClassName }) => (
  <figure
    className={`pianke-stack-card absolute ${placement} ${hoverPlacement} transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`}
    style={{ transitionDelay: `${index * 32}ms` }}
  >
    <button
      type="button"
      onClick={() => onOpen(shot)}
      aria-label={`${viewLabel}: ${shot.alt}`}
      className={`${shot.frame === 'motionWide' || shot.frame === 'motionTall' ? 'pianke-motion-tile' : ''} group/card relative h-full w-full overflow-hidden rounded-[8px] border border-pianke-text/10 bg-[#fffdf7] p-2 text-left shadow-[0_18px_56px_rgba(61,52,39,0.14)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_78px_rgba(61,52,39,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pianke-accent/70`}
    >
      <img src={shot.src} alt={shot.alt} className={`block rounded-[4px] transition duration-700 group-hover/card:scale-[1.04] ${imageClassName ?? stackImageClass[shot.frame]}`} />
      <span className="absolute right-3 top-3 inline-flex items-center gap-1 bg-[#fffdf7]/92 px-2 py-1 font-sans-zh text-[0.68rem] font-semibold text-[#514838] opacity-0 shadow-[0_8px_24px_rgba(61,52,39,0.14)] transition group-hover/card:opacity-100">
        <Maximize2 size={12} aria-hidden="true" />
        {viewLabel}
      </span>
      {showCaption ? (
        <span className="absolute bottom-3 left-3 right-3 border border-pianke-text/10 bg-[#fffdf7]/92 px-3 py-2 font-sans-zh text-xs leading-5 text-[#5c503e] shadow-[0_10px_30px_rgba(61,52,39,0.14)]">
          {shot.caption}
        </span>
      ) : null}
    </button>
  </figure>
);

const HeroShotButton: React.FC<{
  shot: TemplateShot;
  onOpen: (shot: TemplateShot) => void;
  viewLabel: string;
  className: string;
  imageClassName?: string;
}> = ({ shot, onOpen, viewLabel, className, imageClassName = 'h-full w-full object-cover object-center' }) => (
  <button
    type="button"
    onClick={() => onOpen(shot)}
    aria-label={`${viewLabel}: ${shot.alt}`}
    className={`${className} group absolute overflow-hidden border border-pianke-text/10 bg-[#fffdf7] p-2 text-left shadow-[0_24px_90px_rgba(61,52,39,0.18)] transition duration-700 hover:z-20 hover:-translate-y-2 hover:rotate-0 hover:shadow-[0_32px_110px_rgba(61,52,39,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pianke-accent/70`}
  >
    <img src={shot.src} alt={shot.alt} className={imageClassName} />
    <span className="absolute right-3 top-3 inline-flex items-center gap-1 bg-[#fffdf7]/92 px-2 py-1 font-sans-zh text-[0.68rem] font-semibold text-[#514838] opacity-0 shadow-[0_8px_24px_rgba(61,52,39,0.14)] transition group-hover:opacity-100">
      <Maximize2 size={12} aria-hidden="true" />
      {viewLabel}
    </span>
  </button>
);

const PiankeHeroComposition: React.FC<{
  pianke: PortfolioData['projects']['pianke'];
  onOpen: (shot: TemplateShot) => void;
  viewLabel: string;
}> = ({ pianke, onOpen, viewLabel }) => {
  const modules = pianke.templateBoard.modules;
  const heroOutput = findShot(modules, 'entry-frame', 2);
  const templateEntry = findShot(modules, 'entry-frame', 0);
  const exportResult = findShot(modules, 'export', 0);
  const motionLoop = findShot(modules, 'window-reversal', 2);
  const heroNote =
    pianke.title === '片刻'
      ? '先看一张可发布的成品，再看模板如何把照片推到这个状态。'
      : 'See one publishable output first, then read how the template gets the photo there.';

  return (
    <div className="relative min-h-[650px] overflow-visible">
      <div className="absolute inset-x-8 top-10 h-[540px] border border-pianke-text/10 bg-[#f3ead9]" />
      <div className="absolute left-[6%] top-[4%] h-[430px] w-[74%]">
        <HeroShotButton
          shot={heroOutput}
          onOpen={onOpen}
          viewLabel={viewLabel}
          className="inset-0 h-full w-full rotate-[1deg]"
          imageClassName="h-full w-full object-cover object-center"
        />
      </div>
      <HeroShotButton
        shot={templateEntry}
        onOpen={onOpen}
        viewLabel={viewLabel}
        className="left-[3%] top-[388px] h-[250px] w-[18%] -rotate-[4deg]"
        imageClassName="h-full w-full object-contain bg-[#f8f2e8]"
      />
      <HeroShotButton
        shot={exportResult}
        onOpen={onOpen}
        viewLabel={viewLabel}
        className="left-[28%] top-[438px] h-[220px] w-[17%] rotate-[2deg]"
        imageClassName="h-full w-full object-contain bg-[#f8f2e8]"
      />
      <HeroShotButton
        shot={motionLoop}
        onOpen={onOpen}
        viewLabel={viewLabel}
        className="right-[2%] top-[300px] h-[250px] w-[28%] -rotate-[3deg]"
        imageClassName="h-full w-full object-contain bg-[#f8f2e8]"
      />
      <div className="absolute bottom-1 right-[7%] max-w-[430px] border border-pianke-text/10 bg-[#fffdf7]/92 px-5 py-4 shadow-[0_18px_50px_rgba(61,52,39,0.12)]">
        <p className="font-serif-zh text-lg font-bold leading-7 text-pianke-text">{heroNote}</p>
        <p className="mt-2 font-sans-zh text-xs leading-5 text-[#5c503e]">{pianke.role}</p>
      </div>
    </div>
  );
};

const PiankeFeatureRibbon: React.FC<{ features: readonly PiankeFeatureItem[] }> = ({ features }) => (
  <div className="mt-14 grid gap-5 border-y border-pianke-text/15 py-8 lg:grid-cols-3">
    {features.map(feature => (
      <article key={feature.step} className="grid gap-4 lg:grid-cols-[4.5rem_1fr]">
        <p className="font-serif-en text-xs uppercase tracking-[0.18em] text-pianke-accent">{feature.step}</p>
        <div>
          <h3 className="font-serif-zh text-xl font-bold leading-8">{feature.title}</h3>
          <p className="mt-3 font-sans-zh text-sm leading-7 text-[#5c503e]">{feature.description}</p>
        </div>
      </article>
    ))}
  </div>
);

const ModulePoints: React.FC<{ points: readonly string[] }> = ({ points }) => (
  <div className="mt-6 flex flex-wrap gap-2">
    {points.map(point => (
      <span key={point} className="border border-pianke-text/10 bg-[#fffdf7]/70 px-3 py-1.5 font-sans-zh text-xs leading-5 text-[#5c503e]">
        {point}
      </span>
    ))}
  </div>
);

const ModuleMediaDeck: React.FC<{
  module: TemplateModule;
  onOpen: (shot: TemplateShot) => void;
  viewLabel: string;
}> = ({ module, onOpen, viewLabel }) => (
  <div className={`pianke-stack-deck group relative hidden overflow-visible lg:block ${stackDeckHeightClass[module.id] ?? 'min-h-[470px]'}`}>
    <div className="absolute inset-x-[3%] top-[10%] h-[76%] border border-pianke-text/10 bg-[#f5efe4]" />
    <div className="absolute inset-x-[7%] top-[17%] h-px bg-pianke-text/10" />
    <div className="absolute bottom-[12%] right-[6%] h-px w-[34%] bg-pianke-text/10" />
    {module.id === 'export'
      ? [
          {
            placement: 'left-[10%] top-[3%] h-[345px] w-[235px] -rotate-[5deg] z-30',
            hoverPlacement: 'lg:group-hover:left-[4%] lg:group-hover:top-[0%] lg:group-hover:-rotate-[8deg]',
            imageClassName: 'h-full w-full object-cover object-top'
          },
          {
            placement: 'left-[35%] top-[19%] h-[210px] w-[310px] rotate-[3deg] z-40',
            hoverPlacement: 'lg:group-hover:left-[32%] lg:group-hover:top-[12%] lg:group-hover:rotate-[0deg]',
            imageClassName: 'h-full w-full object-cover object-center'
          },
          {
            placement: 'left-[62%] top-[10%] h-[245px] w-[270px] rotate-[7deg] z-20',
            hoverPlacement: 'lg:group-hover:left-[67%] lg:group-hover:top-[18%] lg:group-hover:rotate-[4deg]',
            imageClassName: 'h-full w-full object-cover object-bottom'
          }
        ].map((card, shotIndex) => (
          <StackedShotCard
            key={`${module.shots[0].src}-${shotIndex}`}
            shot={module.shots[0]}
            onOpen={onOpen}
            viewLabel={viewLabel}
            placement={card.placement}
            hoverPlacement={card.hoverPlacement}
            index={shotIndex}
            showCaption={shotIndex === 0}
            imageClassName={card.imageClassName}
          />
        ))
      : module.shots.map((shot, shotIndex) => (
          <StackedShotCard
            key={shot.src}
            shot={shot}
            onOpen={onOpen}
            viewLabel={viewLabel}
            placement={stackCardClass[module.id]?.[shotIndex] ?? 'left-[20%] top-[12%] h-[320px] w-[250px]'}
            hoverPlacement={stackHoverClass[module.id]?.[shotIndex] ?? ''}
            index={shotIndex}
            showCaption={(stackCaptionIndexes[module.id] ?? [0]).includes(shotIndex)}
          />
        ))}
  </div>
);

const TemplateModuleSpread: React.FC<{
  module: TemplateModule;
  index: number;
  onOpen: (shot: TemplateShot) => void;
  viewLabel: string;
}> = ({ module, index, onOpen, viewLabel }) => {
  const isReversed = index % 2 === 1;

  return (
    <article className="relative border-t border-pianke-text/15 py-9">
      <span className="pointer-events-none absolute -left-2 top-6 font-serif-en text-[6rem] italic leading-none text-pianke-accent/10">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className={`relative grid gap-8 lg:grid-cols-[0.27fr_0.73fr] lg:items-center ${isReversed ? 'lg:grid-cols-[0.73fr_0.27fr]' : ''}`}>
        <div className={`relative z-10 ${isReversed ? 'lg:order-2 lg:pl-8' : 'lg:pr-8'}`}>
          <p className="font-serif-en text-xs uppercase tracking-[0.22em] text-pianke-accent">{module.label}</p>
          <h4 className="mt-4 font-serif-zh text-3xl font-bold leading-tight">{module.title}</h4>
          <p className="mt-4 font-sans-zh text-sm leading-7 text-[#5c503e]">{module.description}</p>
          <ModulePoints points={module.points} />
        </div>
        <div className={isReversed ? 'lg:order-1' : ''}>
          <ModuleMediaDeck module={module} onOpen={onOpen} viewLabel={viewLabel} />
        </div>
      </div>
    </article>
  );
};

const createPiankeCapabilities = (pianke: PortfolioData['projects']['pianke']): PiankeCapability[] => {
  const modules = pianke.templateBoard.modules;
  const entry = findModule(modules, 'entry-frame');
  const memory = findModule(modules, 'moment-card');
  const film = findModule(modules, 'garden-film');
  const color = findModule(modules, 'color-system');
  const motion = findModule(modules, 'window-reversal');
  const exportModule = findModule(modules, 'export');
  const isChinese = pianke.title === '片刻';

  return [
    {
      id: 'output',
      step: pianke.features[0]?.step ?? entry.label,
      title: pianke.features[0]?.title ?? entry.title,
      description: pianke.features[0]?.description ?? entry.description,
      points: isChinese ? ['模板选择', '创意边框', '完成导出'] : ['Template entry', 'Creative border', 'Export closure'],
      primary: entry.shots[2] ?? entry.shots[0],
      supporting: [entry.shots[0], entry.shots[1], exportModule.shots[0]].filter(Boolean),
      mediaLabel: isChinese ? '主成品' : 'Main output'
    },
    {
      id: 'memory',
      step: pianke.features[1]?.step ?? memory.label,
      title: pianke.features[1]?.title ?? memory.title,
      description: pianke.features[1]?.description ?? memory.description,
      points: isChinese ? ['时刻卡', '花园胶片', '连续叙事'] : ['Moment card', 'Garden film', 'Sequential story'],
      primary: film.shots[0] ?? memory.shots[0],
      supporting: [memory.shots[0], memory.shots[1]].filter(Boolean),
      mediaLabel: isChinese ? '记忆格式' : 'Memory format'
    },
    {
      id: 'motion',
      step: pianke.features[2]?.step ?? motion.label,
      title: pianke.features[2]?.title ?? motion.title,
      description: pianke.features[2]?.description ?? motion.description,
      points: isChinese ? ['照片取色', '色板生成', '短循环动效'] : ['Photo sampling', 'Palette output', 'Short motion loop'],
      primary: motion.shots[2] ?? motion.shots[3] ?? motion.shots[0],
      supporting: [color.shots[0], color.shots[3], motion.shots[3]].filter(Boolean),
      mediaLabel: isChinese ? '动效主视觉' : 'Motion focus'
    }
  ];
};

const primaryStageClass: Record<PiankeCapability['id'], string> = {
  output: 'aspect-[3/2]',
  memory: 'aspect-[3/4]',
  motion: 'aspect-[3/2]'
};

const primaryImageClass: Record<PiankeCapability['id'], string> = {
  output: 'object-contain',
  memory: 'object-cover object-top',
  motion: 'object-contain'
};

const proofStackHeightClass: Record<PiankeCapability['id'], string> = {
  output: 'h-[285px]',
  memory: 'h-[560px]',
  motion: 'h-[285px]'
};

const proofCardLayoutClass: Record<PiankeCapability['id'], string[]> = {
  output: [
    'left-[3%] top-[22px] h-[245px] w-[150px] -rotate-[6deg] z-20 lg:group-hover:left-[0%] lg:group-hover:top-[8px] lg:group-hover:-rotate-[9deg]',
    'left-[31%] top-[2px] h-[265px] w-[160px] rotate-[1deg] z-30 lg:group-hover:left-[33%] lg:group-hover:top-[18px] lg:group-hover:rotate-[0deg]',
    'left-[63%] top-[24px] h-[245px] w-[150px] rotate-[6deg] z-10 lg:group-hover:left-[70%] lg:group-hover:top-[8px] lg:group-hover:rotate-[9deg]'
  ],
  memory: [
    'left-[5%] top-[10px] h-[320px] w-[185px] -rotate-[5deg] z-20 lg:group-hover:left-[0%] lg:group-hover:top-[0px] lg:group-hover:-rotate-[8deg]',
    'left-[38%] top-[128px] h-[320px] w-[185px] rotate-[5deg] z-30 lg:group-hover:left-[44%] lg:group-hover:top-[94px] lg:group-hover:rotate-[7deg]'
  ],
  motion: [
    'left-[2%] top-[40px] h-[205px] w-[245px] -rotate-[5deg] z-30 lg:group-hover:left-[0%] lg:group-hover:top-[20px] lg:group-hover:-rotate-[7deg]',
    'left-[36%] top-[12px] h-[255px] w-[185px] rotate-[2deg] z-20 lg:group-hover:left-[38%] lg:group-hover:top-[28px] lg:group-hover:rotate-[0deg]',
    'left-[66%] top-[34px] h-[240px] w-[180px] rotate-[7deg] z-10 lg:group-hover:left-[72%] lg:group-hover:top-[12px] lg:group-hover:rotate-[9deg]'
  ]
};

const proofImageClass = () => 'h-full w-full rounded-[5px] bg-[#f8f2e8] object-contain transition duration-700 group-hover:scale-[1.02]';

const PiankeProofCard: React.FC<{
  shot: TemplateShot;
  onOpen: (shot: TemplateShot) => void;
  viewLabel: string;
  className?: string;
}> = ({ shot, onOpen, viewLabel, className = '' }) => (
  <button
    type="button"
    onClick={() => onOpen(shot)}
    className={`group relative overflow-hidden rounded-[8px] border border-pianke-text/10 bg-[#fffdf7] p-2 text-left shadow-[0_16px_45px_rgba(61,52,39,0.12)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(61,52,39,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pianke-accent/70 ${className}`}
    aria-label={`${viewLabel}: ${shot.alt}`}
  >
    <img src={shot.src} alt={shot.alt} className={proofImageClass()} />
  </button>
);

const PiankeCapabilityBlock: React.FC<{
  capability: PiankeCapability;
  index: number;
  onOpen: (shot: TemplateShot) => void;
  viewLabel: string;
}> = ({ capability, index, onOpen, viewLabel }) => {
  const reversed = index % 2 === 1;
  const mediaPanelClass =
    capability.id === 'memory'
      ? 'grid gap-5 p-5 lg:grid-cols-[0.52fr_0.48fr] lg:items-center'
      : 'p-5';

  return (
    <article className="relative border-t border-pianke-text/15 py-16">
      <span className="pointer-events-none absolute -left-2 top-10 font-serif-en text-[7.5rem] italic leading-none text-pianke-accent/10">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className={`relative grid gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:items-center ${reversed ? 'lg:grid-cols-[0.64fr_0.36fr]' : ''}`}>
        <div className={`relative z-10 ${reversed ? 'lg:order-2 lg:pl-8' : 'lg:pr-8'}`}>
          <p className="font-serif-en text-xs uppercase tracking-[0.22em] text-pianke-accent">{capability.step}</p>
          <h4 className="mt-4 font-serif-zh text-4xl font-bold leading-tight">{capability.title}</h4>
          <p className="mt-5 font-sans-zh text-base leading-8 text-[#5c503e]">{capability.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {capability.points.map(point => (
              <span key={point} className="border border-pianke-text/10 bg-[#fffdf7]/80 px-3 py-1.5 font-sans-zh text-xs leading-5 text-[#5c503e]">
                {point}
              </span>
            ))}
          </div>
        </div>

        <div className={`relative ${reversed ? 'lg:order-1' : ''}`}>
          <div className={`relative border border-pianke-text/10 bg-[#f5efe4] shadow-[0_24px_80px_rgba(61,52,39,0.08)] ${mediaPanelClass}`}>
            <button
              type="button"
              onClick={() => onOpen(capability.primary)}
              className={`group relative block w-full overflow-hidden rounded-[10px] border border-pianke-text/10 bg-[#fffdf7] p-3 text-left shadow-[0_26px_80px_rgba(61,52,39,0.17)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_34px_100px_rgba(61,52,39,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pianke-accent/70 ${capability.id === 'motion' ? 'pianke-motion-stage' : ''}`}
              aria-label={`${viewLabel}: ${capability.primary.alt}`}
            >
              <span className="absolute left-4 top-4 z-10 border border-pianke-text/10 bg-[#fffdf7]/90 px-3 py-1.5 font-serif-en text-xs uppercase tracking-[0.16em] text-pianke-accent shadow-[0_8px_24px_rgba(61,52,39,0.12)]">
                {capability.mediaLabel}
              </span>
              <img
                src={capability.primary.src}
                alt={capability.primary.alt}
                className={`block w-full rounded-[6px] bg-[#f8f2e8] ${primaryImageClass[capability.id]} ${primaryStageClass[capability.id]}`}
              />
            </button>

            <div className={`pianke-proof-stack group relative overflow-visible ${capability.id === 'memory' ? '' : 'mt-5'} ${proofStackHeightClass[capability.id]}`}>
              {capability.supporting.map((shot, shotIndex) => (
                <PiankeProofCard
                  key={`${capability.id}-${shot.src}-${shotIndex}`}
                  shot={shot}
                  onOpen={onOpen}
                  viewLabel={viewLabel}
                  className={`pianke-proof-stack-card ${proofCardLayoutClass[capability.id][shotIndex] ?? proofCardLayoutClass[capability.id][0]}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const PiankeCapabilityBoard: React.FC<{
  pianke: PortfolioData['projects']['pianke'];
  onOpen: (shot: TemplateShot) => void;
  viewLabel: string;
}> = ({ pianke, onOpen, viewLabel }) => {
  const capabilities = createPiankeCapabilities(pianke);

  return (
    <div className="relative mt-14 overflow-visible border-t border-pianke-text/15 pt-10">
    <AnimatedContent distance={32}>
      <div className="grid gap-8 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
        <div>
          <p className="font-serif-en text-xs uppercase tracking-[0.24em] text-pianke-accent">{pianke.templateBoard.eyebrow}</p>
          <h3 className="mt-3 font-serif-zh text-4xl font-bold leading-tight md:text-5xl">{pianke.templateBoard.title}</h3>
        </div>
        <p className="max-w-2xl font-sans-zh text-base leading-8 text-[#5c503e]">{pianke.templateBoard.description}</p>
      </div>
    </AnimatedContent>

    <div className="mt-6">
      {capabilities.map((capability, index) => (
        <PiankeCapabilityBlock key={capability.id} capability={capability} index={index} onOpen={onOpen} viewLabel={viewLabel} />
      ))}
    </div>
  </div>
  );
};

export const PiankeSection: React.FC<PiankeSectionProps> = ({ pianke }) => {
  const isChinese = pianke.title === '片刻';
  const labels = {
    view: isChinese ? '单图查看' : 'Single view',
    close: isChinese ? '关闭' : 'Close',
    demo: isChinese ? '演示素材，非完整公开入口' : 'Demo materials, not the full public product'
  };
  const allTemplateShots = useMemo(() => pianke.templateBoard.modules.flatMap(module => module.shots), [pianke.templateBoard.modules]);
  const [activeShot, setActiveShot] = useState<TemplateShot | null>(null);

  useEffect(() => {
    if (!activeShot) return undefined;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveShot(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeShot]);

  return (
    <section data-section="pianke" className="bg-pianke-bg px-5 py-24 text-pianke-text md:px-12">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="grid gap-12 border-b border-pianke-text/15 pb-12 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
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
              <p className="mt-4 inline-flex items-center gap-2 border border-pianke-text/10 bg-[#fffdf7]/70 px-3 py-1.5 font-sans-zh text-xs leading-5 text-[#7c725f]">
                <span className="grid h-4 w-4 place-items-center rounded-full border border-pianke-text/15 text-[0.64rem]">!</span>
                {labels.demo}
              </p>
              <div className="mt-8 grid gap-3">
                {pianke.stats.map(stat => (
                  <div key={stat.label} className="grid grid-cols-[4.5rem_1fr] items-center border-t border-pianke-text/10 pt-3">
                    <p className="font-serif-zh text-2xl font-bold text-pianke-accent">{stat.value}</p>
                    <p className="font-sans-zh text-sm leading-6 text-[#5c503e]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <PiankeHeroComposition pianke={pianke} onOpen={setActiveShot} viewLabel={labels.view} />
          </div>
        </FadeUp>

        <PiankeCapabilityBoard pianke={pianke} onOpen={setActiveShot} viewLabel={labels.view} />
        <PiankeFanShowcase shots={pianke.shots.gallery} copy={pianke.showcase} />
      </div>

      {activeShot ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-[#18140f]/88 px-8 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${labels.view}: ${activeShot.alt}`}
          onClick={() => setActiveShot(null)}
        >
          <article
            className="grid max-h-[92vh] w-fit max-w-[92vw] grid-rows-[auto_minmax(0,1fr)_auto] gap-4 bg-[#fffdf7] p-5 text-pianke-text shadow-[0_30px_100px_rgba(0,0,0,0.34)]"
            onClick={event => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-6 border-b border-pianke-text/10 pb-4">
              <p className="max-w-[72ch] font-sans-zh text-sm leading-7 text-[#5c503e]">{activeShot.caption}</p>
              <button
                type="button"
                onClick={() => setActiveShot(null)}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-pianke-text/10 bg-[#f7f1e5] text-pianke-text transition hover:bg-[#ebe2d1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pianke-accent/70"
                aria-label={labels.close}
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>
            <div className="grid min-h-0 place-items-center overflow-auto bg-[#f0eadf] p-3">
              <img src={activeShot.src} alt={activeShot.alt} className="max-h-[68vh] w-auto max-w-full object-contain shadow-[0_18px_55px_rgba(61,52,39,0.14)]" />
            </div>
            <div className="flex items-center justify-between border-t border-pianke-text/10 pt-3 font-serif-en text-xs uppercase tracking-[0.18em] text-pianke-accent">
              <span>{activeShot.alt}</span>
              <span>
                {Math.max(1, allTemplateShots.findIndex(shot => shot.src === activeShot.src) + 1)} / {allTemplateShots.length}
              </span>
            </div>
          </article>
        </div>
      ) : null}
    </section>
  );
};
