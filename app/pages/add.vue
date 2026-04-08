<template>
  <UForm class="space-y-4" @submit="onSubmit">
    <UInput v-model="projectData.name" class="w-full" placeholder="Название проекта" />
    <UInput v-model="projectData.link" class="w-full" placeholder="Ссылка на проект" />
    <UTextarea v-model="projectData.shortDescription" class="w-full" autoresize placeholder="Краткое описание проекта" />
    <UTextarea v-model="projectData.description" class="w-full" autoresize placeholder="Полное описание проекта" />
    <UButton type="submit" label="Сохранить" />
  </UForm>
</template>

<script lang="ts" setup>
import { type InputData } from '#shared/types/interfaces'
const toast = useToast()

const projectData = ref<InputData>({
  name: 'Резюме',
  link: 'https://github.com/FarmBesedka/resume-tks',
  shortDescription: 'Это резюме - веб-приложение, демонстрирующее навыки fullstack-разработки',
  description: `Резюме-портфолио fullstack-разработчика на Nuxt 4

Это резюме - веб-приложение, демонстрирующее навыки fullstack-разработки. Проект содержит визитку и список проектов, загружаемых из базы данных.

Основной стек:
– Frontend: Nuxt 4, NuxtUI
– Backend: Node.js, Nitro (server engine)
– Database: SQLite (better-sqlite3)
– Deploy: VPS (Linux)

Функциональность
– Адаптивная верстка (mobile-first)
– Динамическая загрузка проектов из SQLite

Структура БД
– Проект использует SQLite. Таблицы создаются автоматически при первом запросе.

Деплой
– Проект развернут на арендованном VPS сервере

Контакты
– GitHub: https://github.com/FarmBesedka/resume-tks
– Telegram: https://t.me/@Firstname79
– Email: sgh6@rambler.ru`,
})

const onSubmit = async () => {
  try {
    await $fetch('/api/project', {
      method: 'POST',
      body: projectData.value,
    })
    toast.add({ title: `Проект "${projectData.value.name}" добавлен` })
  } catch (error) {
    toast.add({ title: 'Ошибка' })
    console.error(error)
  }
}
</script>
