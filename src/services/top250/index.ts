export async function queryMovieList() {
  let movies: Movies = {
    items: [],
    errorMessage: '',
  };
  await fetch('http://localhost:8080/api/v1/movie/top250')
    .then((res) => res.json())
    .then((res) => {
      movies = res;
    });
  return movies;
}

export interface movie {
  id: string;
  rank: string;
  fullTitle: string;
  image: string;
  year: string;
  crew: string;
  imDbRating: number;
  imDbRatingCount: string;
}

export interface Movies {
  items: movie[];
  errorMessage: string;
}

// 先用 setTimeout 模拟一个请求，正常的写法如上所示
export function queryMovies() {
  return setTimeout(() => {
    Promise.resolve({
      data: {
        items: [
          {
            id: 'tt0111161',
            rank: '1',
            fullTitle: 'The Shawshank Redemption (1994)',
            image:
              'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6716_AL_.jpg',
            year: '1994',
            crew: 'Frank Darabont (dir.), Tim Robbins, Morgan Freeman',
            imDbRating: '9.2',
            imDbRatingCount: '2636693',
          },
          {
            id: 'tt0068646',
            rank: '2',
            fullTitle: 'The Godfather (1972)',
            image:
              'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7015_AL_.jpg',
            year: '1972',
            crew: 'Francis Ford Coppola (dir.), Marlon Brando, Al Pacino',
            imDbRating: '9.2',
            imDbRatingCount: '1827476',
          },
          {
            id: 'tt0468569',
            rank: '3',
            fullTitle: 'The Dark Knight (2008)',
            image:
              'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_Ratio0.6716_AL_.jpg',
            year: '2008',
            crew: 'Christopher Nolan (dir.), Christian Bale, Heath Ledger',
            imDbRating: '9.0',
            imDbRatingCount: '2607964',
          },
          {
            id: 'tt0071562',
            rank: '4',
            fullTitle: 'The Godfather Part II (1974)',
            image:
              'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7015_AL_.jpg',
            year: '1974',
            crew: 'Francis Ford Coppola (dir.), Al Pacino, Robert De Niro',
            imDbRating: '9.0',
            imDbRatingCount: '1253239',
          },
          {
            id: 'tt0050083',
            rank: '5',
            fullTitle: '12 Angry Men (1957)',
            image:
              'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_Ratio0.6716_AL_.jpg',
            year: '1957',
            crew: 'Sidney Lumet (dir.), Henry Fonda, Lee J. Cobb',
            imDbRating: '8.9',
            imDbRatingCount: '778478',
          },
          {
            id: 'tt0108052',
            rank: '6',
            fullTitle: 'Schindlers List (1993)',
            image:
              'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6716_AL_.jpg',
            year: '1993',
            crew: 'Steven Spielberg (dir.), Liam Neeson, Ralph Fiennes',
            imDbRating: '8.9',
            imDbRatingCount: '1337200',
          },
          {
            id: 'tt0167260',
            rank: '7',
            fullTitle: 'The Lord of the Rings: The Return of the King (2003)',
            image:
              'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6716_AL_.jpg',
            year: '2003',
            crew: 'Peter Jackson (dir.), Elijah Wood, Viggo Mortensen',
            imDbRating: '8.9',
            imDbRatingCount: '1811095',
          },
          {
            id: 'tt0110912',
            rank: '8',
            fullTitle: 'Pulp Fiction (1994)',
            image:
              'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6716_AL_.jpg',
            year: '1994',
            crew: 'Quentin Tarantino (dir.), John Travolta, Uma Thurman',
            imDbRating: '8.8',
            imDbRatingCount: '2017895',
          },
        ],
        errorMessage: '',
      },
    });
  }, 5000);
}
