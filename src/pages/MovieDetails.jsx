import { Link } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <div>
      <p>MovieDetails</p>
      <Link to="cast">cast</Link>
      <Link to="reviews">reviews</Link>
    </div>
  );
};

export default MovieDetails;
