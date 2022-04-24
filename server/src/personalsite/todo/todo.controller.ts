import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Todo } from './entities/todo.entity';

@ApiTags('Todos')
@Controller('ps/api/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  @ApiOperation({ summary: 'Создание todo' })
  @ApiResponse({ status: 200, type: Todo })
  @Post('create')
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @ApiOperation({ summary: 'Получение todos' })
  @ApiResponse({ status: 200, type: [Todo] })
  @Get('all')
  findAll() {
    return this.todoService.findAll();
  }

  @ApiOperation({ summary: 'Получение todo' })
  @ApiResponse({ status: 200, type: Todo })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @ApiOperation({ summary: 'Удаление todo' })
  @ApiResponse({ status: 200, type: Todo })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
