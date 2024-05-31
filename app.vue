<script setup lang="ts">
const { $trpc } = useNuxtApp()

const users = await $trpc.user.list.query()

// await $trpc.post.create.mutate({ id: 1, title: "Nuxt + tRPC" })
// const p1 = await $trpc.post.get.query({ id: 1 })
// console.table(p1)
</script>

<template>
  <main class="min-h-screen flex flex-col items-center justify-center gap-y-10">
    <h1 class="text-3xl font-bold text-green-400">
      Simple Quickstart Template (Nuxt + tRPC )
    </h1>

    <table class="border border-collapse border-slate-400 text-left">
      <caption class="caption-top">
        Table: Users
      </caption>

      <thead>
        <tr>
          <th class="bg-slate-200 px-16 py-3 border border-slate-300">
            ID
          </th>
          <th class="bg-slate-200 px-16 py-3 border border-slate-300">
            Name
          </th>
          <th class="bg-slate-200 px-16 py-3 border border-slate-300">
            Age
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td class="px-16 py-2 border border-slate-300">
            {{ user.id }}
          </td>
          <td class="px-16 py-2 border border-slate-300">
            {{ user.name }}
          </td>
          <td class="px-16 py-2 border border-slate-300">
            {{ user.age }}
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
