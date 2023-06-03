export default async function navigationLinkApi() {
  return await fetch("http://localhost:8000/links");
}
