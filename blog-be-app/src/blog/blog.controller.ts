// src/blog/blog.controller.ts
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from './blog.entity';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  findAll(): Promise<Blog[]> {
    return this.blogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Blog | undefined> {
    return this.blogService.findOne(Number(id));
  }

  @Post()
  create(@Body() blog: Blog): Promise<Blog> {
    return this.blogService.create(blog);
  }
}
