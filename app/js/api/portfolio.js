export default async function portfolioApi() {
  return await fetch("http://localhost:8000/portfolio");
}
