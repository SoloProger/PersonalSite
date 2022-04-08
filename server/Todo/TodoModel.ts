import { sequelize } from "../db";
import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from "sequelize";


class Todo extends Model<InferAttributes<Todo>, InferCreationAttributes<Todo>>{
    declare id: CreationOptional<number>;
    declare title: string;
    declare description: string;
    declare completed: boolean;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}


Todo.init({
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
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, {
    tableName: 'todos',
    sequelize
});

export default Todo;