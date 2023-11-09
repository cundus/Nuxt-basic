<template>
   <div class="min-w-screen min-h-screen bg-black/40">
      <div class="flex">
         <button @click.prevent="openModal()">ADD SHIPMENT</button>
      </div>
      <div class="container w-full h-full mx-auto flex justify-center items-center">
         <table class="w-full">
            <tr>
               <th class="text-left">ID</th>
               <th class="text-left">Name</th>
               <th class="text-left">Origin</th>
               <th class="text-left">Destination</th>
               <th class="text-left">Loads</th>
               <th></th>
            </tr>
            <tr v-for="ship in state.ships" :key="ship.id">
               <td>{{ ship.id }}</td>
               <td>{{ ship.name }}</td>
               <td>{{ ship.asal }}</td>
               <td>{{ ship.tujuan }}</td>
               <td>{{ ship.muatan }}</td>
               <td>
                  <span class="mr-5" @click="handleOpenUpdate(ship)">update</span>
                  <span @click="deleteShip(ship.id)">delete</span>
               </td>
            </tr>
         </table>
      </div>
   </div>
   <Add :isEdit="isEdit" :isOpen="isOpen" @closeModal="isOpen = false" :ship="selectedShip" />
</template>

<script setup lang="ts">
import store from "~/store";
import type { IShip } from "~/store";
const { state, deleteShip } = store;
const isOpen = ref(false);
const isEdit = ref(false);
const initialRefValue = {
   id: 0,
   name: "",
   asal: "",
   tujuan: "",
   muatan: "",
};
const selectedShip = ref<IShip>(initialRefValue);

const openModal = () => {
   isEdit.value = false;
   isOpen.value = !isOpen.value;
   selectedShip.value = initialRefValue;
};

const handleOpenUpdate = (ship: IShip) => {
   console.log(ship);

   isEdit.value = true;
   selectedShip.value = ship;

   isOpen.value = true;
};
</script>
