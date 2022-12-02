// import { getTrending } from 'Api/Api';
import Header from 'components/Header/Header';
import { Box } from 'components/MovieDetalsInformation/Style';
import { Suspense } from 'react';
// import TrendingList from 'components/TrendingList/TrendingList';
// import { useEffect } from 'react';
// import { useState } from 'react';
import { Outlet } from 'react-router-dom';

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
