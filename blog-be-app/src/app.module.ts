// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './blog/blog.entity';
import { BlogController } from './blog/blog.controller';
import { BlogService } from './blog/blog.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'ozpsql',
      database: 'blog_app',
      entities: [Blog],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Blog]),
  ],
  controllers: [BlogController],
  providers: [BlogService],
})
export class AppModule {}
