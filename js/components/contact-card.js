export default function createContactCard(contact, callback) {
  return `
      <div class="contact__card">
        <div class="card__header">
          <img src="${contact.icon}" alt="icon" />
          <h3>${contact.title}</h3>
        </div>
        <div class="card__body">${contact.body}</div>
        <div class="card__footer">
            ${callback(contact.buttonName, contact.link)}
        </div>
      </div>
      `;
}
