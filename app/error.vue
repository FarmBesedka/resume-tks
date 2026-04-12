<script setup lang="ts">
import type { NuxtError } from '#app'
const props = defineProps<{ error: NuxtError }>()
</script>

<template>
  <NuxtLayout name="default">
    <UPage>
      <UPageHeader :title="String(props.error.statusCode)" description="Такая страница не найдена в этом резюме" color="warning" />
      <UPageBody class="text-center">
        Можно выйти <UButton to="/" variant="outline" color="neutral" label="на главную" /> или посмотреть
        <UButton to="/projects" label="проекты" variant="outline" color="neutral" />
      </UPageBody>
    </UPage>
  </NuxtLayout>
</template>
