import { atom } from 'recoil';
import { buildings } from '.././constants/Buildings';

export const buildingsAtom = atom({
  key: 'buildings',
  default: buildings
});