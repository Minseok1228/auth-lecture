import { createSlice } from "@reduxjs/toolkit";
import authAPI from "../../api/auth.api";
const accessToken = localStorage.getItem('accessToken')
const initialState = {
    isLoggedIn: !!accessToken,
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
            const { id, nickname, avatar, accessToken } = action.payload
            state.profile = {
                id,
                nickname,
                avatar
            }
            authAPI.setToken(accessToken)
            localStorage.setItem("accessToken", accessToken)
            state.isLoggedIn = true;
        },
        logOut: (state) => {
            state.isLoggedIn = false
            state.profile = {
                id: undefined,
                nickname: undefined,
                avatar: undefined
            }
            authAPI.setToken()
            localStorage.removeItem("accessToken")
            // localStorage.clear()
        },
        setProfile: (state, action) => {
            const { id, nickname, avatar } = action.payload
            state.profile = { id, nickname, avatar }
        }
    },
})
export const authReducer = authSlice.reducer//store에 등록
export default authSlice
export const authActionCreators = authSlice.actions;
//이러는 이유 명시적으로 명명.