import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FileService } from '../files/file.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './entities/news.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectModel(News) private newsRepository: typeof News,
    private fileService: FileService,
  ) {}

  async create(createNewsDto: CreateNewsDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const news = await this.newsRepository.create({
      ...createNewsDto,
      image: fileName,
    });
    return news;
  }

  async findAll(): Promise<News[]> {
    const news = await this.newsRepository.findAll({ include: { all: true } });
    return news;
  }

  findOne(id: number) {
    return `This action returns a #${id} news`;
  }

  update(id: number, updateNewsDto: UpdateNewsDto) {
    return `This action updates a #${id} news`;
  }

  remove(id: number) {
    return `This action removes a #${id} news`;
  }
}
