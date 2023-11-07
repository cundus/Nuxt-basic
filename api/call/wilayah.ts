const key = "api_key=eb8da9917a43a14829fb7436dbad2e347a1643b94ebd9bca1bcf83a8b561fdb3";
const url = "http://api.binderbyte.com/wilayah/";
export const getProvinsi = async () => {
   try {
      const res = await fetch(url + "provinsi?" + key);

      const data = await res.json();

      return data.value;
   } catch (error) {
      console.log(error);
   }
};

export const getKota = async (provinceId: number) => {
   try {
      const res = await fetch(url + "kabupaten?id_provinsi=" + provinceId + "&" + key);

      const data = await res.json();

      return data.value;
   } catch (error) {
      console.log(error);
   }
};
export const getKecamatan = async (kotaId: number) => {
   try {
      const res = await fetch(url + "kecamatan?id_kabupaten=" + kotaId + "&" + key);

      const data = await res.json();

      return data.value;
   } catch (error) {
      console.log(error);
   }
};

export const getDesa = async (kecamatanId: number) => {
   try {
      const res = await fetch(url + "kelurahan?id_kecamatan=" + kecamatanId + "&" + key);

      const data = await res.json();

      return data.value;
   } catch (error) {
      console.log(error);
   }
};
