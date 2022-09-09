export async function queryUserList(keyword: string) {
  let resp: UserFavorite = {};
  await fetch('http://localhost:8080/api/v1/movie/search?keyword=' + keyword)
    .then((res) => res.json())
    .then((res) => {
      resp = res;
    });
  return resp;
}

export interface UserFavorite {
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
