<template>
  <UCard variant="subtle">
    <template #header>
      <UUser
        name="Кирилл Тельтевской"
        description="Junior Fullstack Developer"
        :avatar="{
          src: 'avatar.jpg',
          loading: 'lazy',
          icon: 'i-lucide-image',
        }"
        size="3xl"
      />
    </template>

    <div class="flex flex-col gap-4">
      <p v-for="about in abouts">{{ about }}</p>
    </div>

    <template #footer>
      <div class="flex flex-col gap-4">
        <UUser v-for="skill in skills" :name="skill.title" :description="skill.body" />
      </div>
    </template>
  </UCard>

  <ULink to="/projects" as="button">Перейти к проектам</ULink>

  <USeparator icon="lucide:circle" class="my-4" />
</template>

<script setup lang="ts">
import { type Skill } from '#shared/types/interfaces'

const abouts: string[] = [
  'Начинающий fullstack-разработчик с уклоном во фронтенд.',
  'Основной стек – Vue, Nuxt, Node.js, SQL и NoSQL. Проекты разворачиваю на собственном VPS.',
  'Параллельно администрирую личный VPN-сервер на ShadowSocks.',
  'Хобби – электроника: Arduino, LoRa, пайка, DC-модули.',
  'Нахожусь в г. Великом Устюге. Ищу удаленный формат работы или аутсорсинг.',
]

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
