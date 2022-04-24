import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import { Todo } from './personalsite/todo/entities/todo.entity';
import { TodoModule } from './personalsite/todo/todo.module';
import { NewsModule } from './personalsite/news/news.module';
import { News } from './personalsite/news/entities/news.entity';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'personalsite/static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      models: [Todo, News],
      autoLoadModels: true,
    }),
    TodoModule,
    NewsModule,
  ],
  controllers: [],
})
export class AppModule { }
