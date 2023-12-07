import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLoggedIn: false,
    profile: {
        //null=값이 없다는 값! 정의되지않음 =undefined
        id: undefined,
        nickname: undefined,
        avatar: undefined,
    }
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn: (state, action) => {
            const { id, nickname, avatar } = action.payload
            state.profile = {
                id,
                nickname,
                avatar
            }
            state.isLoggedIn = true;
        },
        logOut: (state) => {
            state.isLoggedIn = false
            state.profile = {
                id: undefined,
                nickname: undefined,
                avatar: undefined
            }
        }
    },
})
export const authReducer = authSlice.reducer//store에 등록
export default authSlice
export const authActionCreators = authSlice.actions;
//이러는 이유 명시적으로 명명.