class MovieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :host {
      display: block;
      margin-bottom: 18px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      overflow: hidden;
      background-color: #01a1ff;
    }
    
    .fan-art-movie {
      width: 100%;
      max-height: 1000px;
      object-fit: cover;
      object-position: center;
    }
    
    .movie-info {
      padding: 24px;
    }
    
    .movie-info > h2 {
      font-weight: lighter;
    }
    
    .movie-info > p {
      margin-top: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 10;
    }
    </style>

    <img class="fan-art-movie" src="${
      `https://image.tmdb.org/t/p/w500` + this._movie.poster_path
    }" alt="Poster">
    <div class="movie-info">
      <h2>${this._movie.title}</h2>
      <p>${this._movie.overview}</p>
    </div>
  `;
  }
}
customElements.define("movie-item", MovieItem);
