import { baseApiUrl } from '../config/api.js';

export default async function aboutCardsApi() {
  return await fetch(`${baseApiUrl}/about`);
}
