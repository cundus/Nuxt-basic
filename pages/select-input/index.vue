<template>
   <div>
      <div class="mb-4">
         <label for="provinsi" class="block text-gray-700 text-sm font-bold mb-2">Provinsi</label>
         <select v-model="form.selectedProvinsi" id="provinsi" class="form-select">
            <option value="">Pilih Provinsi</option>
            <option v-for="(provinsi, key) in options.provinsiOptions" :value="provinsi.id" :key="key">
               {{ provinsi.name }}
            </option>
         </select>
      </div>

      <div class="mb-4">
         <label for="kota" class="block text-gray-700 text-sm font-bold mb-2">Kota/Kabupaten</label>
         <select v-model="form.selectedKota" id="kota" class="form-select">
            <option value="">Pilih Kota/Kabupaten</option>
            <option v-for="kota in options.kotaOptions" :value="kota.id" :key="kota.id">{{ kota.name }}</option>
         </select>
      </div>

      <div class="mb-4">
         <label for="kecamatan" class="block text-gray-700 text-sm font-bold mb-2">Kecamatan</label>
         <select v-model="form.selectedKecamatan" id="kecamatan" class="form-select">
            <option value="">Pilih Kecamatan</option>
            <option v-for="kecamatan in options.kecamatanOptions" :value="kecamatan.id" :key="kecamatan.id">
               {{ kecamatan.name }}
            </option>
         </select>
      </div>

      <div class="mb-4">
         <label for="desa" class="block text-gray-700 text-sm font-bold mb-2">Desa/Kelurahan</label>
         <select v-model="form.selectedDesa" id="desa" class="form-select">
            <option value="">Pilih Desa/Kelurahan</option>
            <option v-for="desa in options.desaOptions" :value="desa.id" :key="desa.id">{{ desa.name }}</option>
         </select>
      </div>
   </div>
</template>

<script setup lang="ts">
import { getProvinsi, getKota, getKecamatan, getDesa } from "~/api/call/wilayah";
import type { IDistrict, IProvince, IRegency, ISubDistrict } from "~/types/wilayah";

const form = ref({
   selectedProvinsi: 0,
   selectedKota: 0,
   selectedKecamatan: 0,
   selectedDesa: 0,
});

const options = ref<{
   provinsiOptions: IProvince[];
   kotaOptions: IRegency[];
   kecamatanOptions: IDistrict[];
   desaOptions: ISubDistrict[];
}>({
   provinsiOptions: [],
   kotaOptions: [],
   kecamatanOptions: [],
   desaOptions: [],
});
onMounted(async () => {
   options.value.provinsiOptions = await getProvinsi();
});

watch(
   () => form.value.selectedProvinsi,
   async () => {
      console.log("BARU MILih provinsi");

      options.value.kotaOptions = await getKota(form.value.selectedProvinsi);
   }
);
watch(
   () => form.value.selectedKota,
   async () => {
      console.log("BARU MILih kota");

      options.value.kecamatanOptions = await getKecamatan(form.value.selectedKota);
   }
);
watch(
   () => form.value.selectedKecamatan,
   async () => {
      console.log("BARU MILih kecamatan");

      options.value.desaOptions = await getDesa(form.value.selectedKecamatan);
   }
);

// watch(form, async () => {});

// export default {
//    data() {
//       return {
//          selectedProvinsi: "",
//          selectedKota: "",
//          selectedKecamatan: "",
//          selectedDesa: "",
//          provinsiOptions: ["Provinsi 1", "Provinsi 2", "Provinsi 3"], // Ganti dengan daftar provinsi yang sesuai
//          kotaOptions: [], // Isi dengan daftar kota/kabupaten yang sesuai
//          kecamatanOptions: [], // Isi dengan daftar kecamatan yang sesuai
//          desaOptions: [], // Isi dengan daftar desa/kelurahan yang sesuai
//       };
//    },
//    watch: {
//       selectedProvinsi() {
//          // Dapatkan daftar kota/kabupaten berdasarkan provinsi yang dipilih
//          // Contoh implementasi: this.kotaOptions = getKotaByProvinsi(this.selectedProvinsi);
//       },
//       selectedKota() {
//          // Dapatkan daftar kecamatan berdasarkan kota/kabupaten yang dipilih
//          // Contoh implementasi: this.kecamatanOptions = getKecamatanByKota(this.selectedKota);
//       },
//       selectedKecamatan() {
//          // Dapatkan daftar desa/kelurahan berdasarkan kecamatan yang dipilih
//          // Contoh implementasi: this.desaOptions = getDesaByKecamatan(this.selectedKecamatan);
//       },
//    },
// };
</script>
