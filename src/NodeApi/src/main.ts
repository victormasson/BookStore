import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  let PORT = process.env.PORT || 80

  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    // origin: '*',
    allowedHeaders: '*',
  }
  app.enableCors(corsOptions);


  const options = new DocumentBuilder()
    .setTitle('Books example')
    .setDescription('The bookstore API description')
    .setVersion('1.0')
    .addTag('books')
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('swagger', app, document)
  await app.listen(PORT)
}

bootstrap()