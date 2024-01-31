import { useState } from 'react';
import NewsList from './NewsList.tsx';
import Loader from '../shared/ui/loader/Loader.tsx';

function News() {
  const arr = [
    { title: "Hello", body: "world", created: "Подробнее" },
    { title: "Hello2", body: "world2", created: "Подробнее" },
    { title: "Hello3", body: "world3", created: "Подробнее" },
  ];

  // const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // const getTodo = async () => {
  //   setLoading(true);
  //   const data = await axios.get("http://127.0.0.1:8000/api/post/");
  //   const newsData = data.data;
  //   setNews([...news, ...newsData]);
  //   setLoading(false);
  // };
  //
  // useEffect(() => {
  //   getTodo();
  // }, []);

  return (
    <div className='contact__wrapper'>
      <div className='contact__header'>
        <h2>Новости</h2>
      </div>
      <hr />
      {loading ? (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Loader />
        </div>
      ) : (
        <NewsList news={arr} />
      )}
    </div>
  );
}

export default News;
