import Button from '../UI/button/Button.tsx';

export interface PortfolioCardProps {
  img: string;
  title: string;
  description: string;
  link: string;
  isButton?: boolean;
}

function PortfolioCard({
  img,
  title,
  description,
  link,
  isButton,
}: PortfolioCardProps) {
  return (
    <div className='portfolio-card-wrapper'>
      <img src={img} alt='Изображение' />
      <div className='portfolio-card-content'>
        <h3>{title}</h3>
        <p>{description}</p>
        {isButton ? (
          <Button>
            <a
              href={link}
              className='button__link'
              target='_blank'
              rel='noreferrer'
            >
              Подробнее
            </a>
          </Button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default PortfolioCard;
