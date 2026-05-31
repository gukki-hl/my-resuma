# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 Next.js 16.2.3 和 TypeScript 的简历管理应用 (my-resuma)。项目使用 shadcn/ui 组件库，集成了 HeroUI 主题系统，并实现了亮色/暗色主题切换功能。

## 开发命令

- `npm run dev` - 启动开发服务器（端口 4000）
- `npm run build` - 构建生产版本
- `npm run start` - 启动生产服务器（端口 4000）
- `npm run lint` - 运行 ESLint 检查

## 项目架构

### 目录结构
- `app/` - Next.js App Router 目录，包含页面和布局
- `app/components/` - 自定义 React 组件
  - `ui/` - shadcn/ui 组件的封装和扩展
  - `home/` - 首页相关组件
- `lib/` - 工具函数和辅助模块

### 核心组件
- `Providers.tsx` - 应用提供者，使用 HeroUIProvider 包装整个应用
- `ThemeToggle.tsx` - 主题切换组件
- `LanguageSwitch.tsx` - 语言切换组件
- `ResumeWorkbench.tsx` - 简历工作台组件（包含动画效果）

### 样式系统
- 使用 Tailwind CSS 4 进行样式开发
- 通过 CSS 变量实现主题管理（在 globals.css 中定义）
- 使用 shadcn/ui 的 className 合并工具 (cn 函数)
- HeroUI 主题系统与 Tailwind 存在潜在的样式冲突（注意检查样式覆盖问题）

### 主题管理
- 支持 亮色/暗色/系统 三种主题模式
- 使用 next-themes 库管理主题状态
- CSS 变量定义在 globals.css 中，包括：
  - `--primary`, `--primary-foreground`
  - `--secondary`, `--secondary-foreground`
  - `--accent`, `--accent-foreground`
  - `--destructive`, `--destructive-foreground`

### 动画系统
- 使用 Framer Motion 进行组件动画
- 客户端组件需要添加 "use client" 指令

### 注意事项
1. HeroUI 主题可能与 Tailwind CSS 存在样式冲突，特别是在按钮颜色方面
2. 客户端组件需要明确标记 "use client"
3. 使用 shadcn/ui 组件时，确保正确导入和使用 className 工具函数
4. CSS 变量格式：使用 `bg-[var(--primary)]` 而不是 `bg-primary` 来避免 HeroUI 覆盖

## 技术栈
- Next.js 16.2.3
- React 19.2.4
- TypeScript
- Tailwind CSS 4
- shadcn/ui
- HeroUI
- Framer Motion
- Radix UI
- next-themes

## 常见问题解决

### 样式冲突
如果遇到样式问题（特别是按钮颜色），检查：
1. globals.css 中的 CSS 变量定义
2. tailwind.config.ts 中是否移除了 HeroUI 插件
3. 组件中使用 CSS 变量格式（如 `bg-[var(--primary)]`）

### 构建错误
- 检查 TypeScript 类型错误
- 确保所有依赖正确安装
- 验证 "use client" 指令在客户端组件中正确使用

### 主题问题
- 确保 ThemeToggle 组件正常工作
- 检查 CSS 变量在亮色/暗色模式下的正确性
- 验证 next-themes 的配置

## Git 提交规范

遵循 Conventional Commits 规范：
- `feat`: 新增功能
- `fix`: 修复 bug
- `refactor`: 重构（不改变功能）
- `style`: 样式/格式调整
- `perf`: 性能优化
- `test`: 添加或修改测试
- `docs`: 文档修改
- `chore`: 构建工具、依赖更新等杂项

Subject 必须使用中文，例如：`feat(简历): 新增作品集卡片组件`

## Skills 触发规则

当我说以下任意内容时，读取 `.claude/skills/git-commit-review/SKILL.md` 并按其中流程执行：

- "帮我看看这次改动"
- "我要提交代码了"
- "帮我写 commit message"
- "代码审查"
- "检查我的改动"
- "git commit"
- "我改完了"
- "要提交了"


Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
