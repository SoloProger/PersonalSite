import Button from '../../shared/ui/button/Button.tsx';

interface ProjectProps {
  img: string;
  title: string;
  description: string;
  link: string;
}

export default function Project(props: ProjectProps) {
  return (
    <div className='content__wrapper'>
      <div className='content__img'>
        <img src={props.img} alt='Изображение' className='avatar' />
      </div>
      <div className='content_text project'>
        <div className='content__text__header'>
          <h3>{props.title}</h3>
        </div>
        <div className='content__body project__body'>
          <p>{props.description}</p>
        </div>
        <div className='content__footer'>
          <Button>
            <a href={props.link} className='button__link'>
              Ознакомиться
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
