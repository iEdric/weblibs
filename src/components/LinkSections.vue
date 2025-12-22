<script setup lang="ts">
import { sections, type Link } from '../data/sections'

const groupByTag = (links: Link[]) => {
  const groups: Record<string, Link[]> = {}
  for (const link of links) {
    const key = link.group || '其他资源'
    if (!groups[key]) groups[key] = []
    groups[key].push(link)
  }
  return groups
}
</script>

<template>
  <section class="grid">
    <article
      v-for="section in sections"
      :key="section.id"
      :id="section.id"
      class="grid-section"
    >
      <header class="grid-section-header">
        <div class="grid-tag" :style="{ '--accent-color': section.accent }">
          <span class="tag-dot" />
          <span class="tag-text">{{ section.title }}</span>
        </div>
        <p class="grid-subtitle">{{ section.subtitle }}</p>
      </header>

      <div
        v-for="(groupLinks, groupName) in groupByTag(section.links)"
        :key="groupName"
        class="link-group"
      >
        <h3 class="group-title">
          {{ groupName }}
        </h3>
        <div class="link-grid">
          <a
            v-for="link in groupLinks"
            :key="link.url"
            class="link-card"
            :href="link.url"
            target="_blank"
            rel="noreferrer"
          >
            <div class="link-main">
              <div class="link-name">
                <span class="link-pill">外部站点</span>
                <span>{{ link.name }}</span>
              </div>
              <p v-if="link.desc" class="link-desc">
                {{ link.desc }}
              </p>
            </div>
            <span class="link-arrow">↗</span>
          </a>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>
.grid {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.grid-section {
  border-radius: 1.3rem;
  padding: 1.4rem 1.4rem 1.3rem;
  background-color: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(30, 64, 175, 0.7);
  box-shadow:
    0 18px 40px rgba(15, 23, 42, 0.9),
    0 0 0 1px rgba(15, 23, 42, 0.9);
}

.grid-section-header {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.link-group + .link-group {
  margin-top: 1.2rem;
}

.group-title {
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #9ca3af;
  margin-bottom: 0.45rem;
}

.grid-tag {
  --accent-color: #4f46e5;
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--accent-color) 60%, transparent);
  background: radial-gradient(
    circle at 0 0,
    color-mix(in srgb, var(--accent-color) 18%, transparent),
    transparent 65%
  );
  gap: 0.35rem;
}

.tag-dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background-color: var(--accent-color);
}

.tag-text {
  font-size: 0.8rem;
  color: #e5e7eb;
}

.grid-subtitle {
  font-size: 0.85rem;
  color: #9ca3af;
}

.link-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.9rem;
}

.link-card {
  position: relative;
  padding: 0.95rem 0.95rem 0.9rem;
  border-radius: 1rem;
  border: 1px solid rgba(148, 163, 184, 0.35);
  background: radial-gradient(circle at 0 0, rgba(79, 70, 229, 0.18), rgba(15, 23, 42, 0.95));
  color: #e5e7eb;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.6rem;
  text-align: left;
  transition: all 160ms ease-out;
}

.link-card:hover {
  border-color: #818cf8;
  transform: translateY(-1px);
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.85);
}

.link-main {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.link-name {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
}

.link-pill {
  padding: 0.12rem 0.5rem;
  border-radius: 999px;
  background-color: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.6);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #a5b4fc;
}

.link-desc {
  font-size: 0.8rem;
  color: #9ca3af;
}

.link-arrow {
  font-size: 0.9rem;
  opacity: 0.7;
}

@media (max-width: 640px) {
  .grid-section {
    padding: 1.1rem 1rem 1.05rem;
  }
}
</style>


