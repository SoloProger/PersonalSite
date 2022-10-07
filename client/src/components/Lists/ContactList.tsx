import ContactCard from "../Cards/ContactCard";
import { Contacts } from "../../types/lists/contact";

const ContactList = ({ contacts }: Contacts) => {
  return (
    <div className="card__wrapper">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.key}
          icon={contact.icon}
          title={contact.title}
          body={contact.body}
          buttonName={contact.buttonName}
          link={contact.link}
        />
      ))}
    </div>
  );
};

export default ContactList;
