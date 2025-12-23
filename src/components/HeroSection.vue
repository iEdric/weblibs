<script setup lang="ts"></script>

<template>
  <section class="hero">
    <div class="hero-text">
      <p class="hero-kicker">LIBS · Spectroscopy · Knowledge Map</p>
      <h2>把零散链接，变成一张清晰的资源地图。</h2>
      <p class="hero-desc">
        这里聚合了科研工作中最常用的检索入口、光谱数据库、论坛社区与职业信息。
        你可以把它当作浏览器首页，也可以当作 LIBS 项目的起始页面。
      </p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#papers">从文献入口开始</a>
        <a class="btn btn-ghost" href="#db">直接去数据库</a>
      </div>
    </div>
    <div class="hero-panel">
      <div class="hero-gradient" />
      <div class="hero-card">
        <p class="hero-card-label">今日建议</p>
        <p class="hero-card-title">为你的 LIBS 项目，先画一张信息流图。</p>
        <p class="hero-card-desc">
          把「文献 → 实验方案 → 光谱数据库 → 数据处理 → 结果发表」的常用站点连接起来，
          再结合自己的项目做二次整理，你会得到一张专属于团队的「知识路由图」。
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(0, 1.4fr);
  gap: 2rem;
  align-items: stretch;
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.hero-kicker {
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #a5b4fc;
}

.hero-text h2 {
  font-size: 2rem;
  line-height: 1.1;
  color: #f8fafc;
  font-weight: 600;
}

.hero-desc {
  font-size: 0.95rem;
  color: #cbd5e1;
  max-width: 32rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.25rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 160ms ease-out;
}

.btn-primary {
  background: linear-gradient(135deg, #4f46e5, #818cf8);
  color: #f9fafb;
  box-shadow: 0 18px 40px rgba(79, 70, 229, 0.45);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 22px 55px rgba(79, 70, 229, 0.6);
}

.btn-ghost {
  border-color: rgba(148, 163, 184, 0.5);
  background-color: rgba(15, 23, 42, 0.85);
  color: #e5e7eb;
}

.btn-ghost:hover {
  border-color: #4f46e5;
  color: #f9fafb;
}

.hero-panel {
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  background: radial-gradient(circle at 0% 0%, #22c55e1a, #020617);
  border: 1px solid rgba(148, 163, 184, 0.3);
}

.hero-gradient {
  position: absolute;
  inset: -40%;
  background:
    radial-gradient(circle at 10% 20%, rgba(56, 189, 248, 0.4), transparent 55%),
    radial-gradient(circle at 80% 0%, rgba(79, 70, 229, 0.7), transparent 50%),
    radial-gradient(circle at 0% 100%, rgba(34, 197, 94, 0.5), transparent 50%);
  opacity: 0.85;
  filter: blur(12px);
}

.hero-card {
  position: relative;
  padding: 1.6rem 1.5rem 1.5rem;
  color: #e5e7eb;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  backdrop-filter: blur(18px);
}

.hero-card-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #c7d2fe;
}

.hero-card-title {
  font-size: 1.1rem;
  font-weight: 600;
}

.hero-card-desc {
  font-size: 0.9rem;
  color: #f1f5f9;
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 640px) {
  .hero-text h2 {
    font-size: 1.5rem;
  }
}
</style>


