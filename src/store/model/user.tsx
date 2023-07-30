
import { getCookies, setCookies } from '@/utils/cookies';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    username?: string,
    token: string
}
const token = getCookies('token')
const initialState: UserState = {
    username: '',
    token: token ?? '',
}

export const userReducer = createSlice({
    name: 'userReducer',
    initialState: initialState,
    reducers: {
        setUser: (state: UserState, action: PayloadAction<UserState>) => {
            setCookies('token', action.payload.token)
            state.username = action.payload.username;
            state.token = action.payload.token;
        },
    }
})

// 导出actions
export const { setUser } = userReducer.actions;
// 导出reducer，在创建store时使用到
export default userReducer.reducer;
