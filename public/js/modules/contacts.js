import { contactsApi } from "../api/index.js";
import {
  createContactCard,
  renderButton,
  loader,
} from "../components/index.js";
import stringToHtml from "../utils/string-to-html.js";

const cardWrapper = document.querySelector(".card__wrapper");

const contactsModule = async () => {
  try {
    const response = await contactsApi();
    const { data } = await response.json();

    data.forEach((contact) => {
      const card = createContactCard(contact, renderButton);
      cardWrapper.appendChild(stringToHtml(card, "div"));
    });
  } catch (error) {
    cardWrapper?.appendChild(stringToHtml(loader(), "span"));
  }
};

export default contactsModule;