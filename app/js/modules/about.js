import { aboutCardsInfo } from "../utils/about-cards-info.js";
import createAboutCard from "../components/about-card.js";
import stringToHtml from "../utils/string-to-html.js";

const aboutList = document.querySelector(".about-list");

aboutCardsInfo.map((info) => {
  const card = createAboutCard(info);
  aboutList.appendChild(stringToHtml(card, "div"));
});
