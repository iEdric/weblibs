<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)

let frameId: number | null = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const resize = () => {
    const dpr = window.devicePixelRatio || 1
    const { innerWidth, innerHeight } = window
    canvas.width = innerWidth * dpr
    canvas.height = innerHeight * dpr
    canvas.style.width = `${innerWidth}px`
    canvas.style.height = `${innerHeight}px`
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }

  resize()
  window.addEventListener('resize', resize)

  const count = 15000
  const x = new Float32Array(count)
  const y = new Float32Array(count)
  const k = new Float32Array(count)
  const e = new Float32Array(count)
  const o = new Float32Array(count)

  for (let i = 0; i < count; i++) {
    x[i] = i % 100
    y[i] = Math.floor(i / 100)
    const xi = x[i]!
    const yi = y[i]!
    k[i] = xi / 4 - 12.5
    e[i] = yi / 9 + 5
    const kk = k[i]!
    const ee = e[i]!
    o[i] = Math.sqrt(kk * kk + ee * ee) / 9
  }

  let t = 0

  const render = () => {
    const { width, height } = canvas
    const w = width / (window.devicePixelRatio || 1)
    const h = height / (window.devicePixelRatio || 1)

    t += Math.PI / 90

    ctx.clearRect(0, 0, w, h)

    // 背景轻微渐变，避免纯黑太生硬
    const grd = ctx.createRadialGradient(w * 0.2, h * 0.1, 0, w * 0.5, h * 0.5, w)
    grd.addColorStop(0, 'rgba(15,23,42,0.95)')
    grd.addColorStop(1, 'rgba(3,7,18,1)')
    ctx.fillStyle = grd
    ctx.fillRect(0, 0, w, h)

    // 添加边缘发光效果
    const glowGradient = ctx.createRadialGradient(w/2, h/2, Math.min(w, h) * 0.3, w/2, h/2, Math.min(w, h) * 0.8)
    glowGradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)')
    glowGradient.addColorStop(0.7, 'rgba(59, 130, 246, 0.05)')
    glowGradient.addColorStop(1, 'rgba(59, 130, 246, 0)')

    ctx.fillStyle = glowGradient
    ctx.fillRect(0, 0, w, h)

    ctx.fillStyle = 'rgba(248,250,252,0.4)'

    for (let i = 0; i < count; i++) {
      const kk = k[i]!
      const ee = e[i]!
      const oo = o[i]!

      const q =
        x[i]! +
        99 +
        Math.tan(1 / (kk || 0.0001)) +
        oo * kk * (Math.cos(ee * 9) / 4 + Math.cos(y[i]! / 2)) * Math.sin(oo * 4 - t)

      const c = (oo * ee) / 30 - t / 8

      const xData = q * 1.6 * Math.sin(c) + 24 * Math.cos(y[i]! / 19 + t) + w / 2
      const yData = h / 2 + (q * 1.2) * Math.cos(c)

      const size = 1.6 + oo * 0.4
      ctx.beginPath()
      ctx.arc(xData, yData, size, 0, Math.PI * 2)
      ctx.fill()
    }

    frameId = window.requestAnimationFrame(render)
  }

  frameId = window.requestAnimationFrame(render)

  onBeforeUnmount(() => {
    if (frameId !== null) {
      cancelAnimationFrame(frameId)
    }
    window.removeEventListener('resize', resize)
  })
})
</script>

<template>
  <canvas ref="canvasRef" class="animated-bg"></canvas>
</template>

<style scoped>
.animated-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.9;
}
</style>


