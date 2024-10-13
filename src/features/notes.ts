import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NoteDto } from '../service/types';

interface NoteState {
    notes: NoteDto[] | null
}

const initialState: NoteState = {
    notes: null,
};

const notesLice = createSlice({
    name: 'notesSlice',
    initialState,
    reducers: {
        setNotes: (state, action: PayloadAction<NoteDto[]>) => {
            state.notes = action.payload
        },
        clearNotes: (state) => {
            state.notes = null
        }
    }
})
export const { setNotes, clearNotes } = notesLice.actions;
export default notesLice.reducer;
