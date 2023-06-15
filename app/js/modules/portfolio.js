import { portfolioApi } from "../api/index.js";
import {
  createPortfolioCard,
  loader,
  renderButton,
} from "../components/index.js";
import stringToHtml from "../utils/string-to-html.js";

const portfolioList = document.querySelector(".portfolio");

const portfolio = async () => {
  try {
    const response = await portfolioApi();
    const data  = await response.json();

    data.forEach((project) => {
      const portfolioCard = createPortfolioCard(project, renderButton);
      portfolioList.appendChild(stringToHtml(portfolioCard, "div"));
    });
  } catch (error) {
    portfolioList?.appendChild(stringToHtml(loader(), "span"));
  }
};

export default portfolio;
