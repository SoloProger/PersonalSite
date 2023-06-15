import { DataTypes } from 'sequelize';
import sequelize from '../../core/config/database';
import AboutSchema from '../schemas/about.schema';


export default sequelize.define<AboutSchema>('About', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
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
  },
  link_title: {
    type: DataTypes.STRING,
  },
  is_button: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
}, {
  tableName: 'about_cards',
  timestamps: false,
});