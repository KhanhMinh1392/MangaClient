import axiosClient from "../apiClient";

const authApi = {
    postSignIn: (data) => {
        const url = '';
        return axiosClient.post(url, data);
    },
    postSignUp: (data) => {
        const url = '';
        return axiosClient.post(url, data);
    }
}