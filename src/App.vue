<script setup lang="ts">
import AnimatedBackground from './components/AnimatedBackground.vue'
import PageHeader from './components/PageHeader.vue'
import HeroSection from './components/HeroSection.vue'
import LinkSections from './components/LinkSections.vue'
</script>

<template>
  <div class="page">
    <AnimatedBackground />
    <div class="page-inner">
      <PageHeader />
      <main class="page-main">
        <HeroSection />
        <LinkSections />
      </main>
      <footer class="page-footer">
        <p>本页仅作为 LIBS / 光谱分析相关资源的个人导航汇总，所有外部站点版权归原网站所有。</p>
        <p class="footer-meta">For LIBS researchers, students & engineers.</p>
      </footer>
    </div>
  </div>
  </template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  position: relative;
}

.page-inner {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.page-main {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.page-footer {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(30, 64, 175, 0.6);
  font-size: 0.8rem;
  color: #6b7280;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.footer-meta {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: #4b5563;
}
</style>
