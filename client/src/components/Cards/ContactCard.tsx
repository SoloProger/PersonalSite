import Button from '../UI/button/Button.js';

export interface ContactCardProps {
  icon: string;
  title: string;
  body: string;
  link: string;
  button: string;
}

export default function ContactCard({
  icon,
  title,
  body,
  link,
  button,
}: ContactCardProps) {
  return (
    <div className='contact__card'>
      <div className='card__header'>
        <img src={icon} alt='icon' />
        <h3>{title}</h3>
      </div>
      <div className='card__body'>{body}</div>
      <div className='card__footer'>
        <Button>
          <a
            href={link}
            className='button__link'
            target='_blank'
            rel='noreferrer'
          >
            {button}
          </a>
        </Button>
      </div>
    </div>
  );
}
