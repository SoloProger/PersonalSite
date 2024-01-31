import { useState } from 'react';
import NewsList from '../Lists/NewsList.tsx';
import Loader from '../UI/loader/Loader.tsx';
// import { useSelector } from 'react-redux';

const News = () => {
  const [flag, setFlag] = useState(true);

  // const news = useSelector((state) => state.news.news);
  //
  // const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  // const getTodo = async () => {
  //   setLoading(true);
  //   const data = newsData;
  //   // const data = await axios.get("http://localhost:5000/news/all");
  //   // const newsData = data.data;
  //   setNews([...news, ...data]);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   getTodo();
  // }, []);

  return (
    <div className='news-wrapper'>
      {flag ? <sup>Soon</sup> : ''}
      <div>
        <h2>Новости</h2>
      </div>
      <hr />
      {loading ? (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Loader />
        </div>
      ) : (
        <NewsList news={[]} />
      )}
    </div>
  );
};

export default News;
