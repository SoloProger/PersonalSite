import { links } from "../utils/links.js";
import createNavLink from "../components/nav-link.js";
import stringToHtml from "../utils/string-to-html.js";

const linkList = document.querySelector(".nav__list");

links.forEach((link) => {
  const navLink = createNavLink(link);
  linkList.appendChild(stringToHtml(navLink, "li"));
});
