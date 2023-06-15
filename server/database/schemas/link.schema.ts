import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from 'sequelize';


export default interface LinkSchema extends Model<InferAttributes<LinkSchema>, InferCreationAttributes<LinkSchema>>{
  id: CreationOptional<number>;
  path: string;
  name: string;
}