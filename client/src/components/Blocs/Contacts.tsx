import { contacts } from '../../utils/contactList.ts';
import ContactList from '../Lists/ContactList.tsx';

export default function Contacts() {
  return (
    <div className='contact__wrapper'>
      <div className='contact__header'>
        <h2>Контакты</h2>
      </div>
      <hr />
      <ContactList contacts={contacts} />
    </div>
  );
}
