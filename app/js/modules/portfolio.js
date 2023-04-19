import { portfolioCards } from "../utils/portfolio-cards.js";
import createPortfolioCard from "../components/portfolio-card.js";
import stringToHtml from "../utils/string-to-html.js";

const portfolio = document.querySelector(".portfolio");

portfolioCards.forEach((link) => {
  const portfolioCard = createPortfolioCard(link);
  portfolio.appendChild(stringToHtml(portfolioCard, "div"));
});
