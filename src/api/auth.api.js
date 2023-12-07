import axios from "axios";

//인증관련 api
const instance = axios.create({
    baseURL: "https://moneyfulpublicpolicy.co.kr",
})

const authAPI = {
    login: async ({ id, password }) => {
        const response = await instance.post("/login", { id, password })
        return response
    },
}
export default authAPI