import { navigationLinkApi } from "../api/index.js";
import { createNavLink, loader } from "../components/index.js";
import stringToHtml from "../utils/string-to-html.js";

const linkList = document.querySelector(".nav__list");

const navbar = async () => {
  try {
    const response = await navigationLinkApi();
    const { data } = await response.json();
    data.forEach((link) => {
      const navLink = createNavLink(link);
      linkList.appendChild(stringToHtml(navLink, "li"));
    });
  } catch (error) {
    linkList.appendChild(stringToHtml(loader(), "span"));
  }
};

export default navbar;
