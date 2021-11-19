import { atom } from 'recoil';

// グローバルステートで管理する意味は検討する必要がある

export const memoIdState = atom<string[]>({
  key: 'memoIdState',
  default: [],
});
