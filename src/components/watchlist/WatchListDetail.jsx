import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { data } from './data/detailData';
import { otherData } from './data/otherData';
import DetailOtherStorage from './DetailOtherStorage';
import DetailStorage from './DetailStorage';
import DetailMovieList from './DetailMovieList';

const fetchDetailData = async ({ queryKey }) => {
    const id = queryKey[1];
    return data.find(item => item.storage.id === parseInt(id));
};

const fetchOtherData = async () => {
    return otherData;
};

const updateLikeStatus = async (storageData) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ...storageData,
                isLiked: !storageData.isLiked,
                likeCount: storageData.isLiked ? storageData.likeCount - 1 : storageData.likeCount + 1,
            });
        }, 500);
    });
};

const WatchListDetail = () => {
    const { id } = useParams();
    const queryClient = useQueryClient();

    const { data: detailData } = useQuery({
        queryKey: ['detailData', id],
        queryFn: fetchDetailData,
    });

    const { data: otherStorage } = useQuery({
        queryKey: ['otherData'],
        queryFn: fetchOtherData,
    });

    const { mutate: toggleLikeStatus } = useMutation({
        mutationFn: updateLikeStatus,
        onSuccess: (updatedStorage) => {
            queryClient.setQueryData(['detailData', id], (prevData) => ({
                ...prevData,
                storage: updatedStorage,
            }));
        },
    });

    const handleClickLike = () => {
        if (detailData) {
            toggleLikeStatus(detailData.storage);
        }
    };

    const handleCopy = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('링크를 복사했어요. 원하는 곳에 공유하세요!');
        }).catch(err => {
            console.error('복사 실패 ', err);
        });
    };

    return (
        <>
            {detailData?.storage && (
                <DetailStorage
                    storage={detailData.storage}
                    handleClickLike={handleClickLike}
                    handleCopy={handleCopy}
                />
            )}
            <DetailMovieList movies={detailData?.movies} />
            <DetailOtherStorage
                otherStorage={otherStorage}
                username={detailData?.storage?.username}
            />
        </>
    );
};

export default WatchListDetail;