import { atom } from 'recoil';

export const buildingsAtom = atom({
  key: 'buildings',
  default: []
});

export const singleBuildingAtom = (id) => atom({
  key: `building${id}`,
  default: {health: 3}
});