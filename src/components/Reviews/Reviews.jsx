import { getMovieReviews } from 'Api/Api';
import { ReviewsItem } from 'components/ReviewsItem/ReviewsItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, ReviewsList } from './Style';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId, 1)
      .then(data => setReviews(data.results))
      .catch(console.error);
  }, [movieId]);

  if (reviews.length < 1) {
    return (
      <Box>
        <p>We don't have any reviews for this movie.</p>
      </Box>
    );
  }

  return (
    <Box>
      <ReviewsList>
        {reviews.map(review => (
          <li key={review.id}>
            <ReviewsItem review={review} />
          </li>
        ))}
      </ReviewsList>
    </Box>
  );
};

export default Reviews;
