<template>
   <span @click="$emit('click')">{{ title }}</span>
</template>

<script setup lang="ts">
defineProps(["title"]);
defineEmits(["click"]);
</script>
