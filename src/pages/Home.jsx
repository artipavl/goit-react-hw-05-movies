import { getTrending } from 'Api/Api';
import TrendingList from 'components/TrendingList/TrendingList';
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
  const [data, setData] = useState([]);
  
 useEffect(() => {
   getTrending().then(data => setData(data)).catch(console.error);
 }, []);

 return (
   <div>
     <h1>Trending todey</h1>
     <TrendingList data={data} />
   </div>
 );
};

export default Home;