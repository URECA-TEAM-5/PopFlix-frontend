import request from '../axios';

export const getWatchlistDetail = async (storageId, userId) => {
    try {
        const response = await request.get(`/api/storages/${storageId}/details?userId=${userId}`);
        console.log('getWatchlistDetail:', response.data.response);
        return response.data.response;
    } catch (e) {
        console.log(`[getWatchlistDetail] >> ${e}`);
    }
};

export const getOtherStorage = async (storageId, userId) => {
    try {
        const response = await request.get(`/api/storages/${storageId}/others?userId=${userId}`);
        console.log('getOthersWatchlist:', response.data.response);
        return response.data.response;
    } catch (e) {
        console.log(`[getOthersWatchlist] >> ${e}`);
    }
};

export const postDetailStorageLike = async (storageId, userId) => {
    try {
        const response = await request.post(`/api/storages/${storageId}/like?userId=${userId}`);
        console.log('postDetailStorageLike:', response);
        return response;
    } catch (e) {
        console.log(`[postDetailStorageLike] >> ${e}`);
    }
};