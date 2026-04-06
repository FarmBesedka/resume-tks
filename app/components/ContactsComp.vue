<template>
  <!-- <UContainer class="mb-5"> -->
    <UFooterColumns :columns="columns" orientation: horizontal />
  <!-- </UContainer> -->
</template>

<script setup lang="ts">
import type { FooterColumn } from '@nuxt/ui'

const columns: FooterColumn[] = [
  {
    label: 'Контакты',
    children: [
      {
        icon: 'lucide:smartphone',
        label: '+7(953)507-42-90',
        to: 'tel:+79535074290',
        target: '_blank',
      },
      {
        icon: 'lucide:mail',
        label: 'sgh6@rambler.ru',
        to: 'mailto:sgh6@rambler.ru',
        target: '_blank',
      },
      {
        icon: 'mingcute:telegram-line',
        label: 'Telegram',
        to: 'https://t.me/@Firstname79',
        target: '_blank',
      },
    ],
  },
]
</script>
