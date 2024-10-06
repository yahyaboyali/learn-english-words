

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FlashCardDto } from '../service/types';


interface flashCardState {
    flashCards: FlashCardDto[] | null;
}

const initialState: flashCardState = {
    flashCards: null,
};

const flashCardsSlice = createSlice({
    name: 'flashCards',
    initialState,
    reducers: {
        setFlashCards: (state, action: PayloadAction<FlashCardDto[]>) => {
            state.flashCards = action.payload;
        },
        clearFlashCards: (state) => {
            state.flashCards = null
        }
    }
})


// Export actions
export const { setFlashCards, clearFlashCards } = flashCardsSlice.actions;

// Export reducer
export default flashCardsSlice.reducer;
