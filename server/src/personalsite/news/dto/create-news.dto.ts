import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';


export class CreateNewsDto {
    @ApiProperty({ example: 'hello', description: 'Заголовок news' })
    @IsString({ message: 'Должна быть строка!' })
    readonly title: string;

    @ApiProperty({ example: 'hello body', description: 'Описание news' })
    @IsString({ message: 'Должна быть строка!' })
    readonly description: string;

    @ApiProperty({ example: 'habr', description: 'Tag news' })
    @IsString({ message: 'Должна быть строка!' })
    readonly tag: string;

}
