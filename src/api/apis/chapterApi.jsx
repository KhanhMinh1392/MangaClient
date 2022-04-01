import axiosClient from "../apiClient";

const chapterApi = {
    getChapterImg: (data) => {
        const url = '/img/imgComic';
        return axiosClient.get(url,data);
    },
    getChapterInfo: (param) => {
        const url = `/chapter/chapterID/${param}`;
        return axiosClient.get(url);
    }
}
export default chapterApi