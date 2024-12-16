import request from '../axios';

const getMyWatchList_URL = '/api/storages/my-storage?userId=';
const postNewFolder_URL = '/api/storages/create';

export const getMyWatchList = async (userId) => {
    try {
        const response = await request.get(getMyWatchList_URL + userId);
        console.log('myWatchlist:', response.data);
        return response.data;
    } catch (e) {
        console.log(`[myWatchlist] >> ${e}`);
    }
};

export const patchSwitchPublic = async (storageId, userId) => {
    try {
        const response = await request.patch(`/api/storages/${storageId}/switch?userId=${userId}`);
        console.log('postStorageLike:', response);
        return response;
    } catch (e) {
        console.log(`[postStorageLike] >> ${e}`);
    }
};

export const postNewFolder = async (data) => {
    try {
        const response = await request.post(postNewFolder_URL, data);
        console.log('newFolder:', response.data);
        return response.data;
    } catch (e) {
        console.log(`[newFolder] >> ${e}`);
    }
};

export const deleteMyWatchList = async (storageId, userId) => {
    try {
        const response = await request.delete(`/api/storages/delete/${storageId}?userId=${userId}`);
        console.log('deleteMyWatchList:', response);
        return response;
    } catch (e) {
        console.log(`[deleteMyWatchList] >> ${e}`);
    }
}

export const updateStorage = async (storageId, userId, formData) => {
    try {
        const response = await request.put(`/api/update-name/${storageId}?userId=${userId}`, formData);
        console.log('updateStorage:', response.data);
        return response.data;
    } catch (error) {
        console.log(`[updateStorage] >> ${e}`);
    }
};