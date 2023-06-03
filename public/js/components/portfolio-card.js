export default function createPortfolioCard(info, callback) {
  return `
        <div class="portfolio-card-wrapper">
            <img src="assets/img/${info.img}" alt="Изображение" />
            <div class="portfolio-card-content">
                <h3>${info.title}</h3>
                <p>${info.description}</p>
                ${info.isButton ? callback('Подробнее', info.link) : ''}
            </div>
        </div>
    `;
}
