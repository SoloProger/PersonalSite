import { portfolioCards } from "../utils/portfolio-cards.js";
import createPortfolioCard from "../components/portfolio-card.js";
import stringToHtml from "../utils/string-to-html.js";
import renderButton from "../components/button.js";

const portfolio = document.querySelector(".portfolio");

portfolioCards.forEach((link) => {
  const portfolioCard = createPortfolioCard(link, renderButton);
  portfolio.appendChild(stringToHtml(portfolioCard, "div"));
});
