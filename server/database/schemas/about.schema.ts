import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from 'sequelize';


export default interface AboutSchema extends Model<InferAttributes<AboutSchema>, InferCreationAttributes<AboutSchema>>{
  id: CreationOptional<number>;
  title: string;
  description: string;
  link: string;
  link_title: string;
  is_button: string;
}