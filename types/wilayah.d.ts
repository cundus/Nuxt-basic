export interface IProvince {
   id: number;
   name: string;
}

export interface IRegency {
   id: number;
   name: string;
   id_provinsi: number;
}

export interface IDistrict {
   id: number;
   name: string;
   id_kabupaten: number;
}
export interface ISubDistrict {
   id: number;
   name: string;
   id_kecamatan: number;
}
