import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo) private todoRepository: typeof Todo) { }

  async create(createTodoDto: CreateTodoDto) {
    const todo = await this.todoRepository.create(createTodoDto);
    return todo;
  }

  async findAll(): Promise<Todo[]> {
    const todos = await this.todoRepository.findAll({ include: { all: true } });
    return todos;
  }

  async findOne(id: number): Promise<Todo> {
    const todo = await this.todoRepository.findOne({ where: { id }, include: { all: true } });
    return todo;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  async remove(id: number): Promise<any> {
    const todo = await this.todoRepository.findOne({ where: { id }, include: { all: true } });
    await todo.destroy();
    return todo;
  }
}
