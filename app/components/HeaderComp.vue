<template>
  <UHeader :toggle="true">
    <template #left>
      <p class="font-bold text-2xl">РЕЗЮМЕ</p>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Главная',
    to: '/',
  },
  {
    label: 'Проекты',
    to: '/projects',
  },
])
</script>
