import { request } from '@umijs/max';

export async function queryMovieList(keyword: string) {
  return await request('/movie/search?keyword=' + keyword);
}

export interface MovieList {
  id: string;
  resultType: string;
  image: string;
  title: string;
  description: string;
}

export interface SearchMovieResp {
  searchType: string;
  expression: string;
  results: MovieList[];
  errorMessage: string;
}

// 先用 setTimeout 模拟一个请求，正常的写法如上所示
export function SearchMovieList() {
  return Promise.resolve({
    data: {
      searchType: 'Movie',
      expression: 'xs',
      results: [
        {
          id: 'tt0057693',
          resultType: 'Title',
          image:
            'https://m.media-amazon.com/images/M/MV5BNjgyYjBhNjgtNzcwMi00YzRmLTgwM2EtNDNjNWRlZjhkZjE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.7273_AL_.jpg',
          title: 'X: The Man with the X-Ray Eyes',
          description: '(1963)',
        },
        {
          id: 'tt6787084',
          resultType: 'Title',
          image:
            'https://m.media-amazon.com/images/M/MV5BZGQ1YzI1MDEtN2U0OC00NjQzLTk4ZDgtNjY2ZmE3NjY4ZTI4XkEyXkFqcGdeQXVyMTM2MzAwOA@@._V1_Ratio0.7273_AL_.jpg',
          title: 'X-Story',
          description: '(2016) (Short)',
        },
        {
          id: 'tt11519526',
          resultType: 'Title',
          image:
            'https://m.media-amazon.com/images/M/MV5BYTYyNzVkZDQtYTYxYy00MDBhLTg1ZmItMWE1NjlhNTM3Njg0XkEyXkFqcGdeQXVyNTMyNjAzMDU@._V1_Ratio0.7273_AL_.jpg',
          title: 'Xsunami',
          description: '(2019)',
        },
      ],
      errorMessage: '',
    },
  });
}
