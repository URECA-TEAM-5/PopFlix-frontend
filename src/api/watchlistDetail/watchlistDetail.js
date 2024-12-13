import { detailData } from '../../components/watchlistDetail/data/detailData';
import { otherData } from '../../components/watchlistDetail/data/otherData';
import request from '../axios';

export const fetchDetailData = async ({ queryKey }) => {
    const id = queryKey[1];
    return detailData.find(item => item.storage.id === parseInt(id));
};

export const fetchOtherStorage = async () => {
    return otherData;
};

export const handleStorageLike = (id, state) => {
    const storage = detailData[0].storage;
    const item = storage.find(item => item.id === id);
    if (item) {
        item.isLiked = state;
        console.log(`[${item.id}]번 보관함에 ${state ? '좋아요' : '좋아요 해제'}가 등록되었습니다!`);
    }
};

export const handleOtherStorageLike = (id, state) => {
    const storage = otherData[0].storage;
    const item = storage.find(item => item.id === id);
    if (item) {
        item.isLiked = state;
        console.log(`[${item.id}]번 보관함에 ${state ? '좋아요' : '좋아요 해제'}가 등록되었습니다!`);
    }
};