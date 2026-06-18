export type GameExperienceCard = {
  title: string;
  games: string[];
  observation: string;
};

export type ModInsightCard = {
  type: string;
  cases: string[];
  pain: string;
  abstraction: string;
};

export type ModCaseCard = {
  title: string;
  description: string;
};

export const gameExperienceMap: GameExperienceCard[] = [
  {
    title: "开放世界 RPG / 角色扮演",
    games: ["上古卷轴 5", "辐射：新维加斯", "辐射 4", "巫师 3", "赛博朋克 2077", "博德之门 3", "极乐迪斯科"],
    observation: "观察角色身份、世界观、任务选择和叙事分支如何共同形成个人体验。"
  },
  {
    title: "魂系 / 高挑战动作",
    games: ["黑魂 1", "黑魂 2", "黑魂 3", "只狼", "艾尔登法环", "空洞骑士"],
    observation: "关注挑战强度、挫败阈值、学习曲线、Build 实验和重复游玩。"
  },
  {
    title: "沙盒生存 / 建造 / UGC",
    games: ["方舟：生存进化", "我的世界", "泰拉瑞亚", "森林 / 森林之子", "Garry's Mod"],
    observation: "观察玩家如何从内容消费者变成建造者、规则改造者和社区共创者。"
  },
  {
    title: "策略与系统推演",
    games: ["文明 5 / 6"],
    observation: "关注长期目标、策略权衡、系统反馈和规则理解。"
  },
  {
    title: "电影化叙事 / 动作冒险",
    games: ["战神 4 / 诸神黄昏", "古墓丽影新三部曲", "GTA 5", "荒野大镖客 2", "最后生还者 1 / 2", "神秘海域 4", "生化危机系列"],
    observation: "关注叙事节奏、角色塑造、情绪曲线和沉浸式体验。"
  },
  {
    title: "共斗 / 装备成长 / 社区攻略",
    games: ["怪物猎人：世界 / 崛起"],
    observation: "关注 Build 优化、机制学习、长期刷装和玩家经验传播。"
  }
];

export const modInsightMap: ModInsightCard[] = [
  {
    type: "降低系统摩擦",
    cases: ["SkyUI", "S+ / 建筑增强", "Dino Storage", "超级望远镜", "Stack 类 Mod", "Sodium"],
    pain: "原版 UI、建造、库存、性能和信息获取成本过高。",
    abstraction: "不是加内容，而是体验减负。"
  },
  {
    type: "扩展内容与延长生命周期",
    cases: ["伊尼戈", "恩达瑞尔", "超越天际", "暮色森林", "更多生物群系", "原始恐惧", "起源", "ERR Boss Rush"],
    pain: "官方内容被消耗后，玩家需要新角色、新世界、新任务和新挑战。",
    abstraction: "在熟悉系统中提供新目标，延长游戏生命周期。"
  },
  {
    type: "重构规则与玩法体验",
    cases: ["法环随机化", "法魂", "褪色燃烧", "ERR Boss Rush", "机械动力"],
    pain: "玩家想改变原版规则、节奏和挑战结构。",
    abstraction: "Mod 让玩家获得重新设计游戏规则的能力。"
  },
  {
    type: "社交与协作体验",
    cases: ["法环无缝联机", "Garry's Mod", "我的世界服务器", "方舟服务器"],
    pain: "玩家希望和朋友共同探索、建造、整活和长期经营一个世界。",
    abstraction: "Mod 也是社交关系和共同记忆的容器。"
  },
  {
    type: "快速试错与 Build 实验",
    cases: ["法环诚实商人", "随机化", "Boss Rush"],
    pain: "玩家想快速验证 Build、玩法和挑战想法，而不是反复刷材料或跑流程。",
    abstraction: "降低从想法到验证的成本。"
  }
];

export const eldenRingCases: ModCaseCard[] = [
  {
    title: "无缝联机",
    description: "解决共同探索和原版联机割裂问题。"
  },
  {
    title: "随机化",
    description: "解决熟悉内容后的新鲜感问题。"
  },
  {
    title: "诚实商人",
    description: "降低 Build 实验和材料获取成本。"
  },
  {
    title: "Boss Rush",
    description: "把开放世界改造成高频挑战循环。"
  },
  {
    title: "法魂 / 褪色燃烧",
    description: "重塑战斗节奏、角色成长或难度体验。"
  }
];

export const skyrimCases: ModCaseCard[] = [
  {
    title: "SkyUI",
    description: "信息架构与操作效率优化。"
  },
  {
    title: "伊尼戈",
    description: "角色陪伴与叙事连接。"
  },
  {
    title: "恩达瑞尔",
    description: "Total Conversion，把老滚底座变成新游戏。"
  },
  {
    title: "超越天际",
    description: "世界扩展与长期探索。"
  },
  {
    title: "技能树大修",
    description: "成长路径与玩法结构重塑。"
  }
];

export const productSummary = [
  "个性化世界",
  "降低系统摩擦",
  "延长游戏生命周期",
  "快速 Build 试错",
  "社交共创"
];
