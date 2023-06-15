import { baseApiUrl } from '../config/api.js';

export default async function navigationLinkApi() {
  return await fetch(`${baseApiUrl}/links`);
}
