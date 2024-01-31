import ContactCard, { ContactCardProps } from '../Cards/ContactCard.tsx';

const ContactList = ({ contacts }: { contacts: ContactCardProps[] }) => {
  return (
    <div className='card__wrapper'>
      {contacts.map((contact, idx) => (
        <ContactCard
          key={idx}
          icon={contact.icon}
          title={contact.title}
          body={contact.body}
          button={contact.button}
          link={contact.link}
        />
      ))}
    </div>
  );
};

export default ContactList;
