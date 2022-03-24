import axiosClient from "../apiClient";

const authApi = {
    postSignIn: (data) => {
        const url = '/token/signIn';
        return axiosClient.post(url, data);
    },
    postSignUp: (data) => {
        const url = '/users/signUp';
        return axiosClient.post(url, data);
    }
}
export default authApi