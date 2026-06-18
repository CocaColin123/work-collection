export type GameExperienceCard = {
  title: string;
  games: string[];
  observation: string;
  primary?: boolean;
};

export type ModInsightCard = {
  type: string;
  cases: string[];
  insight: string;
};

export type ModCaseCard = {
  title: string;
  description: string;
};

export const gameExperienceMap: GameExperienceCard[] = [
  {
    title: "开放世界 RPG / 角色扮演",
    games: ["上古卷轴 5", "辐射：新维加斯", "辐射 4", "巫师 3", "赛博朋克 2077", "博德之门 3", "极乐迪斯科"],
    observation: "主战场：身份、世界、任务、选择。",
    primary: true
  },
  {
    title: "魂系 / 高挑战动作",
    games: ["黑魂 1", "黑魂 2", "黑魂 3", "只狼", "艾尔登法环", "空洞骑士"],
    observation: "主战场：挑战、学习、Build、复玩。",
    primary: true
  },
  {
    title: "沙盒生存 / 建造 / UGC",
    games: ["方舟：生存进化", "我的世界", "泰拉瑞亚", "森林 / 森林之子", "Garry's Mod"],
    observation: "从消费内容到改造规则。"
  },
  {
    title: "策略与系统推演",
    games: ["文明 5 / 6"],
    observation: "长期目标、规则反馈、策略权衡。"
  },
  {
    title: "电影化叙事 / 动作冒险",
    games: ["战神 4 / 诸神黄昏", "古墓丽影新三部曲", "GTA 5", "荒野大镖客 2", "最后生还者 1 / 2", "神秘海域 4", "生化危机系列"],
    observation: "叙事节奏、角色塑造、沉浸体验。"
  },
  {
    title: "共斗 / 装备成长 / 社区攻略",
    games: ["怪物猎人：世界 / 崛起"],
    observation: "机制学习、Build 优化、经验传播。"
  }
];

export const modInsightMap: ModInsightCard[] = [
  {
    type: "系统减负",
    cases: ["SkyUI", "S+ / 建筑增强", "Dino Storage", "超级望远镜", "Stack 类 Mod", "Sodium"],
    insight: "把 UI、库存、建造、性能问题变成更低摩擦的体验。"
  },
  {
    type: "内容扩展",
    cases: ["伊尼戈", "恩达瑞尔", "超越天际", "暮色森林", "更多生物群系", "原始恐惧", "起源", "ERR Boss Rush"],
    insight: "在熟悉系统里给玩家新角色、新世界和新目标。"
  },
  {
    type: "规则重构",
    cases: ["法环随机化", "法魂", "褪色燃烧", "ERR Boss Rush", "机械动力"],
    insight: "改变节奏、难度和挑战结构，让游戏重新成立。"
  },
  {
    type: "社交协作",
    cases: ["法环无缝联机", "Garry's Mod", "我的世界服务器", "方舟服务器"],
    insight: "把探索、建造和整活变成朋友之间的共同记忆。"
  },
  {
    type: "Build 试错",
    cases: ["法环诚实商人", "随机化", "Boss Rush"],
    insight: "降低从想法到验证的成本。"
  }
];

export const eldenRingCases: ModCaseCard[] = [
  {
    title: "无缝联机",
    description: "共同探索。"
  },
  {
    title: "随机化",
    description: "重获新鲜感。"
  },
  {
    title: "诚实商人",
    description: "快速配装。"
  },
  {
    title: "Boss Rush",
    description: "高频挑战。"
  },
  {
    title: "法魂 / 褪色燃烧",
    description: "重塑节奏。"
  }
];

export const skyrimCases: ModCaseCard[] = [
  {
    title: "SkyUI",
    description: "界面效率。"
  },
  {
    title: "伊尼戈",
    description: "角色陪伴。"
  },
  {
    title: "恩达瑞尔",
    description: "新游戏底座。"
  },
  {
    title: "超越天际",
    description: "世界扩展。"
  },
  {
    title: "技能树大修",
    description: "成长重构。"
  }
];

export const productSummary = [
  "个性化世界",
  "降低系统摩擦",
  "延长游戏生命周期",
  "快速 Build 试错",
  "社交共创"
];
