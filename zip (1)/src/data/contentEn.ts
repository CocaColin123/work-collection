import type { PortfolioData } from './content';

const BASE = import.meta.env.BASE_URL;

export const portfolioDataEn: PortfolioData = {
  hero: {
    eyebrow: "Personal Digital Portfolio · 2026",
    mainTitle: "From product questions",
    mainTitleEmphasis: "to usable tools",
    name: "Pei Long Liu",
    role: "Product Manager Intern / AI Products & Tool Products",
    location: "Shanghai · Available immediately · Long-term internship",
    intro:
      "I work across requirement analysis, competitive research, information architecture, PRDs, and AI-assisted front-end prototyping. My focus is turning loose product ideas into clear workflows, usable interfaces, and launchable MVPs.",
    contact: [
      { label: "Email", href: "mailto:l15225585490@163.com" },
      { label: "Resume PDF", href: `${BASE}liu-peilong-resume-en.pdf` },
      { label: "中文", href: "#/zh" }
    ],
    facts: [
      { value: "13%", label: "Lift in first-time registered purchase rate" },
      { value: "200+", label: "AI companion interaction cases reviewed" },
      { value: "6+", label: "Pianke template capabilities shipped" }
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
          "Worked on the desktop store optimization for a FLiNG-related product line. The redesign focused on low first-time purchase rate, organic purchase rate, and returning-user purchase rate by rebuilding membership value presentation, product ranking, and first-screen conversion paths.",
        details: [
          "Analyzed game tools, membership systems, and tool-based stores, comparing information architecture, paid entry points, benefit presentation, ranking logic, and conversion paths.",
          "Produced redesign prototypes with Axure, Figma, and MockingBot around a clear target: lower understanding cost, stronger payment reasons, and higher visual impact.",
          "Maintained an optimization requirement pool and split information architecture, membership benefits, store ranking, visual hierarchy, and localization preparation into a two-stage roadmap.",
          "Presented competitive research, redesign demos, and iteration plans in team meetings. The proposal was recognized by supervisors and the CEO, then entered the follow-up roadmap.",
          "After implementation, store conversion improved within one month: returning-user repurchase rate +1.7%, organic purchase rate +4.9%, and first-time registered purchase rate +13%."
        ]
      },
      {
        company: "Haohan Tonghui Intelligent Technology",
        companyTag: "Early-stage smart cockpit AI hardware team",
        role: "AI Product Manager Intern",
        period: "2025.06 - 2025.11",
        summary:
          "Participated in an AI companion toy project for smart cockpit scenarios, exploring how emotional companionship can move from desktop AI devices into the in-car environment.",
        details: [
          "Analyzed 13 desktop companion robots and AI toy products across sensor response, VUI interaction, physical motion feedback, emotional expression, and interaction rhythm.",
          "Organized 200+ interaction cases for product testing and functional discussions, helping the team compare embodied feedback patterns across products.",
          "Mapped basic flows for driving emotion relief, child companionship, and in-car conversation, including trigger condition, AI perception, voice feedback, physical action, and user confirmation.",
          "Built a practical understanding of AI hardware, multimodal interaction, embodied interaction, and emotional companionship products in smart cockpit scenarios."
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
        title: "AI-Native Workflow",
        items: ["Claude Code", "Codex", "Cursor", "AI-assisted Prototyping", "Development Briefs", "Requirement Breakdown", "Experience Acceptance"]
      },
      {
        title: "Prototyping & Implementation",
        items: ["Figma", "Axure", "React", "Vite", "HTML/CSS/JavaScript", "Tailwind"]
      },
      {
        title: "Domain Exposure",
        items: ["Tool Products", "Creator Tools", "Game Tool Products", "Internationalization", "Localization Basics"]
      }
    ]
  },
  paradigm: {
    title: "AI-Native Working Method",
    subtitle: "I treat AI coding as structured collaboration, not one-shot code generation.",
    description:
      "In independent projects, I use PRDs, development briefs, component boundaries, acceptance criteria, handoff documents, and Git repository management to guide models. The point is not asking AI to write more code. The point is putting it in the right context to make the right decisions.",
    features: [
      {
        title: "Context Boundaries",
        description: "Define what the model should read and what it must not change, reducing architecture drift, visual inconsistency, and repeated rework."
      },
      {
        title: "From PRD to Release",
        description: "Break requirements into components and acceptance criteria, then guide Claude Code, Codex, and Cursor through implementation, review, and iteration."
      }
    ]
  },
  projects: {
    pianke: {
      tag: "Highlight Project",
      title: "Pianke",
      subtitle: "AI-Native Creator Image Processing Tool",
      role: "Independent Product Project · WeChat Mini Program Launched",
      period: "2026.03 - Present",
      description:
        "Pianke helps ordinary users quickly turn photos into cards, posters, diary images, and shareable visual content. It is not a general photo editor. It is a lightweight creation path built around high-quality templates, direct editing, and fast export.",
      logoText: "Pk",
      link: "https://cocacolin123.github.io/taobao-ai-demo/",
      stats: [
        { value: "30MB", label: "Mini Program package constraint" },
        { value: "6+", label: "Template capabilities" },
        { value: "0", label: "Account dependency" }
      ],
      shots: {
        hero: `${BASE}images/pianke/template-picker.png`,
        phone: `${BASE}images/pianke/ratio-editor.png`,
        secondary: `${BASE}images/pianke/garden-film-collage.png`,
        gallery: [
          { src: `${BASE}images/pianke/template-picker.png`, alt: "Pianke template picker", height: 1040 },
          { src: `${BASE}images/pianke/ratio-editor.png`, alt: "Pianke ratio editor", height: 1347 },
          { src: `${BASE}images/pianke/star-motion.png`, alt: "Pianke star motion template", height: 1347 },
          { src: `${BASE}images/pianke/heart-motion.png`, alt: "Pianke heart motion template", height: 1347 },
          { src: `${BASE}images/pianke/camera-card.png`, alt: "Pianke camera parameter card", height: 1040 },
          { src: `${BASE}images/pianke/garden-film-collage.png`, alt: "Pianke garden film collage template", height: 1347 }
        ]
      },
      showcase: {
        eyebrow: "Template Layers",
        title: "A real editor unfolded into product evidence",
        description:
          "The screenshots come from one editing chain: ratio control, motion templates, camera cards, and film collage layouts. They show the product surface, not a disconnected template catalog."
      },
      features: [
        {
          step: "01 / Repositioning",
          title: "Users do not lack photo editors. They lack a lightweight publishing path.",
          description:
            "Based on student interviews, questionnaires, and social media content observation, Pianke moved from an early photography portfolio direction into an AI-assisted image template editor.",
          details: [
            "The core insight was that ordinary users already have tools for taking and retouching photos, but still need a faster way to package images into publishable visual outputs.",
            "Instead of competing with Xingtu or Canva on high-freedom canvas editing, Pianke uses high-quality templates to reduce aesthetic decisions and accelerate publishing."
          ]
        },
        {
          step: "02 / Reusable Editing Base",
          title: "The main workflow is upload, choose template, edit, preview, export.",
          description:
            "Image upload, text editing, style configuration, template preview, and export were abstracted into reusable capabilities, supporting moment cards, posters, creative borders, and Paper Mount layouts.",
          details: [
            "Templates are configurable editing units rather than one-off pages: image slots, text slots, colors, ratios, decorations, and export parameters are pushed into data structures.",
            "This makes solo iteration realistic. New templates can be added without rebuilding the entire editor each time."
          ]
        },
        {
          step: "03 / MVP Scoping",
          title: "Postpone accounts and free canvas editing. Prioritize output quality.",
          description:
            "Under no-backend, solo-development, and WeChat Mini Program constraints, the MVP only keeps the capabilities needed to validate sharing value: template quality, clear editing paths, and export experience.",
          details: [
            "Account systems, complex asset libraries, and high-freedom canvas editing were intentionally postponed because they consume package size and development time before proving user demand.",
            "The priority is clear: first prove the output looks good, the editing flow feels smooth, and export is stable. Heavier community and asset systems can come later."
          ]
        }
      ]
    },
    diary: {
      title: "Diary Vault",
      subtitle: "Local Private Archive",
      role: "Local personal archive tool",
      description:
        "A local tool that treats private diaries as editorial archives. It is not cloud notes, not a blog CMS, and not an AI writing assistant.",
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
            "Entries are stored as local Markdown files and archived by year and month. Even if the software disappears, the diary remains readable."
        },
        {
          title: "111 real entries drive classification",
          description:
            "The taxonomy was not invented from scratch. It came from annotating real diary entries into 5 dimensions and 12 tags, with empty labels preserved when evidence was insufficient."
        },
        {
          title: "Magazine-style timeline",
          description:
            "The list is not a table or card wall. It is a vertical timeline where short quotes, long leads, wide cards, and first-entry styling create reading rhythm."
        },
        {
          title: "The welcome page is a ritual",
          description:
            "The first screen shows today's date and a greeting instead of a dashboard. Background color temperature changes with time, so different days feel different."
        },
        {
          title: "Clear anti-scope",
          description:
            "It is not a generic dark dashboard, glassmorphism shell, collaborative document, blog CMS, or Word clone. Each no protects the product from scope creep."
        }
      ]
    },
    photo: {
      title: "Colin's Photography",
      subtitle: "Personal Photo World",
      role: "Personal photography archive",
      description:
        "A photography world that treats photos as objects to be looked at, not a list to be browsed.",
      quote: "The site should feel like a night walk through a personal archive.",
      shots: {
        landing: `${BASE}images/photo/landing.png`,
        album: `${BASE}images/photo/album.png`,
        about: `${BASE}images/photo/about.png`,
        journal: `${BASE}images/photo/journal.png`,
        kingdom: `${BASE}images/photo/kingdom.png`
      },
      focusNote: "Press Esc to return to darkness. Use arrow keys to move through light. In this environment, the photograph is the only light source.",
      pages: [
        { label: "Landing", text: "A cover moment that sets the mood" },
        { label: "Works", text: "Curated chapters with images first" },
        { label: "Album", text: "Context on the left, photographs on the right" },
        { label: "Lightbox", text: "Keyboard, Escape, and swipe gestures" },
        { label: "Journal", text: "Personal writing with dates" }
      ],
      features: [
        {
          title: "Photography is the lead. UI is support.",
          description:
            "Effects must support image viewing rather than compete with it. Any design that makes users notice the interface before the photo is wrong."
        },
        {
          title: "Darkness is a viewing room",
          description:
            "The dark surface is not pure black decoration. It is a cool-toned room built to make photo details visible."
        },
        {
          title: "Controlled brand voice",
          description:
            "The copy stays quiet, observational, and intimate. No marketing language, metric theater, or over-explaining."
        },
        {
          title: "Anti-reference matters",
          description:
            "Not a template card grid, not gear-first, not blog-first. The About page is not a resume, and the Journal avoids comments and overloaded tags."
        },
        {
          title: "Five pages, five jobs",
          description:
            "Landing, Works, Album, Lightbox, and Journal each handle mood, curation, context, immersive viewing, and personal writing."
        }
      ]
    }
  },
  footer: {
    quoteTitle: "I want fewer loose pages and more usable tools.",
    quote:
      "A tool should not feel like a pile of features. A good tool lets users forget the interface and feel their ideas landing faster in the real world.",
    links: [
      { label: "Email", href: "mailto:l15225585490@163.com" },
      { label: "Resume PDF", href: `${BASE}liu-peilong-resume-en.pdf` },
      { label: "Language Gate", href: "#/" }
    ],
    copyright: "Designed & Built by Colin L. © 2026",
    tagline: "AI Product Manager · Creative Technologist"
  }
};
