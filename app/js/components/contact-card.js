export default function createContactCard(contact) {
  return `
      <div class="contact__card">
        <div class="card__header">
          <img src="${contact.icon}" alt="icon" />
          <h3>${contact.title}</h3>
        </div>
        <div class="card__body">${contact.body}</div>
        <div class="card__footer">
            <a
              href="${contact.link}"
              class="button button__link"
              target="_blank"
              rel="noreferrer"
            >
              ${contact.buttonName}
            </a>
        </div>
      </div>
      `;
}
