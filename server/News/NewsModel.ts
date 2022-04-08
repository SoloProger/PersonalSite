import { sequelize } from "../db";
import { Model, DataType, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from "sequelize";


class News extends Model<InferAttributes<News>, InferCreationAttributes<News>>{
    declare id: CreationOptional<number>;
    declare title: string;
    declare description: string;
    declare date: Date;
    declare tag: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

News.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    tag: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, {
    tableName: "news",
    sequelize
});

export default News;