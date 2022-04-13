import React from "react";
import { contacts } from "../../utils/contactList";
import ContactList from "../Lists/ContactList";

export default function Contacts() {
  return (
    <div className="contact__wrapper">
      <div className="contact__header">
        <h2>Контакты</h2>
      </div>
      <hr />
      <ContactList contacts={contacts} />
    </div>
  );
}
