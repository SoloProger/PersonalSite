import { DataTypes } from 'sequelize';
import sequelize from '../../core/config/database';
import ContactSchema from '../schemas/contact.schema';


export default sequelize.define<ContactSchema>('Contact', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
  },
  icon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  button_name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Посмотреть'
  },
  link: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'contacts',
  timestamps: false
});