export async function queryMovieDetail(imdbID: string) {
  let resp: MovieDetailResp = {};
  await fetch('http://localhost:8080/api/v1/movie/' + imdbID)
    .then((res) => res.json())
    .then((res) => {
      resp = res;
    });

  return resp;
}

export interface DirectorList {
  id: string;
  name: string;
}

export interface WriterList {
  id: string;
  name: string;
}

export interface StarList {
  id: string;
  name: string;
}

export interface ActorList {
  id: string;
  image: string;
  name: string;
  asCharacter: string;
}

export interface GenreList {
  key: string;
  value: string;
}

export interface CompanyList {
  id: string;
  name: string;
}

export interface CountryList {
  key: string;
  value: string;
}

export interface LanguageList {
  key: string;
  value: string;
}

export interface BoxOffice {
  budget: string;
  openingWeekendUSA: string;
  grossUSA: string;
  cumulativeWorldwideGross: string;
}

export interface Similar {
  id: string;
  title: string;
  image: string;
  imDbRating: string;
}

export interface MovieDetailResp {
  id: string;
  title: string;
  originalTitle: string;
  fullTitle: string;
  type: string;
  year: string;
  image: string;
  releaseDate: Date;
  runtimeMins: string;
  runtimeStr: string;
  plot: string;
  plotLocal: string;
  plotLocalIsRtl: boolean;
  awards: string;
  directors: string;
  directorList: DirectorList[];
  writers: string;
  writerList: WriterList[];
  stars: string;
  starList: StarList[];
  actorList: ActorList[];
  fullCast?: any;
  genres: string;
  genreList: GenreList[];
  companies: string;
  companyList: CompanyList[];
  countries: string;
  countryList: CountryList[];
  languages: string;
  languageList: LanguageList[];
  contentRating: string;
  imDbRating: number;
  imDbRatingVotes: string;
  metacriticRating: string;
  ratings?: any;
  wikipedia?: any;
  posters?: any;
  images?: any;
  trailer?: any;
  boxOffice: BoxOffice;
  tagline?: any;
  keywords: string;
  keywordList: string[];
  similars: Similar[];
  tvSeriesInfo?: any;
  tvEpisodeInfo?: any;
  errorMessage?: any;
}
