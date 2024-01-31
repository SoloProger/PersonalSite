import ContactCard from '../contact-card/ContactCard.tsx';

export default function Contacts() {
  return (
    <div className='contact__wrapper'>
      <div className='contact__header'>
        <h2>Контакты</h2>
      </div>
      <hr />
      <div className='card__wrapper'>
        <ContactCard
          icon='https://img.icons8.com/color/48/000000/telegram-app--v1.png'
          title='Телеграмм'
          body='Мой телеграмм. Можно писать в любое удобное время.'
          button='Написать'
          link='https://t.me/Andrei_1Solo'
        />
        <ContactCard
          icon='https://img.icons8.com/color/48/000000/github.png'
          title='GitHub'
          body='Мой GitHub-аккаунт. Там вы найдете исходный код проекта.'
          button='Посмотреть'
          link='https://github.com/SoloProger'
        />
        <ContactCard
          icon='https://img.icons8.com/color/48/000000/linkedin.png'
          title='LinkedIn'
          body='Мой LinkedIn. Портфолио на иностранном языке.'
          button='Написать'
          link='https://www.linkedin.com/in/andrei-solonnickov-767689210/'
        />
      </div>
    </div>
  );
}
