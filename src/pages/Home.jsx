import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Section } from './style';
import Header from 'components/Header/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <Section>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Section>
    </div>
  );
};

export default Home;
