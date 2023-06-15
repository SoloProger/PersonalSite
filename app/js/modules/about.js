import { aboutCardsApi } from '../api/index.js';
import { createAboutCard, loader, renderButton } from '../components/index.js';
import stringToHtml from '../utils/string-to-html.js';

const aboutList = document.querySelector('.about-list');

const about = async () => {
  try {
    const response = await aboutCardsApi();
    const data = await response.json();

    data.forEach((card) => {
      const _card = createAboutCard(card, renderButton);
      aboutList.appendChild(stringToHtml(_card, 'div'));
    });
  } catch (error) {
    aboutList?.appendChild(stringToHtml(loader(), 'span'));
  }
};

export default about;
