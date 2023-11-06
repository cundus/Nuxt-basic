<template>
   <div
      class="bg-white drop-shadow-sm rounded-md flex-[0_1_0%] min-w-[17rem] border p-2 hover:scale-105 transition-all duration-300 hover:bg-gray-400/50 cursor-pointer"
   >
      <p>{{ user.firstname }}</p>
      <p>{{ user.lastname }}</p>
      <p>{{ user.email }}</p>
      <p>{{ user.phone }}</p>
      <p>{{ user.website }}</p>
   </div>
</template>

<script setup lang="ts">
defineProps(["user"]);
</script>
