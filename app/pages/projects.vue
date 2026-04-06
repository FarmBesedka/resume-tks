<template>
  <UCard variant="subtle" v-for="project in data">
    <template #header>
      <p>{{ project.name }}</p>
    </template>

    <p class="whitespace-pre-wrap">{{ project.description }}</p>

    <template #footer>
      <p>{{ project.link }}</p>
    </template>
  </UCard>
</template>

<script lang="ts" setup>
import { type Project } from '~~/shared/types/interfaces'

const { data } = await useFetch<Project[]>('/api/project')
</script>
