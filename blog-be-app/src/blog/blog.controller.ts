// src/blog/blog.controller.ts
import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from './blog.entity';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

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
  create(@Body() createBlogDto: CreateBlogDto): Promise<Blog> {
    return this.blogService.create(createBlogDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateBlogDto: UpdateBlogDto,
  ): Promise<Blog> {
    return this.blogService.update(id, updateBlogDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.blogService.remove(id);
  }
}
