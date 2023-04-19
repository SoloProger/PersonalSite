export default function createAboutCard(info) {
  return `
    <div class="about-card-wrapper">
      <div class="about-card-text">
        <h2>${info.title}</h2>
        <p>${info.description}</p>
            <a
              class="button button-link"
              href=${info.link}
              target="_blank"
              rel="noreferrer"
            >
              ${info.linkTitle}
            </a>
      </div>
    </div>
  `;
}
