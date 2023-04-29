import navigationLinkApi from "../api/navigationLink.js";
import createNavLink from "../components/nav-link.js";
import stringToHtml from "../utils/string-to-html.js";

const linkList = document.querySelector(".nav__list");

const navbar = async () => {
  const response = await navigationLinkApi();
  const _links = await response.json();
  _links.forEach((_link) => {
    const navLink = createNavLink(_link);
    linkList.appendChild(stringToHtml(navLink, "li"));
  });
};

navbar();

