import PropTypes from 'prop-types';

export const CastItem = ({
  cast: { profile_path, name, character },
}) => {
  return (
    <>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRIwd-UFT6cmM0mhCyVVBI4oJN87ZizN1YKQ&usqp=CAU'
        }
        alt={name}
        width="150"
      />
      <p>{name}</p>
      <p>Character: {character ?? '-'}</p>
    </>
  );
};

CastItem.propTypes = {
  cast: PropTypes.shape({
    profile_path: PropTypes.string,
    name: PropTypes.string.isRequired,
    character: PropTypes.string,
  }),
};
