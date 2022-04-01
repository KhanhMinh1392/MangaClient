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
    }
    
    
}
export default mangaApi