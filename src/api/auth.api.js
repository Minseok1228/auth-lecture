import axios from "axios";

//인증관련 api
const instance = axios.create({
    baseURL: "https://moneyfulpublicpolicy.co.kr",
})

const authAPI = {
    setToken: (accessToken) => {
        //인스턴스 기본 헤더 커먼 인증
        instance.defaults.headers.common.Authorization = accessToken ? `Bearer ${accessToken}` : undefined//bearer = 토큰의 유형
    },
    login: async ({ id, password }) => {
        const response = await instance.post("/login", { id, password })
        console.log(response)
        return response
    },
    getProfile: async () => {
        const response = await instance.get("/user")
        return response
    }
    //getprofile할때 어떻게 헤더가 형성되는가?
}
export default authAPI