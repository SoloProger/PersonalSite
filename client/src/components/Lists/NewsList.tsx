import NewsCard, { NewsCardProps } from '../Cards/NewsCard.tsx';

function NewsList({ news }: { news: NewsCardProps[] }) {
  return (
    <div className='news-list'>
      {news.map((oneNews, idx) => (
        <NewsCard
          key={idx}
          title={oneNews.title}
          body={oneNews.body}
          tag={oneNews.tag}
          date={oneNews.date}
        />
      ))}
    </div>
  );
}

export default NewsList;
