import { Dialect, Sequelize } from 'sequelize';

const _config = {
  db: process.env.DATABASE_NAME as string,
  user: process.env.DATABASE_USER as string,
  password: process.env.DATABASE_PASSWORD as string,
  options: {
    host: process.env.DATABASE_HOST as string,
    dialect: process.env.DATABASE_TYPE as Dialect,
  },
};

export default new Sequelize(
  _config.db,
  _config.user,
  _config.password,
  _config.options,
);

