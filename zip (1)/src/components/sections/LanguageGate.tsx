import React from 'react';

const BASE = import.meta.env.BASE_URL;

type FloatingShot = {
  src: string;
  className: string;
  rotate: number;
  depth: number;
  delay: string;
};

type ProofItem = {
  label: string;
  title: string;
  metric: string;
  summary: string;
  images: string[];
};

const floatingShots: FloatingShot[] = [
  {
    src: `${BASE}images/pianke/heart-motion.png`,
    className: "right-[-34%] top-[22%] w-44 md:right-[7%] md:top-[12%] md:w-60",
    rotate: 8,
    depth: -16,
    delay: "-2.2s"
  },
  {
    src: `${BASE}images/pianke/garden-film-collage.png`,
    className: "bottom-[4%] left-[-9%] w-40 md:w-48",
    rotate: -9,
    depth: 18,
    delay: "0s"
  },
  {
    src: `${BASE}images/photo/landing.png`,
    className: "bottom-[-20%] right-[13%] w-64 md:w-96",
    rotate: -4,
    depth: 14,
    delay: "-1.2s"
  }
];

const proofItems: ProofItem[] = [
  {
    label: "01 / Pianke",
    title: "Template editor shipped as a Mini Program",
    metric: "30MB · 6+ templates · 0 account dependency",
    summary: "A lightweight path from image upload to shareable cards, posters, diary images, and film collages.",
    images: [`${BASE}images/pianke/ratio-editor.png`, `${BASE}images/pianke/garden-film-collage.png`]
  },
  {
    label: "02 / Diary Vault",
    title: "Private archive shaped by 111 real entries",
    metric: "5 dimensions · 12 tags · local Markdown",
    summary: "A paper-first local diary system with archive logic, editorial rhythm, and deliberate anti-scope.",
    images: [`${BASE}images/diary/cover.png`, `${BASE}images/diary/timeline.png`]
  },
  {
    label: "03 / Photography",
    title: "A viewing room for personal photographs",
    metric: "5 pages · darkroom surface · focus mode",
    summary: "A photo site where the interface recedes and the photographs become the only light source.",
    images: [`${BASE}images/photo/landing.png`, `${BASE}images/photo/kingdom.png`]
  }
];

type LanguageEntryProps = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href: string;
};

const LanguageEntry: React.FC<LanguageEntryProps> = ({ eyebrow, title, body, cta, href }) => (
  <a
    href={href}
    className="language-entry group relative block min-h-[14rem] border border-ink/25 bg-[#f8f4eb]/95 p-6 shadow-[0_20px_70px_rgba(61,52,39,0.09)] backdrop-blur-[2px] transition duration-500 ease-out hover:-translate-y-2 hover:border-ink/60 hover:bg-[#fdfaf3] hover:shadow-[0_28px_90px_rgba(61,52,39,0.16)] focus:-translate-y-2 focus:border-ink/70 focus:bg-[#fdfaf3] focus:outline-none md:min-h-[18rem] md:p-8"
  >
    <span className="font-serif-en text-xs uppercase tracking-[0.24em] text-[#536b35]">{eyebrow}</span>
    <span className="mt-4 block font-serif-zh text-4xl font-black leading-tight md:mt-5 md:text-7xl">{title}</span>
    <span className="mt-6 block max-w-xl font-sans-zh text-sm leading-7 text-neutral-600 md:text-base md:leading-8">{body}</span>
    <span className="absolute right-5 top-5 grid h-12 w-12 place-items-center border border-ink/20 bg-[#f7f5f0] transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-ink group-hover:text-[#f7f5f0] group-focus:translate-x-1 group-focus:-translate-y-1 group-focus:bg-ink group-focus:text-[#f7f5f0]">
      <span aria-hidden="true" className="font-serif-en text-2xl leading-none">↗</span>
    </span>
    <span className="absolute bottom-5 left-6 right-6 flex items-center justify-between border-t border-ink/20 pt-4 font-serif-en text-xs uppercase tracking-[0.2em] text-neutral-500 md:left-8 md:right-8">
      {cta}
      <span className="h-px flex-1 bg-ink/20 ml-5 transition-colors group-hover:bg-ink/50 group-focus:bg-ink/50" />
    </span>
  </a>
);

export const LanguageGate: React.FC = () => {
  const [pointer, setPointer] = React.useState({ x: 0, y: 0 });

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: (event.clientX - rect.left) / rect.width - 0.5,
      y: (event.clientY - rect.top) / rect.height - 0.5
    });
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#f7f5f0] px-5 py-7 text-ink md:px-12 md:py-10"
      onPointerMove={handlePointerMove}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-ink/20" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20 md:opacity-55" aria-hidden="true">
        {floatingShots.map(shot => (
          <img
            key={shot.src}
            src={shot.src}
            alt=""
            className={`language-shot absolute border border-ink/10 bg-[#fffdf7] p-2 shadow-[0_24px_80px_rgba(61,52,39,0.16)] ${shot.className}`}
            style={{
              animationDelay: shot.delay,
              transform: `translate3d(${pointer.x * shot.depth}px, ${pointer.y * shot.depth}px, 0) rotate(${shot.rotate}deg)`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-7xl flex-col gap-10">
        <header className="flex flex-col gap-4 border-b border-ink/20 pb-5 md:flex-row md:items-center md:justify-between">
          <p className="font-serif-en text-xs uppercase tracking-[0.28em] text-neutral-500">Work Collection · 2026</p>
          <a
            href="mailto:l15225585490@163.com"
            className="w-fit border border-ink/15 bg-[#f7f5f0]/80 px-3 py-2 font-sans-zh text-xs uppercase tracking-[0.18em] text-neutral-600 transition-colors hover:bg-ink hover:text-[#f7f5f0]"
          >
            Email
          </a>
        </header>

        <section className="grid gap-10 pt-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <p className="mb-7 font-serif-en text-xs uppercase tracking-[0.28em] text-[#536b35]">Choose a language</p>
            <h1 className="font-serif-zh text-[clamp(3rem,10vw,8rem)] font-black leading-[0.98]">
              Pei Long Liu
            </h1>
            <p className="mt-7 max-w-3xl font-sans-zh text-lg leading-9 text-neutral-700 md:text-xl">
              同一组产品经历和作品项目，两种表达方式。中文保留本土语境，英文对应英文简历和海外团队阅读习惯。
            </p>
            <nav className="mt-8 grid gap-3 lg:hidden">
              <LanguageEntry
                href="#/zh"
                eyebrow="Chinese Portfolio"
                title="中文作品集"
                body="面向中文招聘和本土产品语境，保留片刻、日记库、摄影集的完整项目叙事。"
                cta="Enter Chinese"
              />
              <LanguageEntry
                href="#/en"
                eyebrow="English Portfolio"
                title="English"
                body="Aligned with the English resume and overseas reading habits."
                cta="Enter English"
              />
            </nav>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {proofItems.map(item => (
              <article key={item.label} className="border border-ink/15 bg-[#f8f4eb]/92 p-3 shadow-[0_18px_60px_rgba(61,52,39,0.08)] backdrop-blur-[2px]">
                <div className="mb-3 flex h-32 gap-2 overflow-hidden bg-[#eee8dc]">
                  {item.images.map((src, index) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className={`h-full min-w-0 flex-1 object-cover ${index === 0 ? "object-top" : "object-center"}`}
                    />
                  ))}
                </div>
                <p className="font-serif-en text-[0.65rem] uppercase tracking-[0.2em] text-[#536b35]">{item.label}</p>
                <h2 className="mt-2 font-serif-zh text-lg font-bold leading-6">{item.title}</h2>
                <p className="mt-2 font-serif-en text-xs italic text-neutral-500">{item.metric}</p>
                <p className="mt-3 font-sans-zh text-xs leading-5 text-neutral-600">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <nav className="mt-auto hidden gap-4 pb-5 lg:grid lg:grid-cols-2">
          <LanguageEntry
            href="#/zh"
            eyebrow="Chinese Portfolio"
            title="中文作品集"
            body="面向中文招聘和本土产品语境，保留片刻、日记库、摄影集的完整项目叙事。"
            cta="Enter Chinese"
          />
          <LanguageEntry
            href="#/en"
            eyebrow="English Portfolio"
            title="English"
            body="Aligned with the English resume: AI product internship experience, tool-product thinking, and launchable portfolio projects."
            cta="Enter English"
          />
        </nav>
      </div>
    </main>
  );
};
