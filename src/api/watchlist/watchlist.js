import request from '../axios';

const API_URL = '/api/storages?sort=popular';

export const getWatchlistPopular = async () => {
    try {
        const response = await request.get(API_URL);
        console.log(response);
        return response;
    } catch (e) {
        console.log(`[WatchlistPopluar] >> ${e}`);
    }
};

export const deleteMovie = async (storageId, userId, id) => {
    try {
        const response = await request.delete(`/api/storages/remove-movie/${storageId}/${id}?userId=${userId}`);
        console.log('deleteMovie:', response);
        return response;
    } catch (e) {
        console.log(`[deleteMovie] >> ${e}`);
    }
}

export const addMovie = async (storageId, userId, data) => {
    try {
        const response = await request.post(`/api/storages/add-movie/${storageId}?userId=${userId}`, data);
        console.log('addMovie:', response.data);
        return response.data;
    } catch (e) {
        console.log(`[addMovie] >> ${e}`);
    }
}