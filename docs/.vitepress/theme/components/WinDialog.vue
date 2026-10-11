<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    type?: 'error' | 'warning'
    caption?: string
  }>(),
  { type: 'error', caption: '示意图，实际文字以你电脑上的弹窗为准' }
)
</script>

<template>
  <figure class="win-dialog">
    <div class="window">
      <div class="titlebar">
        <span>{{ title }}</span>
        <svg viewBox="0 0 10 10" aria-hidden="true"><path d="M1 1l8 8M9 1l-8 8" /></svg>
      </div>
      <div class="body">
        <svg v-if="type === 'error'" class="icon" viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="16" r="15" fill="#c42b1c" />
          <path d="M11 11l10 10M21 11L11 21" stroke="#fff" stroke-width="2.2" stroke-linecap="round" />
        </svg>
        <svg v-else class="icon" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 3L30 28H2z" fill="#f7c600" stroke="#f7c600" stroke-width="2" stroke-linejoin="round" />
          <path d="M16 12v8" stroke="#1b1b1b" stroke-width="2.4" stroke-linecap="round" />
          <circle cx="16" cy="24" r="1.5" fill="#1b1b1b" />
        </svg>
        <p><slot /></p>
      </div>
      <div class="footer"><span class="button">确定</span></div>
    </div>
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.win-dialog {
  --w-bg: #ffffff;
  --w-footer: #f3f3f3;
  --w-text: #1b1b1b;
  --w-line: rgba(0, 0, 0, 0.12);
  margin: 24px 0;
}

.dark .win-dialog {
  --w-bg: #2b2b2b;
  --w-footer: #202020;
  --w-text: #ffffff;
  --w-line: rgba(255, 255, 255, 0.1);
}

.window {
  max-width: 440px;
  border: 1px solid var(--w-line);
  border-radius: 8px;
  overflow: hidden;
  background: var(--w-bg);
  color: var(--w-text);
  font-family: 'Segoe UI Variable Text', 'Segoe UI', 'Microsoft YaHei UI', 'Microsoft YaHei', var(--vp-font-family-base);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.titlebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 8px 14px 4px;
  font-size: 12px;
}

.titlebar svg {
  width: 10px;
  height: 10px;
  flex: none;
  stroke: currentColor;
  stroke-width: 1;
  opacity: 0.7;
}

.body {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 18px 22px 24px;
}

.icon {
  width: 32px;
  height: 32px;
  flex: none;
}

.body p {
  margin: 0;
  padding-top: 5px;
  font-size: 14px;
  line-height: 1.6;
  word-break: break-word;
}

.footer {
  display: flex;
  justify-content: flex-end;
  padding: 14px 22px;
  border-top: 1px solid var(--w-line);
  background: var(--w-footer);
}

.button {
  min-width: 88px;
  padding: 4px 16px;
  border: 1px solid var(--w-line);
  border-bottom-color: rgba(0, 0, 0, 0.22);
  border-radius: 4px;
  background: var(--w-bg);
  font-size: 13px;
  text-align: center;
}

figcaption {
  margin-top: 10px;
  font-size: 13px;
  color: var(--vp-c-text-3);
}
</style>
