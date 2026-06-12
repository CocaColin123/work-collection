export const portfolioData = {
  hero: {
    eyebrow: "Personal Digital Portfolio · 2026",
    mainTitle: "把产品想法",
    mainTitleEmphasis: "做成真实可用的工具",
    name: "刘沛龙",
    role: "AI 产品经理 / 工具产品方向",
    location: "19岁 · 上海 · 随时到岗",
    intro:
      "我关注工具产品、创作者工具和 AI-Native 工作流。能从需求分析、竞品拆解、信息架构、PRD 到前端原型实现，把一个模糊想法推进到可以被真实用户打开和使用的版本。",
    contact: [
      { label: "Email", href: "mailto:l15225585490@163.com" },
      { label: "Resume PDF", href: "/liu-peilong-resume.pdf" }
    ],
    facts: [
      { value: "13%", label: "3DM 首次注册下单率提升" },
      { value: "111", label: "真实日记样本驱动分类" },
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
          "参与风灵月影 App 桌面端商城优化，从转化数据拆解问题，重构会员权益表达、商品排序和首屏路径。改版落地后，自然下单率提升 4.9%，首次注册下单率提升 13%，验证了权益强化、IP 信任背书和商城路径重构的组合判断。",
        details: [
          "独立拆解同类游戏工具、会员体系和工具型商城产品，重点比较首页信息架构、会员权益展示、付费入口、商城排序和转化路径。",
          "用 Axure、Figma、墨刀产出页面改版原型，把“降低理解成本、强化付费理由、提升页面冲击力”拆成可评审的界面方案。",
          "维护页面优化需求池，将信息架构调整、会员权益强化、商城排序、视觉层级改版和本地化适配预留拆成两阶段迭代。",
          "在组会上讲解竞品分析、改版 Demo 和迭代路线，方案获得上级及 CEO 认可，并写入后续迅捷迭代 Roadmap。"
        ]
      },
      {
        company: "皓瀚同辉智能科技",
        companyTag: "前哪吒汽车 CMO 初创团队",
        role: "AI 产品经理实习生",
        period: "2025.06 - 2025.11",
        summary:
          "参与车载情绪化陪伴 AI 玩偶产品，把桌面端陪伴体验迁移到智能座舱语境下重新拆解。围绕驾驶情绪安抚、儿童陪伴和车内闲聊场景，整理 13 款竞品与 200+ 交互 Case，辅助团队明确车载 AI 硬件的感知与反馈链路。",
        details: [
          "从传感器响应、VUI 语音交互、实体动作反馈、情绪表达、人机互动节奏等维度建立竞品样本库。",
          "把车内场景拆成“触发条件、AI 感知、语音反馈、实体动作、用户确认”的链路，帮助团队区分桌面陪伴和座舱陪伴的关键差异。",
          "重点观察用户在驾驶疲劳、情绪波动、儿童陪伴和低强度闲聊下对 AI 反馈节奏的容忍度，避免把玩具式互动直接搬进车内。",
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
        title: "AI-Native 工作流",
        items: ["Claude Code", "Codex", "Cursor", "开发简报", "需求拆解", "体验验收", "Handoff 文档"]
      },
      {
        title: "原型与实现",
        items: ["Figma", "Axure", "React", "Vite", "HTML/CSS/JavaScript", "Tailwind"]
      },
      {
        title: "领域积累",
        items: ["工具产品", "创作者工具", "游戏工具产品", "国际化与本地化基础认知"]
      }
    ]
  },
  paradigm: {
    title: "工作范式",
    subtitle: "把 AI Coding 当作结构化协作，而不是一次性代码生成。",
    description:
      "在独立项目里，我用 PRD、开发简报、组件边界、验收标准、Handoff 文档和 Git 仓库管理来约束模型。重点不是让 AI 多写代码，而是让它在正确的上下文里做正确的事。",
    features: [
      {
        title: "上下文边界",
        description: "给模型明确阅读范围和不可修改区域，减少架构误读、样式漂移和反复返工。"
      },
      {
        title: "从 PRD 到上线",
        description: "把需求拆到组件和验收标准，再驱动 Claude Code、Codex、Cursor 进入各自擅长的实现环节。"
      }
    ]
  },
  projects: {
    pianke: {
      tag: "Highlight Project",
      title: "片刻",
      subtitle: "Pianke Editor",
      role: "独立产品项目 · 微信小程序上线",
      period: "2026.03 - 至今",
      description:
        "AI-Native 创作者图片处理工具。它不是泛用修图软件，而是帮助普通用户把照片快速包装成卡片、海报、日记图和分享图的轻量创作路径。",
      logoText: "Pk",
      link: "https://cocacolin123.github.io/taobao-ai-demo/",
      stats: [
        { value: "30MB", label: "小程序包体约束" },
        { value: "6+", label: "预制模板能力" },
        { value: "0", label: "账户依赖" }
      ],
      shots: {
        hero: "/images/pianke/template-picker.png",
        phone: "/images/pianke/ratio-editor.png",
        secondary: "/images/pianke/garden-film-collage.png",
        gallery: [
          { src: "/images/pianke/template-picker.png", alt: "片刻模板选择页", height: 1040 },
          { src: "/images/pianke/ratio-editor.png", alt: "片刻排版比例编辑", height: 1347 },
          { src: "/images/pianke/star-motion.png", alt: "片刻星形动效模板", height: 1347 },
          { src: "/images/pianke/heart-motion.png", alt: "片刻爱心动效模板", height: 1347 },
          { src: "/images/pianke/camera-card.png", alt: "片刻相机参数卡片模板", height: 1040 },
          { src: "/images/pianke/garden-film-collage.png", alt: "片刻花园胶片拼贴模板", height: 1347 }
        ]
      },
      showcase: {
        eyebrow: "Template Layers",
        title: "真实编辑界面的图层展开",
        description:
          "从排版比例、片刻动效、相机参数卡到胶片拼贴，截图对应的是同一条编辑主链路，而不是孤立的模板陈列。"
      },
      features: [
        {
          step: "01 / 重新定位",
          title: "用户缺的不是修图工具，而是轻量发布路径。",
          description:
            "从同学访谈、问卷和社媒内容观察中，把早期摄影作品集方向收敛成 AI 辅助图片模板编辑器，避开与醒图、Canva 在复杂图层能力上的正面竞争。",
          details: [
            "核心判断是普通用户已经有拍照和修图工具，但缺少把照片快速包装成卡片、海报、日记图、分享图的轻量路径。",
            "因此产品不追求无限自由画布，而是用高质量模板约束审美决策，让用户更快得到可以发布的成品。"
          ]
        },
        {
          step: "02 / 通用编辑底座",
          title: "围绕上传、套模板、参数编辑、预览和导出建立主链路。",
          description:
            "图片上传、文字编辑、样式配置、模板预览和导出能力被抽象成可复用底座，用模板配置化支撑时刻卡、海报、创意边框、Paper Mount 等扩展。",
          details: [
            "模板不是一次性页面，而是可配置的编辑单元：图片槽位、文字槽位、颜色、比例、装饰元素和导出参数都尽量沉到数据结构里。",
            "这让单人开发可以持续加模板，而不是每次都重写一套编辑页。"
          ]
        },
        {
          step: "03 / 范围取舍",
          title: "暂缓账户系统和高自由画布，优先保证成品质感。",
          description:
            "在无后端、单人开发和小程序 30MB 包体限制下，MVP 只保留能验证分享价值的能力：模板质量、编辑路径清晰度和导出体验。",
          details: [
            "账户系统、复杂素材库和高自由度画布都被推迟，因为它们会吞掉小程序包体和开发时间，却不直接证明用户是否愿意分享成品。",
            "优先级排序很明确：先证明成品好看、编辑顺手、导出稳定，再讨论更重的社区和资产体系。"
          ]
        }
      ]
    },
    diary: {
      title: "日记库",
      subtitle: "Diary Vault",
      role: "本地私人档案工具",
      description:
        "一个把私人日记当作编辑档案来对待的本地工具。不是云笔记，不是博客后台，不是 AI 写作助手。",
      shots: {
        cover: "/images/diary/cover.png",
        timeline: "/images/diary/timeline.png"
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
            "日记存为本地 Markdown，按年/月归档。即使软件消失，日记依然是一组可读的 .md 文件。"
        },
        {
          title: "111 篇日记驱动分类",
          description:
            "不是拍脑袋分类。标注全部真实日记后得到 5 维度 × 12 标签，宁缺毋滥，16 篇没有情绪标签，45 篇没有场所标签。"
        },
        {
          title: "杂志编辑式时间轴",
          description:
            "列表不是表格或卡片墙，而是一条竖向时间轴。短引用、长导语、宽卡和首篇样式由字数和 index % 5 节奏分配。"
        },
        {
          title: "Welcome 页是仪式",
          description:
            "打开时先看到今天的日期和问候语，而不是统计仪表盘。背景色温随一天时间变化，12 月 31 日和 6 月 4 日的打开感受不同。"
        },
        {
          title: "明确说不是",
          description:
            "不是通用暗色仪表盘、玻璃拟态、协作文档、博客 CMS 或 Word 克隆。每一个不做，都是一次防止 scope creep 的决策。"
        }
      ]
    },
    photo: {
      title: "摄影集",
      subtitle: "Colin's Photography",
      role: "个人摄影世界",
      description:
        "一个把照片当作被观看的对象，而非被浏览的列表的个人摄影世界。",
      quote: "The site should feel like a night walk through a personal archive.",
      shots: {
        landing: "/images/photo/landing.png",
        album: "/images/photo/album.png",
        about: "/images/photo/about.png",
        journal: "/images/photo/journal.png",
        kingdom: "/images/photo/kingdom.png"
      },
      focusNote: "按 Esc 退回黑暗，按方向键盲选光影。照片在这个环境里是唯一的光源。",
      pages: [
        { label: "Landing", text: "封面时刻，建立情绪" },
        { label: "Works", text: "策展式章节，图片优先" },
        { label: "Album", text: "左上下文，右摄影作品" },
        { label: "Lightbox", text: "键盘、Escape 和 swipe 手势" },
        { label: "Journal", text: "带日期的个人写作" }
      ],
      features: [
        {
          title: "摄影是主角，UI 是配角",
          description:
            "UI effects must support image viewing rather than compete with it。任何让用户注意到 UI 而非照片的设计都是错的。"
        },
        {
          title: "暗色是观看室，不是装饰",
          description:
            "黑不是纯黑，而是带冷调暗房色偏。暗是为了看见照片细节，不是为了显得很酷。"
        },
        {
          title: "品牌声音控制",
          description:
            "文案安静、观察性、亲密，禁止营销话术、数据指标和过长解释。"
        },
        {
          title: "反参考比参考更重要",
          description:
            "不是模板卡片网格，不以器材为中心，不做博客优先布局，About 页不写成简历，Journal 不加评论和泛滥标签。"
        },
        {
          title: "五页结构各司其职",
          description:
            "Landing、Works、Album、Lightbox、Journal 五页分别承担情绪、策展、上下文、沉浸观看和私人写作。"
        }
      ]
    }
  },
  footer: {
    quoteTitle: "我想做的不是更多页面，而是更顺手的工具。",
    quote:
      "工具不该只是功能集合。好的工具会让用户忘掉界面本身，只感觉自己的想法更快落到了现实里。",
    links: [
      { label: "Email", href: "mailto:l15225585490@163.com" },
      { label: "Resume PDF", href: "/liu-peilong-resume.pdf" },
      { label: "Pianke Demo", href: "https://cocacolin123.github.io/taobao-ai-demo/" }
    ],
    copyright: "Designed & Built by Colin L. © 2026",
    tagline: "AI Product Manager · Creative Technologist"
  }
} as const;
