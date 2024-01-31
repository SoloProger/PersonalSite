interface NewsCardProps {
  title: string;
  body: string;
  created: string;
}
function NewsCard({ title, body, created }: NewsCardProps) {
  return (
    <div className='contact__card'>
      <div className='card__header'>
        <h3>{title}</h3>
      </div>
      <div className='card__body'>{body}</div>
      <div className='card__footer'>{created}</div>
    </div>
  );
}

export default NewsCard;
