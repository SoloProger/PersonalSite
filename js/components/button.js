export default function renderButton(title, link) {
  return `<a
    class="button button-link"
    href="${link}"
    target="_blank"
    rel="noreferrer"
      >
      ${title}
    </a>`;
}
