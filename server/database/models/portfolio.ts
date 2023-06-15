import { DataTypes } from 'sequelize';
import sequelize from '../../core/config/database';
import PortfolioSchema from '../schemas/portfolio.schema';

export default sequelize.define<PortfolioSchema>('Portfolio', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '#',
  },
  is_button: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
}, {
  tableName: 'portfolio',
  timestamps: false,
});