import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { News } from './entities/news.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('News')
@Controller('ps/api/news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @ApiOperation({ summary: 'Создание news' })
  @ApiResponse({ status: 200, type: News })
  @UseInterceptors(FileInterceptor('image'))
  @Post('create')
  create(@Body() createNewsDto: CreateNewsDto, @UploadedFile() image) {
    return this.newsService.create(createNewsDto, image);
  }

  @ApiOperation({ summary: 'Получение news' })
  @ApiResponse({ status: 200, type: [News] })
  @Get('all')
  findAll() {
    return this.newsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
    return this.newsService.update(+id, updateNewsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsService.remove(+id);
  }
}
