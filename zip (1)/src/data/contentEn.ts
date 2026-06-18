import type { PortfolioData } from './content';

const BASE = import.meta.env.BASE_URL;

export const portfolioDataEn: PortfolioData = {
  hero: {
    eyebrow: "Resume-driven Personal Site · 2026",
    mainTitle: "From market signals",
    mainTitleEmphasis: "to usable AI tools",
    name: "Pei Long Liu",
    role: "PM Intern | AI Tools / Internationalization / Growth",
    location: "Shanghai · Available now · 6-month internship",
    intro:
      "I focus on AI tools, creator workflows, international product scenarios, and conversion growth. I work from user research, overseas product research, information architecture, PRDs, and MVP scoping to AI-assisted prototypes that can be reviewed and iterated.",
    contact: [
      { label: "Email", href: "mailto:l15225585490@163.com" },
      { label: "Resume PDF", href: `${BASE}liu-peilong-resume-en.pdf` },
      { label: "中文", href: "#/zh" }
    ],
    facts: [
      { value: "13%", label: "Lift in first-time registered purchase rate" },
      { value: "200+", label: "AI companion interaction cases reviewed" },
      { value: "6+", label: "Pianke template capabilities built" }
    ]
  },
  resume: {
    title: "Experience & Capability",
    eyebrow: "Resume Extract",
    experience: [
      {
        company: "3DMGAME",
        companyTag: "Leading domestic single-player game portal",
        role: "Product Manager Intern",
        period: "2025.12 - 2026.05",
        summary:
          "Worked on desktop store optimization for a FLiNG-related product line, with additional research into overseas game-tool users and Southeast Asian market adaptation. The redesign focused on clearer value communication, lower understanding cost, stronger trust signals, and shorter purchase paths.",
        details: [
          "Observed public content from Steam communities, Reddit, YouTube comments, and overseas player discussions to understand concerns around game tools, subscriptions, one-time payment, discounts, and feature clarity.",
          "Analyzed overseas game tools, subscription products, digital-content stores, and membership services, focusing on first-screen hierarchy, value explanation, pricing anchors, trust signals, payment entry points, and user-review placement.",
          "Produced redesign prototypes and PRDs with Axure, Figma, and MockingBot, splitting membership benefits, product ordering, core entries, price display, and multilingual copy structure into concrete requirements.",
          "Presented competitive research, redesign demos, and iteration plans to UI/UX and engineering teams. The proposal was recognized by supervisors and the CEO, then entered the follow-up roadmap.",
          "After implementation, store conversion improved within one month: returning-user repurchase rate +1.7%, organic purchase rate +4.9%, and first-time registered purchase rate +13%."
        ]
      },
      {
        company: "Haohan Tonghui Intelligent Technology",
        companyTag: "Early-stage smart cockpit AI hardware team",
        role: "AI Product Manager Intern",
        period: "2025.06 - 2025.11",
        summary:
          "Participated in early research for an AI companion toy in smart cockpit scenarios, studying how desktop AI companionship changes when moved into an in-car environment.",
        details: [
          "Analyzed 13 desktop companion robots and AI toy products across sensor response, VUI interaction, physical feedback, emotional expression, and interaction rhythm.",
          "Organized 200+ interaction cases to support product testing and discussions around embodied feedback patterns.",
          "Mapped basic flows for driving emotion relief, child companionship, and in-car conversation, including trigger condition, AI perception, voice feedback, physical action, and user confirmation.",
          "Built a practical understanding of AI hardware, multimodal interaction, embodied interaction, and emotional companionship products."
        ]
      }
    ],
    education: {
      school: "Shanghai Institute of Technology",
      major: "Bachelor's Degree in Labor and Social Security",
      period: "2024.09 - Present",
      summary:
        "GPA 4.3/5, top 5% in major. 2024 university-level academic scholarship. CET-4 passed, with strong spoken English and fluent reading ability for English technical documents."
    },
    skillGroups: [
      {
        title: "Product Design",
        items: ["Requirement Analysis", "Competitive Research", "User Journey Design", "Information Architecture", "PRD", "MVP Design", "Version Planning"]
      },
      {
        title: "International Product",
        items: ["Overseas Research", "Localization-aware UX", "GTM Basics", "Multi-market Adaptation", "User Feedback Analysis"]
      },
      {
        title: "Growth & Data",
        items: ["Conversion Funnel", "User Behavior Analysis", "A/B Testing", "Monetization Optimization", "Excel", "Basic SQL"]
      },
      {
        title: "AI-Native Workflow",
        items: ["Claude Code", "Codex", "Cursor", "AI-assisted Prototyping", "Development Briefs", "Requirement Breakdown", "Experience Acceptance"]
      },
      {
        title: "Prototyping & Implementation",
        items: ["Figma", "Axure", "React", "Vite", "HTML/CSS/JavaScript", "Tailwind"]
      },
      {
        title: "Domain Exposure",
        items: ["AI Tools", "Creator Tools", "Game Tool Products", "Internationalization", "Localization"]
      }
    ]
  },
  paradigm: {
    title: "AI-Native Product Execution",
    subtitle: "I use AI coding as a structured product workflow, not a one-shot prompt.",
    description:
      "In independent projects, I use PRDs, development briefs, component boundaries, acceptance criteria, handoff documents, and Git repository management to guide models from product definition to front-end validation.",
    features: [
      {
        title: "Context Boundaries",
        description: "Define what the model should read, what it can change, and what must stay fixed, reducing architecture drift and repeated rework."
      },
      {
        title: "From PRD to Review",
        description: "Break requirements into screens, components, and acceptance criteria, then guide Claude Code, Codex, and Cursor through implementation and UX iteration."
      }
    ]
  },
  projects: {
    pianke: {
      tag: "Highlight Project",
      title: "Pianke",
      subtitle: "AI-Native Creator Image Tool",
      role: "Independent Product Project · WeChat Mini Program Launched",
      period: "2026.03 - Present",
      description:
        "A lightweight image-template editor for ordinary users and casual creators. The product shifted from an early photography site direction into high-quality visual templates, lightweight editing, and fast export for shareable content.",
      logoText: "Pk",
      link: "https://cocacolin123.github.io/taobao-ai-demo/",
      stats: [
        { value: "01", label: "Personal site to template editor" },
        { value: "02", label: "Upload, choose, edit, preview, export" },
        { value: "03", label: "Quality and export first" }
      ],
      shots: {
        hero: `${BASE}images/pianke/modules/home-template-selector.png`,
        phone: `${BASE}images/pianke/modules/home-template-selector.png`,
        secondary: `${BASE}images/pianke/modules/creative-border-camera-output.png`,
        gallery: [
          { src: `${BASE}images/pianke/modules/home-template-selector.png`, alt: "Pianke home template selector", height: 1040 },
          { src: `${BASE}images/pianke/template-picker.png`, alt: "Pianke template selector", height: 1040 },
          { src: `${BASE}images/pianke/camera-card.png`, alt: "Pianke creative border camera card", height: 900 },
          { src: `${BASE}images/pianke/garden-film-collage.png`, alt: "Pianke garden film collage", height: 900 },
          { src: `${BASE}images/pianke/palette-glass.png`, alt: "Pianke eyedropper glass view", height: 820 },
          { src: `${BASE}images/pianke/modules/window-reversal-pulse.gif`, alt: "Pianke window reversal motion template", height: 360 },
          { src: `${BASE}images/pianke/modules/export-result.png`, alt: "Pianke export completion page", height: 1161 }
        ]
      },
      showcase: {
        eyebrow: "Visual Archive",
        title: "Additional samples",
        description:
          "A small selection of reusable assets, kept to show template range after the main story."
      },
      templateBoard: {
        eyebrow: "Pianke Studio",
        title: "From photo to publishable content.",
        description:
          "The samples show how templates reduce decisions, how color comes from the photo, and how short loops extend sharing formats.",
        modules: [
          {
            id: "entry-frame",
            label: "01 / Entry & Creative Border",
            title: "The entry gives users a clear output direction first.",
            description:
              "The template selector reduces first-step decisions. Creative Border combines the photo, device parameters, and scene mood into one shareable output.",
            shots: [
              {
                src: `${BASE}images/pianke/modules/home-template-selector.png`,
                alt: "Pianke home template selector",
                height: 1040,
                caption: "The entry answers what the photo can become.",
                frame: "phone"
              },
              {
                src: `${BASE}images/pianke/modules/creative-border-editor.png`,
                alt: "Pianke creative border template editor",
                height: 1161,
                caption: "Templates, effects, elements, and components stay in one editing path.",
                frame: "phone"
              },
              {
                src: `${BASE}images/pianke/modules/creative-border-camera-output.png`,
                alt: "Pianke creative border camera parameter output",
                height: 792,
                caption: "Device context supports the photo, not the other way around.",
                frame: "wide"
              },
              {
                src: `${BASE}images/pianke/modules/creative-border-dark-output.png`,
                alt: "Pianke creative border place poster output",
                height: 787,
                caption: "Location, device information, and mood form a finished poster.",
                frame: "poster"
              },
              {
                src: `${BASE}images/pianke/camera-card.png`,
                alt: "Pianke creative border camera card",
                height: 900,
                caption: "The camera card keeps brand identity and parameter language.",
                frame: "poster"
              },
              {
                src: `${BASE}images/pianke/template-picker.png`,
                alt: "Pianke template picker",
                height: 1040,
                caption: "Template selection leads into lightweight editing.",
                frame: "phone"
              }
            ],
            points: [
              "Direction first.",
              "Fewer choices."
            ]
          },
          {
            id: "moment-card",
            label: "02 / Moment Card",
            title: "Place, date, and photo become a lightweight memory card.",
            description:
              "Moment Card turns an arrival, walk, or trip into a stable sharing format. Place and date provide context. The photo carries emotion.",
            shots: [
              {
                src: `${BASE}images/pianke/modules/moment-card-park-editor.png`,
                alt: "Pianke Hupao Park moment card editor",
                height: 1154,
                caption: "Material and glow controls shape the atmosphere.",
                frame: "phone"
              },
              {
                src: `${BASE}images/pianke/modules/moment-card-zoo-editor.png`,
                alt: "Pianke Shanghai Zoo moment card editor",
                height: 1154,
                caption: "Deep greens and grain hold the scene mood.",
                frame: "phone"
              },
              {
                src: `${BASE}images/pianke/modules/moment-card-editor.png`,
                alt: "Pianke Longhua Temple moment card editor",
                height: 1161,
                caption: "Date, place, and image stay in a clear hierarchy.",
                frame: "phone"
              },
              {
                src: `${BASE}images/pianke/ratio-editor.png`,
                alt: "Pianke moment card ratio editor",
                height: 900,
                caption: "Ratio controls the split between image and color blocks.",
                frame: "phone"
              },
              {
                src: `${BASE}images/pianke/ratio-editor-dark.png`,
                alt: "Pianke dark moment card ratio editor",
                height: 900,
                caption: "The same structure can carry a different mood.",
                frame: "phone"
              }
            ],
            points: [
              "Clear context.",
              "Stable structure."
            ]
          },
          {
            id: "window-reversal",
            label: "03 / Window Reversal",
            title: "Static templates extend into one-to-two-second loops.",
            description:
              "Window Reversal validates short-motion templates without introducing a heavy timeline editor. Preset motion makes ornaments usable for social sharing.",
            shots: [
              {
                src: `${BASE}images/pianke/star-motion.png`,
                alt: "Pianke window reversal star template",
                height: 900,
                caption: "Star ornaments fit lightweight social content.",
                frame: "poster"
              },
              {
                src: `${BASE}images/pianke/heart-motion.png`,
                alt: "Pianke window reversal heart template",
                height: 900,
                caption: "Heart ornaments add emotional rhythm.",
                frame: "poster"
              },
              {
                src: `${BASE}images/pianke/modules/window-reversal-grow.gif`,
                alt: "Pianke window reversal grow motion",
                height: 227,
                caption: "Preset motion lowers editing cost.",
                frame: "motionWide"
              },
              {
                src: `${BASE}images/pianke/modules/window-reversal-pulse.gif`,
                alt: "Pianke window reversal pulse motion",
                height: 360,
                caption: "Short loops give the output a clear beat.",
                frame: "motionTall"
              }
            ],
            points: [
              "Preset motion.",
              "Direct preview."
            ]
          },
          {
            id: "garden-film",
            label: "04 / Garden Film",
            title: "A photo set becomes one page with a clear viewing order.",
            description:
              "Garden Film organizes related photos into one page, suitable for travel, diary, and observation scenarios where sequence matters.",
            shots: [
              {
                src: `${BASE}images/pianke/garden-film-collage.png`,
                alt: "Pianke garden film collage one",
                height: 900,
                caption: "Multiple photos become one continuous page.",
                frame: "poster"
              },
              {
                src: `${BASE}images/pianke/forest-film-collage.png`,
                alt: "Pianke garden film collage two",
                height: 900,
                caption: "Film borders organize viewing order.",
                frame: "poster"
              },
              {
                src: `${BASE}images/pianke/film-collage.png`,
                alt: "Pianke garden film collage three",
                height: 900,
                caption: "The collage turns a photo set into one work.",
                frame: "poster"
              }
            ],
            points: [
              "One photo set.",
              "One finished work."
            ]
          },
          {
            id: "color-system",
            label: "05 / Eyedropper & Palette",
            title: "Color comes from the photo, lowering styling cost.",
            description:
              "The eyedropper pulls colors from the photo, then applies them to ornaments, borders, masks, and text so the style has a source.",
            shots: [
              {
                src: `${BASE}images/pianke/modules/eyedropper-zoom.png`,
                alt: "Pianke eyedropper zoom interface",
                height: 395,
                caption: "The zoomed picker confirms the color source.",
                frame: "poster"
              },
              {
                src: `${BASE}images/pianke/modules/universal-palette-panel.png`,
                alt: "Pianke universal palette and eyedropper panel",
                height: 1154,
                caption: "The palette unifies template element colors.",
                frame: "phone"
              },
              {
                src: `${BASE}images/pianke/palette-glass.png`,
                alt: "Pianke eyedropper glass view",
                height: 820,
                caption: "Color extraction starts from the photo itself.",
                frame: "poster"
              },
              {
                src: `${BASE}images/pianke/modules/sampled-palette-output.png`,
                alt: "Pianke sampled palette output",
                height: 625,
                caption: "A color set can also become shareable content.",
                frame: "poster"
              }
            ],
            points: [
              "Source-based color.",
              "Unified style."
            ]
          },
          {
            id: "export",
            label: "06 / Export",
            title: "The export page gives the workflow a clear ending.",
            description:
              "Preview, download, save, and return home are gathered on one screen, keeping the MVP focused on a stable finish state.",
            shots: [
              {
                src: `${BASE}images/pianke/modules/export-result.png`,
                alt: "Pianke export completion page",
                height: 1161,
                caption: "The completion page closes the download and save loop.",
                frame: "phone"
              }
            ],
            points: [
              "Clear closure.",
              "Stable path."
            ]
          }
        ]
      },
      features: [
        {
          step: "01 / Output Path",
          title: "Validate whether a photo can become publishable content quickly.",
          description:
            "The core flow is upload, choose template, edit text and style, preview, then export for sharing.",
          details: [
            "Users see the output direction before entering the editor.",
            "Templates reduce aesthetic decisions for ordinary users and casual creators."
          ]
        },
        {
          step: "02 / Memory Format",
          title: "Turn scattered photos into repeatable content formats.",
          description:
            "Moment Card handles one arrival. Garden Film handles a sequence. Both are configurable template units.",
          details: [
            "Image, text, color, ratio, and ornaments all serve the final output.",
            "Template configuration lets new outputs reuse upload, editing, preview, and export capabilities."
          ]
        },
        {
          step: "03 / Color and Motion",
          title: "Scope the MVP around output quality before feature volume.",
          description:
            "Under no-backend, solo-development, and Mini Program constraints, accounts, complex asset libraries, and freeform canvas editing were intentionally postponed.",
          details: [
            "The priority is template quality, clear editing paths, and stable export.",
            "Short-motion templates use presets first, instead of expanding into a full video editor."
          ]
        }
      ]
    },
    diary: {
      title: "Diary Vault",
      subtitle: "Local Private Archive",
      role: "Local personal archive tool",
      description:
        "A local archive tool for private writing, retrieval, and long-term review. It treats diary entries as durable personal records, not disposable notes.",
      live: {
        href: "https://cocacolin123.github.io/Dariy-/",
        label: "Open public demo",
        note: "This is a demo, not the final production product. The public entry uses sample text to show timeline, management, and AI-assisted flows without exposing private diary data."
      },
      shots: {
        cover: `${BASE}images/diary/cover.png`,
        timeline: `${BASE}images/diary/timeline.png`
      },
      stats: [
        { label: "Blue", count: "49 entries", hex: "#60a5fa" },
        { label: "Anxious", count: "32 entries", hex: "#8b2f2f" },
        { label: "Clear", count: "30 entries", hex: "#c4964c" },
        { label: "Unmarked", count: "16 entries", hex: "#b8b0a2" }
      ],
      features: [
        {
          title: "Files as source of truth",
          description:
            "Entries are stored as local Markdown files and archived by year and month. Even if the tool stops being maintained, the writing remains readable."
        },
        {
          title: "111 real entries drive classification",
          description:
            "The taxonomy came from annotating real diary entries into 5 dimensions and 12 tags, with empty labels preserved when evidence was insufficient."
        },
        {
          title: "Magazine-style timeline",
          description:
            "The vertical timeline uses short quotes, long leads, and wide cards to create reading rhythm instead of a generic table or card wall."
        },
        {
          title: "A restrained opening",
          description:
            "The first screen shows date and greeting before statistics, reminding users this is a private archive rather than an operations dashboard."
        },
        {
          title: "Clear product boundaries",
          description:
            "The project avoids collaboration, CMS, and Word-like editing scope, staying focused on local writing, archiving, and review."
        }
      ]
    },
    photo: {
      title: "Colin's Photography",
      subtitle: "Personal Photo World",
      role: "Personal photography archive",
      description:
        "A personal photography site for organizing images, browsing chapters, and viewing photos in an immersive environment.",
      quote: "The site should feel like a night walk through a personal archive.",
      live: {
        href: "https://cocacolin123.github.io/Colin-Photo/",
        label: "Open photography site",
        note: "This is a demo, not the final production product. The public entry shows the viewing path, chapter structure, and immersive browsing experience."
      },
      shots: {
        landing: `${BASE}images/photo/landing.png`,
        album: `${BASE}images/photo/album.png`,
        about: `${BASE}images/photo/about.png`,
        journal: `${BASE}images/photo/journal.png`,
        kingdom: `${BASE}images/photo/kingdom.png`
      },
      focusNote: "Press Esc to return to the page and use arrow keys to move between images. The interaction stays quiet so the photo can lead.",
      pages: [
        { label: "Landing", text: "A cover moment that sets the mood" },
        { label: "Works", text: "Curated chapters with images first" },
        { label: "Album", text: "Context and photographs side by side" },
        { label: "Lightbox", text: "Keyboard, Escape, and swipe gestures" },
        { label: "Journal", text: "Personal writing with dates" }
      ],
      features: [
        {
          title: "Photography is the lead. UI is support.",
          description:
            "Effects and controls support viewing instead of competing with the image."
        },
        {
          title: "Darkness is a viewing room",
          description:
            "The dark surface acts as a cool-toned viewing room, making photo details and contrast more visible."
        },
        {
          title: "Controlled brand voice",
          description:
            "The copy stays quiet, observational, and personal, avoiding marketing language and over-explaining."
        },
        {
          title: "Anti-reference matters",
          description:
            "It is not a gear site or blog list. The structure is built for viewing rather than information dumping."
        },
        {
          title: "Five pages, five jobs",
          description:
            "Landing, Works, Album, Lightbox, and Journal handle mood, curation, context, immersive viewing, and writing."
        }
      ]
    }
  },
  footer: {
    quoteTitle: "I want product judgment to become real experience.",
    quote:
      "This site is not only a portfolio display. It connects my resume, product method, AI-native workflow, and independent projects into something recruiters can actually open and inspect.",
    links: [
      { label: "Email", href: "mailto:l15225585490@163.com" },
      { label: "Resume PDF", href: `${BASE}liu-peilong-resume-en.pdf` },
      { label: "Language Gate", href: "#/" },
      { label: "Game & Mod Product Notes", href: "#/game-mod-notes" }
    ],
    copyright: "Designed & Built by Colin L. © 2026",
    tagline: "AI Tools · International Product · Growth"
  }
};
