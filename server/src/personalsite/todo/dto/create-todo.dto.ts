import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTodoDto {
  @ApiProperty({ example: 'hello', description: 'Заголовок todos' })
  @IsString({ message: 'Должна быть строка!' })
  readonly title: string;

  @ApiProperty({ example: 'hello body', description: 'Описание todos' })
  @IsString({ message: 'Должна быть строка!' })
  readonly description: string;
}
