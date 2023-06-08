class DataSource {
  static searchMovie(keyword) {
    return fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=c0fb1a64d335f32d12c911714e0bfc76`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
