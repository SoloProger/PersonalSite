import generate from './generator.ts';

export const navbarLinks = [
  {
    name: 'Главная',
    path: '/',
    uniq: generate(),
  },
  {
    name: 'Обо_мне',
    path: '/about',
    uniq: generate(),
  },
  {
    name: 'Портфолио',
    path: '/portfolio',
    uniq: generate(),
  },
  {
    name: 'Todo',
    path: '/todo',
    uniq: generate(),
  },
];
