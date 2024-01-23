// src/blog/blog.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './blog.entity';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private blogRepository: Repository<Blog>,
  ) {}

  async findOne(id: number): Promise<Blog> {
    const blog = await this.blogRepository.findOne({ where: { id } });
    if (!blog) {
      throw new NotFoundException(`Blog with id ${id} not found`);
    }
    return blog;
  }

  async findAll(): Promise<Blog[]> {
    return this.blogRepository.find();
  }

  async create(blogDto: CreateBlogDto): Promise<Blog> {
    const blog = this.blogRepository.create(blogDto);
    return this.blogRepository.save(blog);
  }

  async update(id: number, updateBlogDto: UpdateBlogDto): Promise<Blog> {
    const blog = await this.findOne(id);
    if (!blog) {
      throw new NotFoundException(`Blog with id ${id} not found`);
    }
    return this.blogRepository.save({ ...blog, ...updateBlogDto });
  }

  async remove(id: number): Promise<void> {
    const blog = await this.findOne(id);
    if (!blog) {
      throw new NotFoundException(`Blog with id ${id} not found`);
    }
    await this.blogRepository.remove(blog);
  }
}
