<template>
  <UCard variant="subtle" v-for="(project, index) in data">
    <template #header>
      <UPageCard :title="project.name" :description="project.shortDescription" />
    </template>
    <template #footer>
      <UButton variant="ghost" color="neutral" to="/projects" @click="openModal(index)">Подробнее</UButton>
      <UButton variant="ghost" color="neutral" :to="project.link" target="_blank">Открыть на GitHub</UButton>
    </template>
  </UCard>

  <UModal v-model:open="open" :title="projects[i]?.name" :ui="{ footer: 'justify-end' }">
    <template #body>
      <p class="whitespace-pre-wrap">{{ projects[i]?.description }}</p>
    </template>

    <template #footer="{ close }">
      <UButton label="Закрыть" color="neutral" variant="outline" @click="close" />
    </template>
  </UModal>
</template>

<script lang="ts" setup>
import { type Project } from '~~/shared/types/interfaces'
const { data } = await useFetch<Project[]>('/api/project')
const open = ref<boolean>(false)
const i = ref<number>(0)

const projects = computed(() => data.value || [])

const openModal = (index: number) => {
  open.value = !open.value
  i.value = index
}
</script>
