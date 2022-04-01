import axiosClient from "../apiClient";

const userApi = {
    getInfo: (params) => {
        const url = `/users/${params}`;
        return axiosClient.get(url);
    },
    getAllUser: () => {
        const url = "/users/getUser";
        return axiosClient.get(url);
    }
}
export default userApi