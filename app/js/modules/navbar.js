import navigationLinkApi from "../api/navigationLink.js";
import createNavLink from "../components/nav-link.js";
import stringToHtml from "../utils/string-to-html.js";
import loader from "../components/loader.js";

const linkList = document.querySelector(".nav__list");

const navbar = async () => {
  try {
    const response = await navigationLinkApi();
    const links = await response.json();
    links.forEach((link) => {
      const navLink = createNavLink(link);
      linkList.appendChild(stringToHtml(navLink, "li"));
    });
  } catch (error) {
    linkList.appendChild(stringToHtml(loader(), "span"));
  }
};

navbar();
