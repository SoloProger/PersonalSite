export interface NewsCardProps {
  title: string;
  date: string;
  tag: string;
  body: string;
}

function NewsCard({ title, date, tag, body }: NewsCardProps) {
  return (
    <div className='news-card'>
      <img src='/images/newsImg.png' alt='' />
      <div className='card-content'>
        <h3>{title}</h3>
        <div className='card-navbar'>
          <h4 className='date'>{date}</h4>
          <h4 className='tag'>{tag}</h4>
        </div>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default NewsCard;
