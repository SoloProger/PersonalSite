export default function createNavLink(link) {
  return `
    <li class="nav__item">
        <a class="nav__item__link" href="${link.path}">${link.name}</a>
    </li>
  `;
}
