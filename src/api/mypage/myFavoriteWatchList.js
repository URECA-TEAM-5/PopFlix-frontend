import request from '../axios';

const getMyFavoriteWatchList_URL = '/api/storages/liked-storages?userId=';

export const getMyFavoriteWatchList = async (userId) => {
    try {
        const response = await request.get(getMyFavoriteWatchList_URL + userId);
        console.log('myFavoriteWatchlist:', response.data);
        return response.data;
    } catch (e) {
        console.log(`[myFavoriteWatchlist] >> ${e}`);
    }
};

export const postStorageLike = async (storageId, userId) => {
    try {
        const response = await request.post(`/api/storages/${storageId}/like?userId=${userId}`);
        console.log('postStorageLike:', response);
        return response;
    } catch (e) {
        console.log(`[postStorageLike] >> ${e}`);
    }
};