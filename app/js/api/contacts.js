export default async function contactsApi() {
  return await fetch("http://localhost:8000/contacts");
}
