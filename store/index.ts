export interface IShip {
   id: number;
   name: string;
   muatan: string;
   asal: string;
   tujuan: string;
}

interface IState {
   ships: IShip[];
}

interface IStore {
   state: IState;
   add: (ship: IShip) => void;
   update: (updatedShip: IShip) => void;
   deleteShip: (id: number) => void;
}

const shipStore = reactive<IStore>({
   state: {
      ships: [
         {
            id: 1,
            name: "VAN DER WICK",
            asal: "PANDEGLANG",
            tujuan: "BENGKULU",
            muatan: "NARKOBOY",
         },
      ],
   },
   add(ship) {
      shipStore.state.ships.push(ship);
   },
   deleteShip(id) {
      const indexToDelete = shipStore.state.ships.findIndex((ship) => ship.id === id);
      shipStore.state.ships.splice(indexToDelete, 1);
   },
   update(updatedShip) {
      const indexToUpdate = shipStore.state.ships.findIndex((ship) => ship.id === updatedShip.id);
      shipStore.state.ships[indexToUpdate] = updatedShip;
   },
});

export default shipStore;
