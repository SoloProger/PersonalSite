import { contacts } from "../utils/contacts.js";
import createContactCard from "../components/contact-card.js";
import stringToHtml from "../utils/string-to-html.js";
import renderButton from "../components/button.js";

const cardWrapper = document.querySelector(".card__wrapper");

contacts.forEach((contact) => {
  const card = createContactCard(contact, renderButton);
  cardWrapper.appendChild(stringToHtml(card, "div"));
});
