import request from '../axios';
import { myStoragedata } from '../../components/mypage/data/myStorage';

export const getMyWatchList = () => {
    console.log('[getMyWatchList] 호출');
    console.log('myStoragedata:', myStoragedata);
    return myStoragedata;
};

export const handleChangePublic = (id, state) => {
    console.log('handleChangePublic 호출');
    console.log('id:', id, 'state:', state);
    myStoragedata.map((item) => {
        console.log(`item.id: ${item.id}, target id: ${id}`);
        if (item.id === id) {
            console.log(`[ listId ] >> ${item.id}`);
            item.isPublic = state;
            console.log(`[${item.id}]에 ${state ? '공개' : '비공개'}가 등록되었습니다!`);
        }
    });
};

export const updateStorage = async (id, storageName, overview) => {
    try {
        const response = await request.put(`/api/update-name/${id}`, {
            storageName,
            overview,
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};