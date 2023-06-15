import { DataTypes } from 'sequelize';
import sequelize from '../../core/config/database';
import LinkSchema from '../schemas/link.schema';

export default sequelize.define<LinkSchema>('Link', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'navigation',
  timestamps: false,
});