import { createSlice } from "@reduxjs/toolkit"


interface TranslateStatus {
    status: boolean
}

const initialState: TranslateStatus = {
    status: false,
}

const translateSlice = createSlice({
    name: 'translate',
    initialState,
    reducers: {
        setTranslateStatus: (state) => {
            state.status = true
        },
        clearTranslateStatus: (state) => {
            state.status = false;
        },
    }
})

export const { setTranslateStatus, clearTranslateStatus } = translateSlice.actions
export default translateSlice.reducer;