<template>
  <div class="flex flex-col gap-4">
    <p v-for="about in abouts">{{ about }}</p>
  </div>
</template>

<script lang="ts" setup>
const abouts: string[] = [
  'Начинающий fullstack-разработчик с уклоном во фронтенд.',
  'Основной стек – Vue, Nuxt, Node.js, SQL и NoSQL. Проекты разворачиваю на собственном VPS.',
  'Параллельно администрирую личный VPN-сервер на ShadowSocks.',
  'Хобби – электроника: Arduino, LoRa, пайка, DC-модули.',
  'Нахожусь в г. Великом Устюге. Ищу удаленный формат работы или аутсорсинг.',
]
</script>
