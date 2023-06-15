import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from 'sequelize';


export default interface PortfolioSchema extends Model<InferAttributes<PortfolioSchema>, InferCreationAttributes<PortfolioSchema>> {
  id: CreationOptional<number>;
  img: string;
  title: string;
  description: string;
  is_button: string;
  link: string;
}