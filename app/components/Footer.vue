<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  {
    label: '+7(953)507-42-90',
    to: 'tel:+79535074290',
    icon: 'lucide:smartphone',
    target: '_blank',
  },
  {
    label: 'sgh6@rambler.ru',
    to: 'mailto:sgh6@rambler.ru',
    icon: 'lucide:mail',
    target: '_blank',
  },
  {
    label: 'Telegram',
    to: 'https://t.me/@Firstname79',
    icon: 'mingcute:telegram-line',
    target: '_blank',
  },
  {
    label: 'GitHub',
    to: 'https://github.com/FarmBesedka',
    icon: 'lucide:github',
    target: '_blank',
  },
]
</script>

<template>
  <USeparator />
  <UFooter>
    <template #left>
      <UNavigationMenu :items="items" orientation="vertical" />
    </template>

    <template #right>
      <p class="text-muted text-sm">© Кирилл Тельтевской {{ new Date().getFullYear() }} г.</p>
    </template>
  </UFooter>
</template>
