import { getSearchMovie } from 'Api/Api';
import SearchMovie from 'components/SearchMovie/SearchMovie';
import SearchMovieList from 'components/SearchMovieList/SearchMovieList';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [data, setData] = useState([]);

  const [searchParams] = useSearchParams();
  const search = searchParams.get('q');

  useEffect(() => {
    if (search) {
      getSearchMovie(search, 1)
        .then(data =>
          data.map(({ id, original_title, name }) => ({
            id,
            original_title,
            name,
          }))
        )
        .then(data => setData(data))
        .catch(console.error);
    }
  }, [search]);

  return (
    <div>
      <SearchMovie />
      {data.length > 0 && <SearchMovieList data={data} />}
    </div>
  );
};

export default Movies;
