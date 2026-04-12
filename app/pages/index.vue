<template>
  <UPage>
    <UPageHeader title="Кирилл Тельтевской" description="Junior Fullstack Developer" />

    <UPageBody>
      <About />
      <USeparator />
      <Skills />
      <USeparator />
      <UButton label="Перейти к проектам" to="/projects" variant="outline" color="neutral" icon="lucide:list" />
    </UPageBody>
  </UPage>
</template>

<script setup lang="ts">
import type { PageLink } from '@nuxt/ui'

const links: PageLink[] = [
  {
    label: 'Перейти к проектам',
    icon: 'lucide:list',
    to: '/projects',
  },
]
</script>
