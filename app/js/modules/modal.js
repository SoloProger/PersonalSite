import createModal from "../components/modal-ui.js";
import stringToHtml from "../utils/string-to-html.js";
import footerModalContent from "../components/footer-modal-content.js";

const modalPortal = document.querySelector("#modalPortal");
const modalTrigger = document.querySelector(".about-site");

const modal = createModal(footerModalContent());

modalPortal.appendChild(stringToHtml(modal, "div"));

modalLogic();

function modalLogic() {
  const modalEl = document.querySelector("#modal");

  if (!modalEl) return;

  modalTrigger.onclick = () => modalEl.classList.add("active");

  window.onclick = (event) => closeModal(event, modalEl);
}

function closeModal(event, modalEl) {
  if (!modalEl) return;
  event.target == modalEl && modalEl.classList.remove("active");
}
