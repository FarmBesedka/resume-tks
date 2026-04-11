<template>
  <div class="flex flex-col gap-4">
    <UUser v-for="skill in skills" :name="skill.title" :description="skill.body" />
  </div>
</template>

<script lang="ts" setup>
import { type Skill } from '#shared/types/interfaces'

const skills: Skill[] = [
  {
    title: 'Frontend',
    body: 'JavaScript, HTML5, CSS3, SASS, Vue, Nuxt, NuxtUI, Pinia, Vite, PixiJS, TypeScript (начальный)',
  },
  {
    title: 'Backend & Базы данных',
    body: 'Node.js, Express, WebSocket, MySQL, PostgreSQL, SQLite, MongoDB',
  },
  {
    title: 'DevOps, Сети, Инструменты',
    body: 'Git, VPS, ShadowSocks (VPN)',
  },
  {
    title: 'Дизайн',
    body: 'Figma, Pixso, Aseprite, Adobe Photoshop, Illustrator, Premiere, After Effects, InDesign',
  },
  {
    title: 'Embedded & Электроника',
    body: 'Arduino, Wemos, LoRa, DC-модули, пайка',
  },
]
</script>
