import { contacts } from "../utils/contacts.js";
import createContactCard from "../components/contact-card.js";
import stringToHtml from "../utils/string-to-html.js";

const cardWrapper = document.querySelector(".card__wrapper");

contacts.forEach((contact) => {
  const card = createContactCard(contact);
  cardWrapper.appendChild(stringToHtml(card, "div"));
});
