import React from "react";
import PropTypes from "prop-types";
import ContactCard from "../Cards/ContactCard";

const ContactList = ({ contacts }) => {
  return (
    <div className="card__wrapper">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.key}
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

ContactList.propTypes = {
  contacts: PropTypes.array
};

export default ContactList;
