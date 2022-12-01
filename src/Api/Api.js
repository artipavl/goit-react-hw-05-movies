import axios from 'axios';

const KEY = '307015ca02e8a519abbd25ab35659215';
const axiosMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});
const LANGUAGE = 'language=en-US';

// список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
export async function getTrending() {
  const get = await axiosMovies.get(`/trending/all/day?api_key=${KEY}`);
  return get.data;
}

// пошук фільму за ключовим словом на сторінці фільмів.
export async function getSearchMovie(query, page) {
  const get = await axiosMovies.get(
    `/search/movie?api_key=${KEY}&${LANGUAGE}&query=${query}&page=${page}&include_adult=false`
  );
  return get.data;
}

// запит повної інформації про фільм для сторінки кінофільму.
export async function getMovieDetails(id) {
  const get = await axiosMovies.get(`/movie/${id}?api_key=${KEY}&${LANGUAGE}`);
  return get.data;
}

// запит інформації про акторський склад для сторінки кінофільму.
export async function getMovieCredits(id) {
  const get = await axiosMovies.get(
    `/movie/${id}/credits?api_key=${KEY}&${LANGUAGE}`
  );
  return get.data;
}

// запит оглядів для сторінки кінофільму.
export async function getMovieReviews(id, page) {
  const get = await axiosMovies.get(
    `/movie/${id}/reviews?api_key=${KEY}&${LANGUAGE}&page=${page}`
  );
  return get.data;
}
