export default function createModal(html = "") {
  return `
    <div id="modal" class="modal">
        <div class="modal__content">${html}</div>  
    </div>
  `;
}
