export async function queryMovieList(keyword: string) {
  let resp: SearchMovieResp = {
    searchType: "",
    expression: "",
    results: [],
    errorMessage: ""
  };
   await fetch('http://localhost:8080/api/v1/movie/search?keyword='+keyword)
                .then(res => res.json())
                .then(res => { 
                  resp = res 
                });
    return resp;
}

