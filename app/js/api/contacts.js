import { baseApiUrl } from '../config/api.js';

export default async function contactsApi() {
  return await fetch(`${baseApiUrl}/contacts`);
}
