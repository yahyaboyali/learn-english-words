import { RootState } from '../app/store'; // RootState'i doğru bir şekilde import et

// Kullanıcıyı almak için selector
export const selectUser = (state: RootState) => state.user.user;
