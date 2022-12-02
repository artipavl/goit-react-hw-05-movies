import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from './style';
import Header from 'components/Header/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <Box>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Box>
    </div>
  );
};

export default Home;
