import { getMovieCredits } from 'Api/Api';
import { CastItem } from 'components/CastItem/CastItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, CastList } from './Style';

const Cast = () => {
  const { movieId } = useParams();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId)
      .then(data => setCasts(data.cast))
      .catch(console.error);
  }, [movieId]);

  if (casts.length < 1) {
    return (
      <Box>
        <p>We don't have any casts for this movie.</p>
      </Box>
    );
  }

  return (
    <Box>
      <CastList>
        {casts.map(cast => (
          <li key={cast.id}>
            <CastItem cast={cast} />
          </li>
        ))}
      </CastList>
    </Box>
  );
};

export default Cast;
