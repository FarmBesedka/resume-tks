<template>
  <UPage>
    <UPageBody>
      <ProjectCard v-for="(project, index) in data" @open-modal="openModal(index)" :project="project" />
    </UPageBody>
  </UPage>

  <ProjectModal :project="projects[i]" :open="open" @update:open="open = $event" />
</template>

<script lang="ts" setup>
import { type Project } from '~~/shared/types/interfaces'

const { data } = await useFetch<Project[]>('/api/project')
const open = ref<boolean>(false)
const i = ref<number>(0)

const projects = computed(() => data.value || [])

const openModal = (index: number) => {
  open.value = !open.value
  i.value = index || 0
}
</script>
