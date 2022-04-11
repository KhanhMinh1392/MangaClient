import axiosClient from "../apiClient";

const mangaApi = {
    getTop: () => {
        const url = '/comic/manga';
        return axiosClient.get(url);
    },
    getManga: (param)=> {
        const url = `/comic/manga/${param.manga_id}`;
        return axiosClient.get(url);
    },
    getMangaChapters: () => {
        const url = '/chapter/chapters';
        return axiosClient.get(url);
    },
    getGenres: ()=> {
        const url = '/cate/getGenres';
        return axiosClient.get(url);
    },
    getFilterManga: (params) => {
        const url = `/cate/findCate?search=${params.name_cate}`;
        return axiosClient.get(url);
    },
    postComicLibrary: (params) => {
        const url = `/library/addComicLib`;
        return axiosClient.post(url, params);
    },
    updateComicLibrary: (id,params) => {
        const url = `/library/updateLibrary/${id}`;
        return axiosClient.patch(url, params);
    }
}
export default mangaApi