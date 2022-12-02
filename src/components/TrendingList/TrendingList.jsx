import { getTrending } from 'Api/Api';
import { List } from 'components/SearchMovieList/Style';
import { MovieItam } from 'components/MovieItam/MovieItam';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TrendingList = () => {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    getTrending()
      .then(data =>
        data.map(({ id, original_title, name }) => ({
          id,
          original_title,
          name,
        }))
      )
      .then(data => setData(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <h1>Trending todey</h1>
      <List>
        {data.map(movie => (
          <li key={movie.id}>
            <MovieItam movie={movie} location={location} />
          </li>
        ))}
      </List>
    </>
  );
};

export default TrendingList;
