# Handoff to Codex / AI Assistant Manual

本手册旨在指导任何 AI 编程助手（特别如 Codex, Cursor, Claude Code）在后续接手此代码仓库时，能够遵循已建立的项目架构、视觉规范和数据管理流。

## 1. 架构原则：数据与视图解耦

本网站为个人作品集，采用了绝对的**数据与视图解耦模式**。
在 `src/components/sections/` 目录下的所有 React 组件中：

- **绝不允许有硬编码（Hardcoded）的中文文本、特定链接或图片 URL**。
- 所有的数据内容（包括文案、标题、特性列表、图片来源）统一由 `src/data/content.ts` 导出并在组件中消费。

### 🚨 修改内容的正确方式

如果需要修改页面上的文本、增删项目、替换配图，**不要去碰 `src/components` 下的代码**。
请直接编辑 `src/data/content.ts`：

```typescript
// src/data/content.ts 的层级结构
export const portfolioData = {
  hero: { ... },      // 首屏相关
  resume: { ... },    // 履历相关
  paradigm: { ... },  // 工作范式
  projects: {
    pianke: { ... },  // 项目一：片刻
    diary: { ... },   // 项目二：日记库
    photo: { ... }    // 项目三：摄影集
  },
  footer: { ... }     // 底部版权与链接
}
```

## 2. 组件库结构

所有的定制化视觉区块，已被剥离成独立且可跨项目复用的函数式组件。

- **`src/components/ui/`**：存放高复用度的基础 UI 组件。
  - `FadeUp.tsx`：统管了全站的统一进入视口动效。依赖于 `motion/react`。所有区块或独立卡片的浮现必须用它包裹，保持 `stagger` 间隔的美感。
- **`src/components/sections/`**：存放按业务逻辑划分的大型区块流。
  - `HeroSection.tsx`：首屏介绍与情绪定调
  - `ResumeSection.tsx`：简历与工作范式
  - `PiankeSection.tsx`、`DiarySection.tsx`、`PhotoSection.tsx`：三套独立作品展示页的装配体。

在后续开发中，若需增加新项目展示，请：
1. 在 `content.ts` 内扩展数据。
2. 在 `sections` 新建区块模板。
3. 把新区块组件挂载到 `src/App.tsx` 的长滚动流中，用相应的 `h-32 bg-gradient...` 增加过渡区。

## 3. 视觉规范与 CSS Tokens

本项目采取了高度定调的美术风格指导。使用预定义的 Tailwind 变量，绝不使用默认的 `bg-blue-500` 等强亮色。

请通过 `src/index.css` 内注册的变量和具体的 CSS class 来保持视觉一致性：

- **字体排印体系**：
  - 中文展示与内文衬线：`font-serif-zh` (`Noto Serif SC`)
  - 英文标记/引言装逼体：`font-serif-en` (`Playfair Display`)
- **色彩 Token**：
  - `bg-diary-bg` (`#faf8f2`)
  - `text-diary-accent` (`#c4964c`)
  - `bg-photo-bg` (`#0f0f0f`) / `text-photo-text` (`#d4d4d4`)
  - `bg-pianke-bg` (`#fdfaf3`) / `text-pianke-text` (`#3d3427`)

**严禁** 在后续新增组件中滥用圆角(`rounded-3xl`)或阴影(`shadow-2xl`)，请复刻各子项目所建立的克制边界风格。

## 4. 依赖管理

- 动效强制依赖 `motion/react`。请勿混用 CSS `@keyframes` 进行基础进场动画的管理。
- 样式强绑定 Tailwind CSS。

---
最后的话：
请以 **“克制、精密、高度组件化”** 作为你（AI Code Assistant）修改此仓库的最高行为准则。
