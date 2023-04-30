export default async function navigationLinkApi() {
  return await fetch("http://localhost:8000/links", {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

