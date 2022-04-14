import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT;
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Документация API для персонального сайта')
    .setDescription(
      'Подробная документация для персонального сайта, сгенерированная с помощью Swagger',
    )
    .setVersion('1.0.0')
    .addTag('Personal Site')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  await app.listen(PORT, () =>
    console.log(`Server started. http://localhost:${PORT}`),
  );
}
bootstrap();
