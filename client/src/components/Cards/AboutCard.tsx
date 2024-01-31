import Button from '../UI/button/Button.tsx';

interface AboutCardProps {
  title: string;
  description: string;
  buttonLink: string;
  buttonTitle: string;
  isButton: boolean;
}

function AboutCard({
  title,
  description,
  buttonTitle,
  buttonLink,
  isButton,
}: AboutCardProps) {
  return (
    <div className='about-card-wrapper'>
      <div className='about-card-text'>
        <h2>{title}</h2>
        <p>{description}</p>
        {isButton ? (
          <Button>
            <a
              className='button-link'
              href={buttonLink}
              target='_blank'
              rel='noreferrer'
            >
              {buttonTitle}
            </a>
          </Button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default AboutCard;
