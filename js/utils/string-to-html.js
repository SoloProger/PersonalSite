export default function stringToHtml(string, selector) {
    return new DOMParser()
      .parseFromString(string, "text/html")
      .querySelector(selector);
  }
  