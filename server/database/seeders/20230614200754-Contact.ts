/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('contacts', [
      {
        title: 'Telegram',
        icon: 'https://img.icons8.com/color/48/000000/telegram-app--v1.png',
        link: 'https://t.me/itserafim'
      },
      {
        title: 'GitHub',
        icon: 'https://img.icons8.com/color/48/000000/github.png',
        link: 'https://github.com/ITSerafim'
      },
      {
        title: 'LinkedIn',
        icon: 'https://img.icons8.com/color/48/000000/linkedin.png',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
