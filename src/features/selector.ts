import { RootState } from '../app/store'; // RootState'i doğru bir şekilde import et

// Kullanıcıyı almak için selector
export const selectUser = (state: RootState) => state.user.user;

export const selectFlashCards = (state: RootState) => state.flashCards.flashCards;

export const selectTranslateState = (state: RootState) => state.translateStatus.status;

export const selectNotes = (state: RootState) => state.notes.notes