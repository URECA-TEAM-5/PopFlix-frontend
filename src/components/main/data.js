import popcornGPA from '/assets/popcorn_GPA.svg';
import reviewNull from '/assets/review_null.svg';
import popcornScoreNull from '/assets/popcorn_score_null.svg';

export const todayPickMoviesData = [
  { id: 1, image: '/assets/movie1.svg' },
  { id: 2, image: '/assets/movie2.svg' },
  { id: 3, image: '/assets/movie3.svg' },
];
export const genres = [
  '액션',
  '모험',
  '애니메이션',
  '코미디',
  '범죄',
  '다큐멘터리',
  '드라마',
  '판타지',
  '역사',
  '공포',
  '음악',
  '미스터리',
  '로맨스',
  'SF',
  'TV 영화',
  '스릴러',
  '전쟁',
  '서부',
];
export const watchListData = [
  { image: 'https://via.placeholder.com/150', watchListTitle: '외국인을 위한 찐 한국인의 한국맛 영화 추천', heart: 50, listItem: 5 },
  { image: 'https://via.placeholder.com/150', watchListTitle: '외국인을 위한 찐 한국인의 한국맛 영화 추천', heart: 50, listItem: 5 },
  { image: 'https://via.placeholder.com/150', watchListTitle: '외국인을 위한 찐 한국인의 한국맛 영화 추천', heart: 50, listItem: 5 },
  { image: 'https://via.placeholder.com/150', watchListTitle: '외국인을 위한 찐 한국인의 한국맛 영화 추천', heart: 50, listItem: 5 },
  { image: 'https://via.placeholder.com/150', watchListTitle: '외국인을 위한 찐 한국인의 한국맛 영화 추천', heart: 50, listItem: 5 },
];
export const pickContentData = [
  { id: 1, movieImage: 'https://via.placeholder.com/150' },
  { id: 2, movieImage: 'https://via.placeholder.com/150' },
  { id: 3, movieImage: 'https://via.placeholder.com/150' },
  { id: 4, movieImage: 'https://via.placeholder.com/150' },
  { id: 5, movieImage: 'https://via.placeholder.com/150' },
  { id: 6, movieImage: 'https://via.placeholder.com/150' },
  { id: 7, movieImage: 'https://via.placeholder.com/150' },
  { id: 8, movieImage: 'https://via.placeholder.com/150' },
  { id: 9, movieImage: 'https://via.placeholder.com/150' },
  { id: 10, movieImage: 'https://via.placeholder.com/150' },
];
export const moviesData = [
  {
    id: 1,
    title: '히든페이스',
    imageUrl: 'https://i.namu.wiki/i/JoJX0cuRBfLvH0Xr4ptiGKMjgLxg20eycTsY6YxCTpnFfifOew3DqEk8CqjcHjT5XgYeCuoMcDxWQzIhIXr-5w.webp',
    rating: 8.5,
    likes: 120,
    genre: '액션',
    overview: '전설적인 액션 히어로가 숨겨진 음모를 파헤친다.',
    releaseDate: '2018.10.3',
  },
  {
    id: 2,
    title: '모아나2',
    imageUrl: 'https://i.namu.wiki/i/jkXbUYN8qXanA4sO3jyMvBgS_l-mCr8cqdnii9ZTRHIQfX-cTVTM5ZY0bOfFHNBI5BQZq4XJjaheQI-kolj8vA.webp',
    rating: 7.2,
    likes: 200,
    genre: '모험',
    overview: '모아나는 고대의 비밀을 풀기 위한 모험을 떠난다.',
    releaseDate: '2018.10.3',
  },
  {
    id: 3,
    title: '베놈',
    imageUrl: 'https://i.namu.wiki/i/29l8fINcGXd9do3-fjRx0C0zgb_nLDdT0XSZgQFKgRQBMMiEL6OsqouE8Apb3-7FXvMtQNklmQvi_--NL712Vw.webp',
    rating: 9.1,
    likes: 300,
    genre: '애니메이션',
    overview: '베놈은 외계의 심비오트를 숙주로 삼아 새로운 위협에 맞선다.',
    releaseDate: '2018.10.3',
  },
  {
    id: 4,
    title: 'Movie 4',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 6.8,
    likes: 150,
    genre: '코미디',
    overview: '고난과 역경을 겪으며 웃음을 찾는 사람들의 이야기.',
  },
  {
    id: 5,
    title: 'Movie 5',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 7.5,
    likes: 180,
    genre: '범죄',
    overview: '범죄에 연루된 인물이 사건의 배후를 추적하며 진실을 파헤친다.',
  },
  {
    id: 6,
    title: 'Movie 6',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 8.0,
    likes: 220,
    genre: '다큐멘터리',
    overview: '전 세계의 다양한 문화와 사람들을 탐험하는 다큐멘터리.',
  },
  {
    id: 7,
    title: 'Movie 7',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 6.5,
    likes: 140,
    genre: '드라마',
    overview: '한 가족의 이야기를 통해 인간 관계의 깊이를 탐구한다.',
  },
  {
    id: 8,
    title: 'Movie 8',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 7.8,
    likes: 210,
    genre: '판타지',
    overview: '마법과 전설 속의 세계에서 펼쳐지는 판타지 모험.',
  },
  {
    id: 9,
    title: 'Movie 9',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 8.2,
    likes: 250,
    genre: '역사',
    overview: '역사의 중요한 순간을 배경으로 한 전투와 혁명의 이야기.',
  },
  {
    id: 10,
    title: 'Movie 10',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 7.0,
    likes: 190,
    genre: '공포',
    overview: '미스터리한 사건이 발생한 작은 마을에서 벌어지는 공포의 이야기.',
  },
  {
    id: 11,
    title: 'Movie 11',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 8.3,
    likes: 220,
    genre: '음악',
    overview: '음악과 춤을 통해 얽힌 여러 인물들의 이야기를 그린 작품.',
  },
  {
    id: 12,
    title: 'Movie 12',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 7.6,
    likes: 230,
    genre: '미스터리',
    overview: '사라진 사람을 찾기 위한 미스터리한 사건을 풀어나가는 이야기.',
  },
  {
    id: 13,
    title: 'Movie 13',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 9.0,
    likes: 280,
    genre: '로맨스',
    overview: '서로 다른 환경에서 살아온 두 사람이 사랑에 빠지는 이야기.',
  },
  {
    id: 14,
    title: 'Movie 14',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 6.9,
    likes: 160,
    genre: 'SF',
    overview: '미래의 기술이 인간 사회에 미치는 영향을 그린 SF 영화.',
  },
  {
    id: 15,
    title: 'Movie 15',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 7.9,
    likes: 250,
    genre: 'TV 영화',
    overview: 'TV 영화에서 전개되는 이야기를 통해 인생의 중요한 순간을 다룬다.',
  },
  {
    id: 16,
    title: 'Movie 16',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 8.7,
    likes: 300,
    genre: '스릴러',
    overview: '범죄의 미스터리와 진실을 추적하는 스릴러.',
  },
  {
    id: 17,
    title: 'Movie 17',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 6.4,
    likes: 130,
    genre: '전쟁',
    overview: '전쟁 중 벌어지는 전략과 전투를 그린 전쟁 영화.',
  },
  {
    id: 18,
    title: 'Movie 18',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 8.4,
    likes: 210,
    genre: '서부',
    overview: '서부 개척 시대의 이야기를 그린 웨스턴 영화.',
  },
  {
    id: 19,
    title: 'Movie 19',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 7.3,
    likes: 190,
    genre: '액션',
    overview: '액션과 스릴이 넘치는 추격전이 펼쳐지는 영화.',
  },
  {
    id: 20,
    title: 'Movie 20',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 9.2,
    likes: 310,
    genre: '모험',
    overview: '모험과 도전의 과정을 그린 흥미진진한 이야기.',
  },
  {
    id: 21,
    title: 'Movie 21',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 7.4,
    likes: 230,
    genre: '애니메이션',
    overview: '애니메이션 캐릭터들이 펼치는 감동적인 이야기.',
  },
  {
    id: 22,
    title: 'Movie 22',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 8.1,
    likes: 240,
    genre: '코미디',
    overview: '코미디적 요소와 사회적 메시지를 담은 영화.',
  },
  {
    id: 23,
    title: 'Movie 23',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 7.7,
    likes: 250,
    genre: '범죄',
    overview: '범죄의 원인과 결과를 탐구하는 스릴 넘치는 이야기.',
  },
  {
    id: 24,
    title: 'Movie 24',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 6.9,
    likes: 210,
    genre: '다큐멘터리',
    overview: '진실을 추적하는 다큐멘터리 영화.',
  },
  {
    id: 25,
    title: 'Movie 25',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 8.5,
    likes: 260,
    genre: '드라마',
    overview: '인생의 고비를 겪고 있는 인물들이 성장하는 이야기.',
  },
  {
    id: 26,
    title: 'Movie 26',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 7.2,
    likes: 220,
    genre: '판타지',
    overview: '판타지 세계에서 벌어지는 모험과 전투의 이야기.',
  },
  {
    id: 27,
    title: 'Movie 27',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 9.0,
    likes: 300,
    genre: '역사',
    overview: '역사적인 사건을 배경으로 펼쳐지는 감동적인 이야기.',
  },
  {
    id: 28,
    title: 'Movie 28',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 6.8,
    likes: 180,
    genre: '공포',
    overview: '미스터리한 사건들이 벌어지는 공포의 밤.',
  },
  {
    id: 29,
    title: 'Movie 29',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 8.3,
    likes: 270,
    genre: '로맨스',
    overview: '사랑과 감동의 이야기를 담은 로맨스 영화.',
  },
  {
    id: 30,
    title: 'Movie 30',
    imageUrl: 'https://via.placeholder.com/150',
    rating: 7.5,
    likes: 230,
    genre: 'SF',
    overview: '미래 기술을 배경으로 한 SF 스릴러.',
  },
];
export const poppleTipData = (movie, userId) => {
  console.log(userId); // userId가 제대로 출력되는지 확인
  console.log('영화 정보', movie);
  let userHasRated = false; // let으로 변경
  let ratingForUser = null;
  let rating = null;
  if (movie && Array.isArray(movie.ratings)) {
    ratingForUser = movie.ratings.find((rating) => rating.userId === userId);
    if (ratingForUser) {
      console.log('찾은 평가:', ratingForUser);
      userHasRated = true;
      if (ratingForUser.rating == '1') {
        rating = '별로예요';
      } else if (ratingForUser.rating == '2') {
        rating = '그저그래요';
      } else if (ratingForUser.rating == '3') {
        rating = '좋아요';
      } else if (ratingForUser.rating == '4') {
        rating = '재밌어요';
      } else {
        rating = '최고예요';
      }
    } else {
      console.log('해당 userId로 등록된 평가는 없습니다.');
    }
  } else {
    console.log('ratings 배열이 존재하지 않거나 비어있습니다.');
  }
  return [
    {
      id: 0,
      icon: popcornGPA,
      title: movie.title + '의 팝콘 지수는',
      text: movie.averageRating + '점 입니다!',
    },
    {
      id: 1,
      icon: popcornScoreNull,
      title: userHasRated ? `이 영화에 "${rating}"라고 평가하셨어요.` : '아직 평가를 남겨주시지 않았군요?',
      text: userHasRated ? '수정이나 삭제를 원하신다면 편집을 클릭해주세요!' : '등록을 클릭해주세요!',
    },
    {
      id: 2,
      icon: reviewNull,
      title: '작성하신 포토리뷰가 없네요!',
      text: '작성을 클릭해주세요!',
    },
  ];
};
// export const poppleTipData = (movie, userId) => {
//   console.log(userId);
//   console.log(movie);
//   const userRating = movie.ratings.find(rating => rating.userId === userId);
//   const userHasRated = userRating !== undefined; // 평가가 있으면 true

//   return [
//     {
//       id: 0,
//       icon: popcornGPA,
//       title: `${movie.title}의 팝콘 지수는`,
//       text: `${movie.averageRating}점 입니다!`
//     },
//     {
//       id: 1,
//       icon: popcornScoreNull,
//       title: userHasRated ? `이 영화에 "${userRating.rating}"라고 평가하셨어요.`: '아직 평가를 남겨주시지 않았군요?',
//       text: userHasRated ? '수정이나 삭제를 원하신다면 편을을 클릭해주세요!' : '등록을 클릭해주세요!'
//     },
//     {
//       id: 2,
//       icon: reviewNull,
//       title: '작성하신 포토리뷰가 없네요!',
//       text: '작성을 클릭해주세요!'
//     },
//   ];
// };
export const shortReviewData = [
  { id: 0, review: '재밌어요!', userName: '성현짱짱' },
  { id: 1, review: '여자친구랑 보기 좋아요!', userName: '강석석' },
  { id: 2, review: '오랜만에 소름 돋는 영화였어요!', userName: '조동팔' },
  { id: 3, review: '믿고보는 마블 영화!', userName: '은진스키' },
  { id: 4, review: '또 보고싶어요!', userName: '위짜오후이' },
  { id: 5, review: '10만원주고 보고싶은 정도입니다!', userName: '의지리고' },
];
