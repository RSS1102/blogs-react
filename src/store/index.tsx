import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import userReducer from './model/user';

export const store = configureStore({
    reducer: {
        userReducer: userReducer,
    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export default store
