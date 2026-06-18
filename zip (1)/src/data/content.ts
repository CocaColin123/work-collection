const BASE = import.meta.env.BASE_URL;

type LinkItem = {
  label: string;
  href: string;
};

type FactItem = {
  value: string;
  label: string;
};

type ExperienceItem = {
  company: string;
  companyTag: string;
  role: string;
  period: string;
  summary: string;
  details: string[];
};

type SkillGroup = {
  title: string;
  items: string[];
};

type ProjectFeature = {
  title: string;
  description: string;
};

type PiankeFeature = ProjectFeature & {
  step: string;
  details: string[];
};

type GalleryShot = {
  src: string;
  alt: string;
  height: number;
};

type PiankeTemplateShot = GalleryShot & {
  caption: string;
  frame: "phone" | "wide" | "poster" | "motionWide" | "motionTall";
};

type PiankeTemplateModule = {
  id: string;
  label: string;
  title: string;
  description: string;
  shots: PiankeTemplateShot[];
  points: string[];
};

type LiveEntry = {
  href: string;
  label: string;
  note: string;
};

export type PortfolioData = {
  hero: {
    eyebrow: string;
    mainTitle: string;
    mainTitleEmphasis: string;
    name: string;
    role: string;
    location: string;
    intro: string;
    contact: LinkItem[];
    facts: FactItem[];
  };
  resume: {
    title: string;
    eyebrow: string;
    experience: ExperienceItem[];
    education: {
      school: string;
      major: string;
      period: string;
      summary: string;
    };
    skillGroups: SkillGroup[];
  };
  paradigm: {
    title: string;
    subtitle: string;
    description: string;
    features: ProjectFeature[];
  };
  projects: {
    pianke: {
      tag: string;
      title: string;
      subtitle: string;
      role: string;
      period: string;
      description: string;
      logoText: string;
      link: string;
      stats: FactItem[];
      shots: {
        hero: string;
        phone: string;
        secondary: string;
        gallery: GalleryShot[];
      };
      showcase: {
        eyebrow: string;
        title: string;
        description: string;
      };
      templateBoard: {
        eyebrow: string;
        title: string;
        description: string;
        modules: PiankeTemplateModule[];
      };
      features: PiankeFeature[];
    };
    diary: {
      title: string;
      subtitle: string;
      role: string;
      description: string;
      live: LiveEntry;
      shots: {
        cover: string;
        timeline: string;
      };
      stats: Array<{
        label: string;
        count: string;
        hex: string;
      }>;
      features: ProjectFeature[];
    };
    photo: {
      title: string;
      subtitle: string;
      role: string;
      description: string;
      quote: string;
      live: LiveEntry;
      shots: {
        landing: string;
        album: string;
        about: string;
        journal: string;
        kingdom: string;
      };
      focusNote: string;
      pages: Array<{
        label: string;
        text: string;
      }>;
      features: ProjectFeature[];
    };
  };
  footer: {
    quoteTitle: string;
    quote: string;
    links: LinkItem[];
    copyright: string;
    tagline: string;
  };
};

export const portfolioData: PortfolioData = {
  hero: {
    eyebrow: "个人站点 / 产品作品集 · 2026",
    mainTitle: "把需求判断",
    mainTitleEmphasis: "落到可验证产品",
    name: "刘沛龙",
    role: "产品经理实习生｜AI 产品 / 工具产品 / 增长转化",
    location: "上海 · 随时到岗 · 可稳定实习 6 个月",
    intro:
      "我关注 AI 产品、工具产品和增长转化。能从用户研究、场景拆解、竞品分析、信息架构、PRD 到原型和前端验证，把问题判断推进到可体验、可评审、可迭代的产品版本。",
    contact: [
      { label: "Email", href: "mailto:l15225585490@163.com" },
      { label: "Resume PDF", href: `${BASE}liu-peilong-resume.pdf` },
      { label: "游戏经历", href: "#/game-mod-notes" },
      { label: "English", href: "#/en" }
    ],
    facts: [
      { value: "13%", label: "首次注册下单率提升" },
      { value: "200+", label: "AI 陪伴交互 Case 拆解" },
      { value: "6+", label: "片刻模板能力落地" }
    ]
  },
  resume: {
    title: "经历与能力",
    eyebrow: "Resume Extract",
    experience: [
      {
        company: "3DMGAME",
        companyTag: "国内头部单机游戏门户",
        role: "产品经理实习生",
        period: "2025.12 - 2026.05",
        summary:
          "参与风灵月影相关产品线桌面端商城优化，围绕首次注册下单率、自然下单率和老客复购率偏低的问题，拆解从进入商城、理解权益到完成下单的核心路径。改版落地后 1 个月，老客复购率 +1.7%，自然下单率 +4.9%，首次注册下单率 +13%。",
        details: [
          "对比新老用户下单表现，判断新用户主要卡在权益感知不足、付费理由不清晰和首屏理解成本较高。",
          "独立完成同类游戏工具、会员体系和工具型商城竞品调研，拆解信息架构、权益展示、付费入口、商品排序和转化路径。",
          "用 Axure、Figma、墨刀输出商城改版原型和 PRD，围绕“降低理解成本、强化付费理由、提升视觉冲击力”重构页面层级。",
          "维护优化需求池，将信息架构、会员权益、商城排序和视觉层级拆成可推进的迭代模块，并在组会上讲解方案。"
        ]
      },
      {
        company: "皓瀚同辉智能科技",
        companyTag: "前哪吒汽车 CMO 初创团队",
        role: "AI 产品经理实习生",
        period: "2025.06 - 2025.11",
        summary:
          "参与车载情绪化陪伴 AI 玩偶早期产品研究，理解桌面端 AI 陪伴体验迁移到智能座舱时，在使用场景、交互时机、反馈方式和打扰感控制上的差异。",
        details: [
          "拆解 13 款桌面陪伴机器人与 AI 玩偶类竞品，从传感器响应、VUI 语音交互、实体动作反馈、情绪表达和互动节奏整理 200+ 交互 Case。",
          "围绕驾驶情绪安抚、儿童陪伴和车内闲聊，梳理“触发条件、AI 感知、语音反馈、实体动作、用户确认”的基础链路。",
          "重点关注车内反馈的时机、拟人化表达和打扰感控制，避免把桌面玩具式互动直接搬入驾驶场景。",
          "这段经历让我建立了对 AI 硬件、多模态交互和智能座舱情绪陪伴产品的基础判断。"
        ]
      }
    ],
    education: {
      school: "上海应用技术大学",
      major: "劳动与社会保障 · 本科",
      period: "2024.09 - 至今",
      summary: "GPA 4.3/5，专业前 5%，2024 年校级学业奖学金。CET-4，能流畅阅读英文技术文档。"
    },
    skillGroups: [
      {
        title: "产品设计",
        items: ["需求分析", "竞品研究", "用户路径设计", "信息架构", "PRD", "MVP 设计", "版本规划"]
      },
      {
        title: "增长数据",
        items: ["转化漏斗", "用户行为分析", "A/B 测试", "商业化转化优化", "数据复盘", "Excel", "SQL 基础"]
      },
      {
        title: "AI-Native 工作流",
        items: ["Claude Code", "Codex", "Cursor", "开发简报", "需求拆解", "体验验收", "Handoff 文档"]
      },
      {
        title: "原型与实现",
        items: ["Figma", "Axure", "React", "Vite", "HTML/CSS/JavaScript", "Tailwind"]
      },
      {
        title: "领域积累",
        items: ["AI 产品", "工具产品", "创作者工具", "游戏工具产品", "国际化与本地化基础"]
      }
    ]
  },
  paradigm: {
    title: "工作范式",
    subtitle: "用 AI 辅助完成从产品定义到前端验证的闭环。",
    description:
      "在独立项目里，我用 PRD、开发 Brief、组件边界、验收标准、Handoff 文档和 Git 仓库管理约束模型。重点不是让 AI 多写代码，而是把需求拆清楚，让它在正确上下文里完成原型、实现、修正和验收。",
    features: [
      {
        title: "上下文边界",
        description: "先规定阅读范围、组件边界和不可修改区域，降低架构误读、样式漂移和反复返工。"
      },
      {
        title: "从 PRD 到验收",
        description: "把需求拆到界面、组件和验收标准，再驱动 Claude Code、Codex、Cursor 完成实现和体验修正。"
      }
    ]
  },
  projects: {
    pianke: {
      tag: "Highlight Project",
      title: "片刻",
      subtitle: "AI-Native 创作者图片处理工具",
      role: "独立产品项目 · 微信小程序上线",
      period: "2026.03 - 至今",
      description:
        "一个面向普通用户和轻量创作者的图片模板编辑器。项目从早期摄影作品集方向调整为“高质量视觉模板 + 轻量编辑 + 快速导出”，解决照片从拍摄、修图到可发布内容之间的最后一步。",
      logoText: "Pk",
      link: "https://cocacolin123.github.io/taobao-ai-demo/",
      stats: [
        { value: "定位", label: "从个人建站转向模板编辑" },
        { value: "链路", label: "上传、选择、编辑、预览、导出" },
        { value: "MVP", label: "先验证成品质量和导出体验" }
      ],
      shots: {
        hero: `${BASE}images/pianke/modules/home-template-selector.png`,
        phone: `${BASE}images/pianke/modules/home-template-selector.png`,
        secondary: `${BASE}images/pianke/modules/creative-border-camera-output.png`,
        gallery: [
          { src: `${BASE}images/pianke/modules/home-template-selector.png`, alt: "片刻首页模板选择页", height: 1040 },
          { src: `${BASE}images/pianke/template-picker.png`, alt: "片刻模板选择页", height: 1040 },
          { src: `${BASE}images/pianke/camera-card.png`, alt: "片刻创意边框相机卡", height: 900 },
          { src: `${BASE}images/pianke/garden-film-collage.png`, alt: "片刻花园胶片拼贴", height: 900 },
          { src: `${BASE}images/pianke/palette-glass.png`, alt: "片刻取色器放大视图", height: 820 },
          { src: `${BASE}images/pianke/modules/window-reversal-pulse.gif`, alt: "片刻窗花反转动态模板", height: 360 },
          { src: `${BASE}images/pianke/modules/export-result.png`, alt: "片刻导出完成页", height: 1161 }
        ]
      },
      showcase: {
        eyebrow: "Visual Archive",
        title: "补充样张",
        description:
          "保留少量旧素材，补充展示模板形态和视觉延展。"
      },
      templateBoard: {
        eyebrow: "Pianke Studio",
        title: "从照片到可发布内容。",
        description:
          "样张展示核心链路：模板如何降低决策成本，颜色如何来自照片，短循环如何扩展分享形式。",
        modules: [
          {
            id: "entry-frame",
            label: "01 / 入口与创意边框",
            title: "入口先给用户一个明确的成品方向。",
            description:
              "模板选择页降低第一步决策成本，创意边框把照片、设备参数和场景氛围组合成可直接分享的作品。",
            shots: [
              {
                src: `${BASE}images/pianke/modules/home-template-selector.png`,
                alt: "片刻首页模板选择页",
                height: 1040,
                caption: "模板入口先解决“做成什么样”。",
                frame: "phone"
              },
              {
                src: `${BASE}images/pianke/modules/creative-border-editor.png`,
                alt: "片刻创意边框模板编辑界面",
                height: 1161,
                caption: "编辑页把模板、效果、元素和组件拆成清晰路径。",
                frame: "phone"
              },
              {
                src: `${BASE}images/pianke/modules/creative-border-camera-output.png`,
                alt: "片刻创意边框相机参数卡输出",
                height: 792,
                caption: "参数层补充设备语境，照片仍然是主体。",
                frame: "wide"
              },
              {
                src: `${BASE}images/pianke/modules/creative-border-dark-output.png`,
                alt: "片刻创意边框地点海报输出",
                height: 787,
                caption: "场景名、设备信息和照片氛围形成一张纪念图。",
                frame: "poster"
              },
              {
                src: `${BASE}images/pianke/camera-card.png`,
                alt: "片刻创意边框相机卡",
                height: 900,
                caption: "相机卡保留品牌识别和参数表达。",
                frame: "poster"
              },
              {
                src: `${BASE}images/pianke/template-picker.png`,
                alt: "片刻模板选择页",
                height: 1040,
                caption: "从选择模板进入轻量编辑。",
                frame: "phone"
              }
            ],
            points: [
              "先给方向。",
              "少做选择。"
            ]
          },
          {
            id: "moment-card",
            label: "02 / 时刻卡",
            title: "地点、日期和照片组成轻量记忆卡。",
            description:
              "时刻卡把一次抵达、一次散步或一次旅行整理成结构稳定的分享图。地点和日期负责语境，照片负责情绪。",
            shots: [
              {
                src: `${BASE}images/pianke/modules/moment-card-park-editor.png`,
                alt: "片刻虎跑公园时刻卡编辑界面",
                height: 1154,
                caption: "材质和泛光控制氛围强度。",
                frame: "phone"
              },
              {
                src: `${BASE}images/pianke/modules/moment-card-zoo-editor.png`,
                alt: "片刻上海动物园时刻卡编辑界面",
                height: 1154,
                caption: "深绿色和噪点承接环境感。",
                frame: "phone"
              },
              {
                src: `${BASE}images/pianke/modules/moment-card-editor.png`,
                alt: "片刻龙华寺时刻卡编辑界面",
                height: 1161,
                caption: "日期、地点和照片形成清晰层级。",
                frame: "phone"
              },
              {
                src: `${BASE}images/pianke/ratio-editor.png`,
                alt: "片刻时刻卡比例编辑界面",
                height: 900,
                caption: "比例控制照片与色块的分配。",
                frame: "phone"
              },
              {
                src: `${BASE}images/pianke/ratio-editor-dark.png`,
                alt: "片刻深色时刻卡比例编辑界面",
                height: 900,
                caption: "同一结构可以承接不同情绪。",
                frame: "phone"
              }
            ],
            points: [
              "语境清楚。",
              "结构稳定。"
            ]
          },
          {
            id: "window-reversal",
            label: "03 / 窗花反转",
            title: "静态模板延展到 1 到 2 秒短循环。",
            description:
              "窗花反转验证动态模板方向：不做复杂时间轴，只用预设动效让装饰元素进入短视频分享场景。",
            shots: [
              {
                src: `${BASE}images/pianke/star-motion.png`,
                alt: "片刻窗花反转星形模板",
                height: 900,
                caption: "星形装饰适合轻量社媒内容。",
                frame: "poster"
              },
              {
                src: `${BASE}images/pianke/heart-motion.png`,
                alt: "片刻窗花反转爱心模板",
                height: 900,
                caption: "爱心装饰强化情绪节奏。",
                frame: "poster"
              },
              {
                src: `${BASE}images/pianke/modules/window-reversal-grow.gif`,
                alt: "片刻窗花反转从零生长动效",
                height: 227,
                caption: "预设动效降低编辑成本。",
                frame: "motionWide"
              },
              {
                src: `${BASE}images/pianke/modules/window-reversal-pulse.gif`,
                alt: "片刻窗花反转大小跳动动效",
                height: 360,
                caption: "短循环给分享内容一个节奏点。",
                frame: "motionTall"
              }
            ],
            points: [
              "预设动效。",
              "直接预览。"
            ]
          },
          {
            id: "garden-film",
            label: "04 / 花园胶片",
            title: "一组照片被组织成连续观看的页面。",
            description:
              "花园胶片把多张照片整理成一页，适合旅行、日记和观察记录这类需要顺序感的内容。",
            shots: [
              {
                src: `${BASE}images/pianke/garden-film-collage.png`,
                alt: "片刻花园胶片拼贴一",
                height: 900,
                caption: "多张照片形成连续叙事。",
                frame: "poster"
              },
              {
                src: `${BASE}images/pianke/forest-film-collage.png`,
                alt: "片刻花园胶片拼贴二",
                height: 900,
                caption: "胶片边框组织观看顺序。",
                frame: "poster"
              },
              {
                src: `${BASE}images/pianke/film-collage.png`,
                alt: "片刻花园胶片拼贴三",
                height: 900,
                caption: "拼贴让照片组成为完整作品。",
                frame: "poster"
              }
            ],
            points: [
              "一组照片。",
              "一页作品。"
            ]
          },
          {
            id: "color-system",
            label: "05 / 取色器与色板",
            title: "颜色从照片里来，降低普通用户配色成本。",
            description:
              "取色器把照片中的颜色带进模板，再用于图案、边框、遮罩和文字，让风格选择有来源。",
            shots: [
              {
                src: `${BASE}images/pianke/modules/eyedropper-zoom.png`,
                alt: "片刻取色器放大镜界面",
                height: 395,
                caption: "放大镜确认颜色来源。",
                frame: "poster"
              },
              {
                src: `${BASE}images/pianke/modules/universal-palette-panel.png`,
                alt: "片刻通用色板与吸色器界面",
                height: 1154,
                caption: "色板统一模板元素颜色。",
                frame: "phone"
              },
              {
                src: `${BASE}images/pianke/palette-glass.png`,
                alt: "片刻取色器玻璃界面",
                height: 820,
                caption: "从照片抽色，减少凭空选择。",
                frame: "poster"
              },
              {
                src: `${BASE}images/pianke/modules/sampled-palette-output.png`,
                alt: "片刻取色板模板输出",
                height: 625,
                caption: "颜色本身也可以成为分享内容。",
                frame: "poster"
              }
            ],
            points: [
              "来源明确。",
              "风格统一。"
            ]
          },
          {
            id: "export",
            label: "06 / 导出",
            title: "导出页让作品链路有明确结束点。",
            description:
              "预览、下载、保存和返回首页集中在一屏，避免用户在最后一步迷路，也让 MVP 先把导出体验做稳。",
            shots: [
              {
                src: `${BASE}images/pianke/modules/export-result.png`,
                alt: "片刻导出完成页",
                height: 1161,
                caption: "完成页承担下载和保存闭环。",
                frame: "phone"
              }
            ],
            points: [
              "闭环明确。",
              "路径稳定。"
            ]
          }
        ]
      },
      features: [
        {
          step: "01 / 成品路径",
          title: "先验证照片能否快速变成可发布内容。",
          description:
            "围绕“上传图片、选择模板、编辑文字和样式、实时预览、导出分享”搭建核心链路。",
          details: [
            "用户先看到成品方向，再进入编辑。",
            "模板约束审美决策，减少普通用户的创作压力。"
          ]
        },
        {
          step: "02 / 记忆格式",
          title: "用模板把散落照片整理成稳定内容形态。",
          description:
            "时刻卡承接单次抵达，花园胶片承接连续片段，都是可扩展的配置化模板。",
          details: [
            "图片、文字、颜色、比例和装饰元素都服务于最终输出。",
            "配置化模板让新模板可以复用上传、编辑、预览和导出能力。"
          ]
        },
        {
          step: "03 / 颜色与动效",
          title: "主动收敛 MVP，把质量放在功能数量前面。",
          description:
            "在无后端、单人开发和小程序限制下，暂缓账户系统、复杂素材库和高自由度画布编辑。",
          details: [
            "优先保证模板质量、编辑路径清晰度和导出体验。",
            "短循环动效先用预设验证分享价值，而不是扩成完整视频编辑器。"
          ]
        }
      ]
    },
    diary: {
      title: "日记库",
      subtitle: "Diary Vault",
      role: "本地私人档案工具",
      description:
        "一个围绕私人写作整理、检索和回看建立的本地档案工具。它把日记当作长期资料，而不是临时笔记。",
      live: {
        href: "https://cocacolin123.github.io/Dariy-/",
        label: "进入公开演示版",
        note: "这只是演示 Demo，并非实际成品。公开入口使用样本文本展示时间线、管理和 AI 辅助流程，不开放私人日记数据。"
      },
      shots: {
        cover: `${BASE}images/diary/cover.png`,
        timeline: `${BASE}images/diary/timeline.png`
      },
      stats: [
        { label: "郁", count: "49 篇", hex: "#60a5fa" },
        { label: "焦", count: "32 篇", hex: "#8b2f2f" },
        { label: "明", count: "30 篇", hex: "#c4964c" },
        { label: "无情感", count: "16 篇", hex: "#b8b0a2" }
      ],
      features: [
        {
          title: "文件即真理，不绑定格式",
          description:
            "日记存为本地 Markdown，并按年/月归档。即使工具停止维护，内容仍然是一组可读文件。"
        },
        {
          title: "111 篇日记驱动分类",
          description:
            "基于真实日记标注得到 5 维度 × 12 标签，并保留无标签样本，避免为了分类而强行分类。"
        },
        {
          title: "杂志编辑式时间轴",
          description:
            "用竖向时间轴替代表格和卡片墙，让短引用、长导语和宽卡形成阅读节奏。"
        },
        {
          title: "打开方式更克制",
          description:
            "首屏先显示日期和问候，而不是统计仪表盘。它提醒用户这是私人档案，不是运营后台。"
        },
        {
          title: "明确边界",
          description:
            "不做协作文档、博客 CMS 或 Word 克隆，把范围收在本地写作、归档和回看。"
        }
      ]
    },
    photo: {
      title: "摄影集",
      subtitle: "Colin's Photography",
      role: "个人摄影世界",
      description:
        "一个用来组织个人摄影、章节浏览和沉浸式观看的影像站点。",
      quote: "The site should feel like a night walk through a personal archive.",
      live: {
        href: "https://cocacolin123.github.io/Colin-Photo/",
        label: "进入摄影集",
        note: "这只是演示 Demo，并非实际成品。公开入口用于展示摄影观看路径、章节组织和沉浸式浏览体验。"
      },
      shots: {
        landing: `${BASE}images/photo/landing.png`,
        album: `${BASE}images/photo/album.png`,
        about: `${BASE}images/photo/about.png`,
        journal: `${BASE}images/photo/journal.png`,
        kingdom: `${BASE}images/photo/kingdom.png`
      },
      focusNote: "按 Esc 回到页面，按方向键切换图片。交互尽量退后，让照片成为视觉中心。",
      pages: [
        { label: "Landing", text: "封面时刻，建立情绪" },
        { label: "Works", text: "策展式章节，图片优先" },
        { label: "Album", text: "上下文和摄影作品并置" },
        { label: "Lightbox", text: "键盘、Escape 和 swipe 手势" },
        { label: "Journal", text: "带日期的个人写作" }
      ],
      features: [
        {
          title: "摄影是主角，UI 是配角",
          description:
            "动效和控件只服务观看，不抢照片的注意力。"
        },
        {
          title: "暗色是观看室，不是装饰",
          description:
            "暗色界面承担观看室的作用，让照片细节和明暗关系更突出。"
        },
        {
          title: "品牌声音控制",
          description:
            "文案保持安静、观察性和个人感，避免营销话术和过长解释。"
        },
        {
          title: "反参考比参考更重要",
          description:
            "不做器材展示站，也不把摄影页做成博客列表。结构服务观看，而不是堆信息。"
        },
        {
          title: "五页结构各司其职",
          description:
            "Landing、Works、Album、Lightbox、Journal 分别承担情绪、策展、上下文、沉浸观看和写作记录。"
        }
      ]
    }
  },
  footer: {
    quoteTitle: "我希望把产品判断落到真实体验里。",
    quote:
      "这个站点不是单纯展示页面，而是把简历里的产品方法、AI-Native 协作和独立项目过程放到可以被直接体验的环境里。",
    links: [
      { label: "Email", href: "mailto:l15225585490@163.com" },
      { label: "Resume PDF", href: `${BASE}liu-peilong-resume.pdf` },
      { label: "双语入口", href: "#/" },
      { label: "游戏经历与 Mod 产品理解", href: "#/game-mod-notes" }
    ],
    copyright: "Designed & Built by Colin L. © 2026",
    tagline: "AI 产品 / 工具产品 / 增长转化"
  }
};
