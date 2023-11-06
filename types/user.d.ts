export interface IUser {
   id: number;
   firstname: string;
   lastname: string;
   email: string;
   birthDate: string;
   phone: string;
   website: string;
   login: ILoginUser;
   geo: IGeoUser;
   address: IAddressUser;
}

interface ILoginUser {
   uuid: string;
   username: string;
   password: string;
   md5: string;
   sha1: string;
   registered: Date;
}

interface IAddressUser {
   street: string;
   suite: string;
   city: string;
   zipcode: string;
}
interface IGeoUser {
   lat: number;
   lng: number;
}
