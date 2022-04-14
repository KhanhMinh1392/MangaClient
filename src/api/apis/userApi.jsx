import axiosClient from "../apiClient";

const userApi = {
    getInfo: (params) => {
        const url = `/users/${params}`;
        return axiosClient.get(url);
    },
    getAllUser: () => {
        const url = "/users/getUser";
        return axiosClient.get(url);
    },
    getAllGenres: () => {
        const url = "/cate/getGenres";
        return axiosClient.get(url);
    },
    getListLibrary: () => {
        const url = "/library/allLibrary";
        return axiosClient.get(url);
    },
    deleteLibrary: (params) => {
        const url = `/library/removeComicLib/${params.id_library}&${params.id_comic}`;
        return axiosClient.delete(url);
    }
}
export default userApi