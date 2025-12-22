# LIBS WebLibs 🌟

> **LIBS (激光诱导击穿光谱) 科研资源导航平台**

“本项目由阿里云ESA提供加速、计算和保护”
![本地路径](public/esa.png)

一个专为LIBS研究者、学生和工程师打造的综合性资源导航网站，集成了学术文献、数据库、谱线资源、科研工具、社区论坛等全方位科研支持。

## ✨ 项目特色

### 🎯 核心功能
- **📚 文献检索**：Google Scholar、百度学术、CNKI、Semantic Scholar等
- **🗄️ 数据库资源**：NIST谱线库、元素周期表、等离子体数据库等
- **👥 学术社区**：专业论坛、科研团队、学术会议信息
- **🛠️ 科研工具**：数据分析、写作辅助、文献管理工具
- **💼 职业发展**：招聘信息、基金申报、学术会议
- **🔍 专利检索**：国内外专利数据库查询
- **⚗️ 耗材标样**：标准物质、国家标物资源

### 🎨 用户体验
- **现代化设计**：响应式布局，适配各种设备
- **动态背景**：粒子动画背景，科技感十足
- **智能分组**：按功能分类，便于快速查找
- **一键跳转**：外部链接直接在新标签页打开

## 🛠️ 技术栈

- **前端框架**: Vue 3 + TypeScript
- **构建工具**: Vite
- **样式**: CSS Modules + 响应式设计
- **动画**: HTML5 Canvas + Web Animations API
- **包管理**: npm

## 🚀 快速开始

### 环境要求
- Node.js 16+
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览构建结果
```bash
npm run preview
```

## 📁 项目结构

```
src/
├── assets/           # 静态资源
│   ├── libs-logo.svg # LIBS logo
│   └── vue.svg       # Vue logo
├── components/       # Vue 组件
│   ├── AnimatedBackground.vue  # 动态粒子背景
│   ├── HeroSection.vue         # 首页英雄区域
│   ├── LinkSections.vue        # 链接资源区域
│   └── PageHeader.vue          # 页面头部
├── data/             # 数据文件
│   └── sections.ts   # 资源链接数据
├── main.ts          # 应用入口
└── style.css        # 全局样式
```

## 🎨 设计理念

### 视觉设计
- **科技感**: 蓝色渐变主题，粒子动画背景
- **简洁性**: 卡片式布局，清晰的信息层次
- **可访问性**: 良好的对比度，易于阅读

### 交互设计
- **直观导航**: 顶部导航栏快速切换资源分类
- **悬停效果**: 卡片悬停时的微动画反馈
- **外部链接**: 安全的新标签页打开策略

## 📊 数据统计

目前收录资源：
- **总链接数**: 110+
- **资源分类**: 4大类（文献/数据库/社区/工具）
- **子分类**: 15个功能分组
- **覆盖领域**: LIBS全链条科研支持

## 🤝 贡献指南

欢迎为LIBS WebLibs贡献资源！

1. Fork 本项目
2. 创建特性分支: `git checkout -b feature/new-resource`
3. 在 `src/data/sections.ts` 中添加新资源
4. 提交更改: `git commit -m 'Add new resource'`
5. 推送分支: `git push origin feature/new-resource`
6. 创建 Pull Request

### 添加资源格式
```typescript
{
  name: '资源名称',
  url: 'https://example.com',
  desc: '资源描述',
  group: '分组名称'
}
```

## 📄 许可证

本项目仅作为个人导航汇总，所有外部站点版权归原网站所有。

## 🙋‍♂️ 联系我们

- **项目主页**: [GitHub Repository]
- **反馈建议**: 欢迎提交 Issue
- **适用人群**: LIBS研究者、学生、工程师

---

**For LIBS researchers, students & engineers.** 🌟
