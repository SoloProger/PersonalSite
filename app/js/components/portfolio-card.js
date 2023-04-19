export default function createPortfolioCard(info) {
  return `
        <div class="portfolio-card-wrapper">
            <img src="${info.img}" alt="Изображение" />
            <div class="portfolio-card-content">
            <h3>${info.title}</h3>
            <p>${info.description}</p>  
                <a
                    href="${info.link}"
                    class="button button__link"
                    target="_blank"
                    rel="noreferrer"
                >
                    Подробнее
                </a>
            </div>
        </div>
    `;
}
