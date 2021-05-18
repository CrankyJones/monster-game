import { atom } from 'recoil';
import { buildings } from '.././constants/Buildings';

export const buildingsAtom = atom({
  key: 'buildings',
  default: buildings
});

export const singleBuildingAtom = (id) => atom({
  key: `building${id}`,
  default: {health: 3}
});