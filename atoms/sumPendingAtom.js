import { atom } from 'recoil';

export const pendingState = atom({
  key: 'pendingState',
  default: 0,
});
