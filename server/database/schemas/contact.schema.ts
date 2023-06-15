import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from 'sequelize';


interface ContactSchema extends Model<InferAttributes<ContactSchema>, InferCreationAttributes<ContactSchema>> {
  id: CreationOptional<number>;
  icon: string;
  title: string;
  body: string;
  button_name: string;
  link: string;
}

export default ContactSchema;