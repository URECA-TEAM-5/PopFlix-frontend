export const sample_data = {
  reviewId: 1,
  review: '영화 명장면을 담아보았습니다!',
  reviewImageUrl: '이미지 업로드',
  movie: {
    movieId: 4,
    title: '인셉션',
    posterPath: '/inception.jpg',
  },
  user: {
    userId: 9,
    nickname: '영화광',
    profileImageUrl: 'profile.jpg',
  },
  createdAt: '2024-11-27T13:13:26.740+00:00',
  updatedAt: '2024-11-27T13:13:26.740+00:00',
  likeCount: 5,
  isLiked: true,
  comments: [
    {
      commentId: 1,
      comment: '정말 멋진 장면이네요!',
      user: {
        userId: 10,
        nickname: '무비러버',
        profileImageUrl: 'profile2.jpg',
      },
      createdAt: '2024-11-27T14:13:26.740+00:00',
      likeCount: 2,
      isLiked: false,
      isHidden: false,
    },
  ],
  isHidden: false,
};
