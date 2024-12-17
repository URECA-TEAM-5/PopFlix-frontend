import request from '../axios';

export const getWatchlistMonthlyTop = async (year, month) => {
    try {
        const response = await request.get(`/api/storages/monthly-top?year=${year}&month=${month}`);
        console.log('getWatchlistMonthlyTop:', response);
        return response;
    } catch (e) {
        console.log(`[getWatchlistMonthlyTop] >> ${e}`);
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