import { getMovieReviews } from 'Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId, 1)
      .then(data => setReviews(data.results))
      .catch(console.error);
  }, [movieId]);

  if (reviews.length < 1) {
      return (<div>
        <p>Pusto</p>
    </div>)
  }

  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <b>Auther: {review.author}</b>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
