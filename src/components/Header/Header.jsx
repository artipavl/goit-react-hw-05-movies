// import { Link } from 'react-router-dom';
import { NaveLink, HeaderPage, Nav } from './Style.js';

const Header = () => {
  return (
    <HeaderPage>
      <Nav>

          <NaveLink to="/">Home</NaveLink>

          <NaveLink to="movies">Movies</NaveLink>

      </Nav>
    </HeaderPage>
  );
};

export default Header;
