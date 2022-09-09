import { request } from '@umijs/max';

export async function queryFavorite() {
  return await request('/user/favorite');
}

export async function savelike(movieID: string) {
  let data = {
    movieID: movieID,
    like: 0,
  };
  return await request('/user/like', {
    method: 'POST',
    data: { ...data },
  });
}

export async function saveWantTo(movieID: string) {
  let data = {
    movieID: movieID,
    wantToWatch: 0,
  };
  return await request('/user/wanttowatch', {
    method: 'POST',
    data: { ...data },
  });
}

export interface UserFavoriteData {
  likeList: UserMovie[];
  wantToList: UserMovie[];
}

export interface UserMovie {
  id: number;
  userID: number;
  movieID: string;
  isWantToWatch: number;
  islike: number;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  videoId?: any;
  videoTitle: string;
  videoDescription: string;
  thumbnailUrl: string;
  link: string;
  createTime: Date;
  updateTime: Date;
}
