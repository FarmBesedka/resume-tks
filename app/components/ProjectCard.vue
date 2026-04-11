<template>
  <UCard variant="subtle">
    <UUser size="xl" :name="project.name" :description="project.shortDescription" />
    <template #footer>
      <div class="flex gap-3">
        <UButton variant="outline" color="neutral" to="/projects" @click="$emit('openModal')" class="text-muted">Подробнее</UButton>
        <UButton variant="outline" color="neutral" :to="project.link" target="_blank" class="text-muted">Открыть на GitHub</UButton>
      </div>
    </template>
  </UCard>
</template>

<script lang="ts" setup>
defineProps(['project'])
</script>
