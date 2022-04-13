import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface TodoCreationsAttrs {
  title: string;
  description: string;
}

@Table({ tableName: 'todos' })
export class Todo extends Model<Todo, TodoCreationsAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'hello', description: 'Заголовок todos' })
  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  title: string;

  @ApiProperty({ example: 'hello body', description: 'Описание todos' })
  @Column({
    type: DataType.TEXT,
    unique: false,
    allowNull: false,
  })
  description: string;
}
