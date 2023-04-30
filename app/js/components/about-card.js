export default function createAboutCard(info, callback) {
  return `
    <div class="about-card-wrapper">
      <div class="about-card-text">
        <h2>${info.title}</h2>
        <p>${info.description}</p>
        ${info.isButton ? callback(info.linkTitle, info.link) : ""}
      </div>
    </div>
  `;
}
