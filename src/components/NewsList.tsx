import NewsCard from './NewsCard';
import { News } from '../contracts/models/News.ts';

interface NewsListProps {
  news: News[];
}

function NewsList({ news }: NewsListProps) {
  return (
    <div className='card__wrapper'>
      {news.map((item) => (
        <NewsCard title={item.title} body={item.body} created={item.created} />
      ))}
    </div>
  );
}

export default NewsList;
