
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    username?: string,
    token?: string
}

const initialState: UserState = {
    username: '',
    token: '',
}

export const userReducer = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        changeUser: (state, action: PayloadAction<UserState>) => {
            state.username = action.payload.username;
            state.token = action.payload.token;
        },

    }
})

// 导出actions
export const { changeUser } = userReducer.actions;
// 导出reducer，在创建store时使用到
export default userReducer.reducer;
