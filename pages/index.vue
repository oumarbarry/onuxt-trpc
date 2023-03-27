<script setup lang="ts">
const { $trpc } = useNuxtApp()

const users = await $trpc.user.list.query()
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center gap-y-3">
    <h1 class="text-3xl font-bold text-green-400">
      SIMPLE QUICKSTART
    </h1>
    <div v-for="user in users" :key="user.id">
      <p>{{ user.name }}, {{ user.age }}</p>
    </div>
  </div>
</template>
