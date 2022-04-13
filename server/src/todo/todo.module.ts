import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { Todo } from './entities/todo.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
  imports: [
    SequelizeModule.forFeature([Todo,]),
  ]
})
export class TodoModule { }
