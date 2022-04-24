import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { News } from './entities/news.entity';
import { FileModule } from '../files/file.module';

@Module({
  controllers: [NewsController],
  providers: [NewsService],
  imports: [SequelizeModule.forFeature([News]), FileModule],
})
export class NewsModule {}
