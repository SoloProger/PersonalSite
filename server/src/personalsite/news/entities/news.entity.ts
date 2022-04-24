import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface NewsCreationsAttrs {
    title: string;
    description: string;
    tag: string;
    image: string;
}


@Table({ tableName: 'news' })
export class News extends Model<News, NewsCreationsAttrs> {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: 'hello', description: 'Заголовок news' })
    @Column({
        type: DataType.STRING,
        unique: false,
        allowNull: false,
    })
    title: string;

    @ApiProperty({ example: 'hello body', description: 'Описание news' })
    @Column({
        type: DataType.TEXT,
        unique: false,
        allowNull: false,
    })
    description: string;

    @ApiProperty({ example: 'habr', description: 'Tag - источник новости' })
    @Column({
        type: DataType.STRING,
        unique: false,
        allowNull: false,
    })
    tag: string;

    @ApiProperty({ example: 'Image 1', description: 'Картинка' })
    @Column({ type: DataType.STRING })
    image: string;
}  
