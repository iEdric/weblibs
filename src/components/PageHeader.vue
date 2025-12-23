<script setup lang="ts"></script>

<template>
  <header class="page-header">
    <div class="logo-mark">
      <img src="/src/assets/vue.svg" alt="LIBS Logo" class="libs-logo" />
    </div>
    <div class="title-block">
      <h1 class="site-title">LIBS WebLibs</h1>
      <p class="site-subtitle">
        网罗 LIBS / 光谱分析 相关的工具、数据库与社区，做一个真正好用的入口。
      </p>
    </div>
    <nav class="top-nav">
      <a href="#papers">文献</a>
      <a href="#db">数据库</a>
      <a href="#community">社区</a>
      <a href="#career">工作 / 留学</a>
    </nav>
  </header>
</template>

<style scoped>
.page-header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1.5rem;
}

.logo-mark {
  display: flex;
  align-items: center;
  justify-content: center;
}

.libs-logo {
  width: 48px;
  height: 48px;
  filter: drop-shadow(0 2px 8px rgba(59, 130, 246, 0.3));
  transition: transform 0.2s ease;
}

.libs-logo:hover {
  transform: scale(1.05);
}

.title-block {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.site-title {
  font-size: 1.5rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #f8fafc;
  font-weight: 600;
}

.site-subtitle {
  font-size: 0.9rem;
  color: #cbd5e1;
  max-width: 36rem;
}

.top-nav {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.9rem;
}

.top-nav a {
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  background-color: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(148, 163, 184, 0.35);
  color: #e5e7eb;
  backdrop-filter: blur(8px);
  transition: all 160ms ease-out;
}

.top-nav a:hover {
  border-color: #4f46e5;
  color: #f9fafb;
  transform: translateY(-1px);
}

@media (max-width: 900px) {
  .page-header {
    grid-template-columns: 1fr;
    align-items: flex-start;
  }

  .top-nav {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}
</style>


