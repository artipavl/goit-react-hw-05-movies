import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <Link to="movies">Movies</Link>
    </div>
  );
};

export default Home;