<template>
  <UModal v-model:open="isopen" :title="project?.name" :ui="{ footer: 'justify-end' }">
    <template #body>
      <p class="whitespace-pre-wrap">{{ project?.description }}</p>
    </template>

    <template #footer>
      <div class="flex gap-3">
        <UButton variant="outline" color="neutral" :to="project?.link" target="_blank" class="text-muted">Открыть на GitHub</UButton>
      </div>
    </template>
  </UModal>
</template>

<script lang="ts" setup>
const props = defineProps(['project', 'open'])
const emit = defineEmits(['update:open'])

const isopen = computed({
  get: () => props.open,
  set: (value) => emit('update:open', value),
})
</script>
