import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import flashCardReducer from '../features/flashCardSlice';
import translateStatusReducer from '../features/translate'
// RootState tipi, uygulamanızdaki tüm state'leri temsil eder
export type RootState = ReturnType<typeof store.getState>; // Store'dan state tipini al

const store = configureStore({
    reducer: {
        user: userReducer,
        flashCards: flashCardReducer,
        translateStatus: translateStatusReducer
    },
});

export default store;
