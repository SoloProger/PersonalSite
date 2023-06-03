export default function createNavLink(link) {
  return `
    <li class="nav__item">
        <a class="nav__item__link" href="${link.path}.html">${link.name}</a>
    </li>
  `;
}
