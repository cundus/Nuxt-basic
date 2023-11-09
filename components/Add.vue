<template>
   <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center">
      <div class="fixed inset-0 bg-black opacity-50"></div>
      <div class="relative bg-white p-8 rounded shadow-md">
         <div class="absolute top-0 right-0 p-4">
            <button @click="$emit('closeModal', $event)">
               <svg
                  class="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
               </svg>
            </button>
         </div>
         <div class="mx-auto" @submit.prevent="handleSubmit()">
            <form class="flex flex-col items-start">
               <label for="">Nama</label>
               <input type="text" v-model="form.name" />

               <label for="">Asal</label>
               <input type="text" v-model="form.asal" />

               <label for="">Tujuan</label>
               <input type="text" v-model="form.tujuan" />

               <label for="">Muatan</label>
               <input type="text" v-model="form.muatan" />

               <button class="submit">ADD</button>
            </form>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import type { IShip } from "~/store";
import store from "~/store";

const form = ref<IShip>({
   id: 0,
   name: "",
   asal: "",
   tujuan: "",
   muatan: "",
});

const handleSubmit = () => {
   form.value.id = Math.random() * 1000 + 1;
   if (props.isEdit) {
      store.update(form.value);
   } else {
      store.add(form.value);
   }

   emit("closeModal");
};

const props = defineProps<{ isOpen: boolean; isEdit: boolean; ship?: IShip }>();

const emit = defineEmits(["closeModal"]);

onUpdated(() => {
   if (props.ship) {
      form.value = props.ship;
   }

   console.log(props.ship);
});
</script>

<style>
input {
   @apply border border-blue-200 mb-2 rounded-md;
}

.submit {
   @apply w-full text-center bg-blue-200 rounded-md text-sm py-2 active:bg-blue-400;
}
</style>
