import React from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { ResumeSection } from './components/sections/ResumeSection';
import { PiankeSection } from './components/sections/PiankeSection';
import { DiarySection } from './components/sections/DiarySection';
import { PhotoSection } from './components/sections/PhotoSection';
import { FooterSection } from './components/sections/FooterSection';
import { LanguageGate } from './components/sections/LanguageGate';
import { GameModNotesPage } from './components/sections/GameModNotesPage';
import { portfolioData, type PortfolioData } from './data/content';
import { portfolioDataEn } from './data/contentEn';

type Route = 'home' | 'zh' | 'en' | 'gameModNotes';

type TransitionBandProps = {
  from: string;
  to: string;
  accent: string;
};

const TransitionBand: React.FC<TransitionBandProps> = ({ from, to, accent }) => (
  <div className={`relative h-16 bg-gradient-to-b ${from} ${to} md:h-20`} aria-hidden="true">
    <div className="absolute left-1/2 top-1/2 h-px w-[min(72rem,82vw)] -translate-x-1/2" style={{ backgroundColor: accent }} />
    <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border" style={{ borderColor: accent, backgroundColor: 'currentColor' }} />
  </div>
);

const getRouteFromHash = (): Route => {
  if (window.location.hash === '#/zh') {
    return 'zh';
  }
  if (window.location.hash === '#/en') {
    return 'en';
  }
  if (window.location.hash === '#/game-mod-notes') {
    return 'gameModNotes';
  }
  return 'home';
};

const getLastPortfolioRoute = (): '#/zh' | '#/en' => {
  const savedRoute = window.sessionStorage.getItem('lastPortfolioRoute');
  return savedRoute === '#/en' ? '#/en' : '#/zh';
};

type PortfolioPageProps = {
  data: PortfolioData;
};

const PortfolioPage: React.FC<PortfolioPageProps> = ({ data }) => (
  <div className="overflow-x-hidden bg-[#f7f5f0] text-[#1a1a1a] selection:bg-neutral-900 selection:text-[#f7f5f0]">
    <HeroSection hero={data.hero} />
    <ResumeSection resume={data.resume} paradigm={data.paradigm} />

    <TransitionBand from="from-[#fbfaf7]" to="to-pianke-bg" accent="rgba(83,107,53,0.22)" />
    <PiankeSection pianke={data.projects.pianke} />

    <TransitionBand from="from-pianke-bg" to="to-diary-bg" accent="rgba(196,150,76,0.28)" />
    <DiarySection diary={data.projects.diary} />

    <TransitionBand from="from-diary-bg" to="to-photo-bg" accent="rgba(15,15,15,0.32)" />
    <PhotoSection photo={data.projects.photo} />

    <FooterSection footer={data.footer} />
  </div>
);

export default function App() {
  const [route, setRoute] = React.useState<Route>(() => getRouteFromHash());

  React.useEffect(() => {
    const handleHashChange = () => setRoute(getRouteFromHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = route === 'en' ? 'en' : 'zh-CN';
  }, [route]);

  React.useLayoutEffect(() => {
    const resetScroll = () => window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    resetScroll();
    const frame = window.requestAnimationFrame(resetScroll);
    const timeout = window.setTimeout(resetScroll, 120);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [route]);

  React.useEffect(() => {
    if (route === 'zh' || route === 'en') {
      window.sessionStorage.setItem('lastPortfolioRoute', `#/${route}`);
    }
  }, [route]);

  if (route === 'home') {
    return <LanguageGate />;
  }

  if (route === 'gameModNotes') {
    return <GameModNotesPage returnHref={getLastPortfolioRoute()} />;
  }

  const data = route === 'en' ? portfolioDataEn : portfolioData;

  return (
    <PortfolioPage key={route} data={data} />
  );
}
