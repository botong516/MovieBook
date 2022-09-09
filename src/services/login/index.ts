export async function Login(data = { password: string, username: string }) {
  const response = await fetch(
    '/login?username=' + data.username + '&password=' + data.password,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'x-www-form-urlencoded',
      },
      body: '',
    },
  );
  return response.json();
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
