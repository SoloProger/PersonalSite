/**
 *  Генератор уникальных ключей для списков.
 *
 *  Универсальная утилита. Можно переиспользовать в любом месте.
 *
 */

export default function generate(): string {
  const chars: string =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const keyLength: number = 10;
  let key: string = "";
  for (let i = 0; i <= keyLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    key += chars.substring(randomNumber, randomNumber + 1);
  }
  return key;
}
