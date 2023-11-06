<script setup lang="ts">
import type { IUser } from "~/types/user";

const { data: users, pending, error, refresh } = await useFetch<IUser[]>("https://jsonplaceholder.org/users");
</script>

<template>
   <div class="flex flex-wrap gap-5 p-2 justify-center">
      <!-- <span v-for="user in users" class="flex-1 min-w-xs max-w-md" :key="user.id">{{ user.email }} </span> -->
      <Card v-for="(user, index) in users" :key="index" :user="user" />
   </div>
</template>
