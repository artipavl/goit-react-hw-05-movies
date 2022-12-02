import { getTrending } from 'Api/Api';
import TrendingList from 'components/TrendingList/TrendingList';
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
  
 useEffect(() => {
   getTrending().then(data => setData(data)).catch(console.error);
 }, []);

 return (
   <div>
     <h1>Trending todey</h1>
     <TrendingList data={data} />
     <Outlet />
   </div>
 );
};

export default Home;