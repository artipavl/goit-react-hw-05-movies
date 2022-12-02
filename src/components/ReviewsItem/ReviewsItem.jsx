import PropTypes from 'prop-types';

export const ReviewsItem = ({ review: { author, content } }) => {
  return (
    <>
      <b>Auther: {author}</b>
      <p>{content}</p>
    </>
  );
};

ReviewsItem.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};