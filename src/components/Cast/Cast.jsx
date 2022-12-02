import { getMovieCredits } from 'Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(data => setCasts(data.cast));
  }, [movieId]);

  if (casts.length < 1) {
    return;
  }

  return (
    <div>
      <ul>
        {casts.map(cast => (
          <li key={cast.id}>
            <img
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRIwd-UFT6cmM0mhCyVVBI4oJN87ZizN1YKQ&usqp=CAU'
              }
              alt={casts.original_title}
              width="150"
            />
            <p>{cast.name}</p>
            <p>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;

