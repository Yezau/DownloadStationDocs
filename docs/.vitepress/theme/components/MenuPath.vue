<script setup lang="ts">
// Renders a UI navigation path, e.g. path="设置 / 应用 / 已安装的应用"
const props = defineProps<{ path: string }>()
const items = props.path.split('/').map((s) => s.trim()).filter(Boolean)
</script>

<template>
  <span class="menu-path">
    <template v-for="(item, i) in items" :key="i">
      <span class="item">{{ item }}</span>
      <svg v-if="i < items.length - 1" viewBox="0 0 6 10" aria-hidden="true"><path d="M1 1l4 4-4 4" /></svg>
    </template>
  </span>
</template>

<style scoped>
.menu-path {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 6px;
  vertical-align: middle;
}

.item {
  padding: 1px 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 5px;
  background: var(--vp-c-bg-soft);
  font-size: 0.9em;
  line-height: 1.6;
  white-space: nowrap;
}

svg {
  width: 6px;
  height: 10px;
  fill: none;
  stroke: var(--vp-c-text-3);
  stroke-width: 1.4;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
