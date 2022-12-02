import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const MovieItam = ({ movie, location }) => {
  return (
    <Link to={`/movies/${movie.id}`} state={location}>
      {movie.original_title || movie.name}
    </Link>
  );
};

MovieItam.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    original_title: PropTypes.string,
    name: PropTypes.string,
  }),
  location: PropTypes.shape().isRequired,
};
