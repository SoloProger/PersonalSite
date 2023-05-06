export default async function aboutCardsApi() {
  return await fetch("http://localhost:8000/about");
}
