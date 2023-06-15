import { baseApiUrl } from '../config/api.js';

export default async function portfolioApi() {
  return await fetch(`${baseApiUrl}/portfolio`);
}
