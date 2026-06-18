import React from 'react';
import { ArrowLeft, Boxes, Compass, FlaskConical, Gamepad2, Layers3, RefreshCw, Shield, Sparkles, Users } from 'lucide-react';
import AnimatedContent from '../react-bits/AnimatedContent';
import { FadeUp } from '../ui/FadeUp';
import {
  eldenRingCases,
  gameExperienceMap,
  modInsightMap,
  productSummary,
  skyrimCases,
  type GameExperienceCard,
  type ModCaseCard,
  type ModInsightCard
} from '../../data/gameModNotes';

type GameModNotesPageProps = {
  returnHref: string;
};

const gameIcons = [Compass, Shield, Boxes, Layers3, Sparkles, Users];
const modIcons = [RefreshCw, Layers3, Sparkles, Users, FlaskConical];

const SectionHeader: React.FC<{ eyebrow: string; title: string; description?: string }> = ({ eyebrow, title, description }) => (
  <FadeUp>
    <div className="mb-8 border-t border-ink/15 pt-8 md:mb-10">
      <p className="font-serif-en text-xs uppercase tracking-[0.24em] text-[#536b35]">{eyebrow}</p>
      <div className="mt-3 grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <h2 className="font-serif-zh text-3xl font-black leading-tight md:text-5xl">{title}</h2>
        {description ? (
          <p className="max-w-3xl font-sans-zh text-sm leading-7 text-neutral-600 md:text-base md:leading-8">{description}</p>
        ) : null}
      </div>
    </div>
  </FadeUp>
);

const GameCard: React.FC<{ item: GameExperienceCard; index: number }> = ({ item, index }) => {
  const Icon = gameIcons[index % gameIcons.length];

  return (
    <AnimatedContent distance={34} delay={index * 0.04} className="h-full">
      <article className="flex h-full flex-col border border-ink/15 bg-[#fbfaf7] p-5 shadow-[0_16px_42px_rgba(26,26,26,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#536b35]/40">
        <div className="mb-5 flex items-start justify-between gap-4">
          <h3 className="font-serif-zh text-xl font-bold leading-8">{item.title}</h3>
          <span className="grid h-10 w-10 shrink-0 place-items-center border border-ink/10 bg-[#ebe7dc] text-[#536b35]">
            <Icon size={18} aria-hidden="true" />
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {item.games.map(game => (
            <span key={game} className="border border-ink/10 bg-[#fffdf8] px-2.5 py-1.5 font-sans-zh text-xs leading-5 text-neutral-700">
              {game}
            </span>
          ))}
        </div>
        <p className="mt-auto pt-5 font-sans-zh text-sm leading-7 text-neutral-600">{item.observation}</p>
      </article>
    </AnimatedContent>
  );
};

const ModInsightCard: React.FC<{ item: ModInsightCard; index: number }> = ({ item, index }) => {
  const Icon = modIcons[index % modIcons.length];

  return (
    <FadeUp delay={index * 0.05}>
      <article className="grid h-full gap-5 border border-ink/15 bg-[#f7f5f0] p-5 md:grid-cols-[11rem_1fr]">
        <div>
          <div className="mb-4 grid h-10 w-10 place-items-center border border-ink/10 bg-ink text-[#f7f5f0]">
            <Icon size={18} aria-hidden="true" />
          </div>
          <h3 className="font-serif-zh text-xl font-bold leading-8">{item.type}</h3>
        </div>
        <div className="grid gap-4">
          <div>
            <p className="mb-2 font-serif-en text-[0.68rem] uppercase tracking-[0.2em] text-neutral-500">Representative</p>
            <div className="flex flex-wrap gap-2">
              {item.cases.map(mod => (
                <span key={mod} className="border border-ink/10 bg-[#fffdf8] px-2.5 py-1.5 font-sans-zh text-xs leading-5 text-neutral-700">
                  {mod}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="border-l border-ink/15 pl-4">
              <p className="font-serif-en text-[0.68rem] uppercase tracking-[0.2em] text-neutral-500">Pain Point</p>
              <p className="mt-2 font-sans-zh text-sm leading-7 text-neutral-700">{item.pain}</p>
            </div>
            <div className="border-l border-[#536b35]/30 pl-4">
              <p className="font-serif-en text-[0.68rem] uppercase tracking-[0.2em] text-[#536b35]">Product Lens</p>
              <p className="mt-2 font-sans-zh text-sm font-medium leading-7 text-ink">{item.abstraction}</p>
            </div>
          </div>
        </div>
      </article>
    </FadeUp>
  );
};

const CaseStrip: React.FC<{
  title: string;
  note: string;
  summary: string;
  cases: ModCaseCard[];
}> = ({ title, note, summary, cases }) => (
  <section className="border border-ink/15 bg-[#fbfaf7] p-5 md:p-7">
    <FadeUp>
      <div className="mb-6 grid gap-3 md:grid-cols-[0.9fr_1.1fr] md:items-end">
        <div>
          <p className="font-serif-en text-xs uppercase tracking-[0.22em] text-[#536b35]">Case Focus</p>
          <h3 className="mt-2 font-serif-zh text-2xl font-black md:text-4xl">{title}</h3>
        </div>
        <p className="font-sans-zh text-sm leading-7 text-neutral-600">{note}</p>
      </div>
    </FadeUp>
    <div className="grid gap-3 md:grid-cols-5">
      {cases.map((item, index) => (
        <AnimatedContent key={item.title} distance={24} delay={index * 0.04}>
          <article className="h-full border border-ink/10 bg-[#f2eee5] p-4">
            <p className="font-serif-en text-xs uppercase tracking-[0.2em] text-neutral-500">{String(index + 1).padStart(2, '0')}</p>
            <h4 className="mt-3 font-serif-zh text-lg font-bold leading-7">{item.title}</h4>
            <p className="mt-3 font-sans-zh text-sm leading-7 text-neutral-600">{item.description}</p>
          </article>
        </AnimatedContent>
      ))}
    </div>
    <p className="mt-6 border-l border-[#536b35]/40 pl-4 font-serif-zh text-base font-bold leading-8 text-ink">{summary}</p>
  </section>
);

export const GameModNotesPage: React.FC<GameModNotesPageProps> = ({ returnHref }) => (
  <main className="min-h-screen overflow-x-hidden bg-[#f7f5f0] text-ink selection:bg-ink selection:text-[#f7f5f0]">
    <section className="relative overflow-hidden px-5 py-8 md:px-12 md:py-12">
      <div className="absolute inset-x-0 top-0 h-px bg-ink/20" />
      <div className="absolute right-[-12vw] top-[5rem] hidden h-[28rem] w-[28rem] rounded-full border border-ink/10 md:block" />
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="flex flex-col gap-4 border-b border-ink/20 pb-6 md:flex-row md:items-center md:justify-between">
            <p className="font-serif-en text-xs uppercase tracking-[0.28em] text-neutral-500">Supplementary Notes · Game Product Lens</p>
            <a
              href={returnHref}
              className="inline-flex w-fit items-center gap-2 border border-ink/15 px-3 py-2 font-sans-zh text-xs uppercase tracking-[0.16em] text-neutral-600 transition-colors hover:bg-ink hover:text-[#f7f5f0]"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              返回作品集
            </a>
          </div>
        </FadeUp>

        <div className="grid gap-10 py-16 md:py-20 lg:grid-cols-[1fr_0.62fr] lg:items-end">
          <FadeUp>
            <div>
              <p className="mb-5 inline-flex items-center gap-2 border border-[#536b35]/25 bg-[#ebe7dc] px-3 py-1.5 font-sans-zh text-xs text-[#536b35]">
                <Gamepad2 size={14} aria-hidden="true" />
                面试补充材料
              </p>
              <h1 className="font-serif-zh text-[clamp(2.6rem,9vw,7rem)] font-black leading-[1.05]">
                游戏经历与 Mod 产品理解
              </h1>
              <p className="mt-4 font-serif-en text-3xl italic text-[#536b35] md:text-5xl">Game & Mod Product Notes</p>
            </div>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="border-l border-ink/20 pl-5 font-sans-zh text-base leading-8 text-neutral-700 md:text-lg md:leading-9">
              从开放世界 RPG、魂系动作、沙盒生存与 UGC 生态中，观察玩家个性化、系统减负、内容扩展、快速试错和社交共创等需求。
            </p>
          </FadeUp>
        </div>
      </div>
    </section>

    <section className="px-5 pb-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="01 / Game Map"
          title="游戏经历地图"
          description="按类型看玩家需求，而不是按游玩清单堆积。每类游戏都对应一种产品观察入口。"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {gameExperienceMap.map((item, index) => (
            <GameCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#ebe7dc] px-5 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="02 / Mod Patterns"
          title="Mod 经历与产品理解"
          description="用 Mod 类型、代表案例、玩家痛点和产品抽象四层拆解，快速看到需求背后的产品机会。"
        />
        <div className="grid gap-4">
          {modInsightMap.map((item, index) => (
            <ModInsightCard key={item.type} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>

    <section className="px-5 py-20 md:px-12">
      <div className="mx-auto grid max-w-7xl gap-6">
        <CaseStrip
          title="艾尔登法环 Mod 生态"
          note="同一款游戏里，玩家围绕挑战、社交、Build 和重复游玩重新配置体验。"
          cases={eldenRingCases}
          summary="法环 Mod 生态背后不是简单分类，而是玩家围绕挑战强度、社交协作、Build 实验和重复游玩，对官方体验进行重新配置。"
        />
        <CaseStrip
          title="上古卷轴 5 Mod 生态"
          note="从 UI、角色、世界到规则，老滚 5 的 Mod 让官方世界变成玩家自己的世界。"
          cases={skyrimCases}
          summary="老滚 5 的 Mod 生态说明，玩家不是只想装 Mod，而是在把官方世界改造成自己的私人世界。"
        />
      </div>
    </section>

    <section className="px-5 pb-24 md:px-12">
      <div className="mx-auto max-w-7xl bg-ink p-6 text-[#f7f5f0] md:p-10">
        <FadeUp>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="font-serif-en text-xs uppercase tracking-[0.24em] text-neutral-500">05 / Product Summary</p>
              <h2 className="mt-3 font-serif-zh text-3xl font-black leading-tight md:text-5xl">我的理解</h2>
              <p className="mt-5 font-sans-zh text-base leading-8 text-neutral-300">
                Mod 生态的价值不只是给玩家更多内容，而是让玩家在五个维度上重新配置自己的游戏体验。
              </p>
            </div>
            <div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {productSummary.map((item, index) => (
                  <div key={item} className="border border-white/15 bg-white/[0.04] p-4">
                    <p className="font-serif-en text-xs uppercase tracking-[0.2em] text-neutral-500">{String(index + 1).padStart(2, '0')}</p>
                    <p className="mt-3 font-serif-zh text-lg font-bold leading-7">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 border-l border-[#a3b86c]/50 pl-4 font-serif-zh text-xl font-bold leading-9 text-[#f7f5f0]">
                Mod 是玩家把官方给定体验改造成个人体验的产品化入口。
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl justify-center">
        <a
          href={returnHref}
          className="inline-flex items-center gap-2 border border-ink/15 bg-[#fbfaf7] px-5 py-3 font-sans-zh text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-[#f7f5f0]"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          返回作品集首页 / Back to Portfolio
        </a>
      </div>
    </section>
  </main>
);
