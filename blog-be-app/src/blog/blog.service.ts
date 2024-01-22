// src/blog/blog.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './blog.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private blogRepository: Repository<Blog>,
  ) {}

  async findOne(id: number): Promise<Blog> {
    return this.blogRepository.findOneOrFail({ where: { id } });
  }

  async findAll(): Promise<Blog[]> {
    return this.blogRepository.find();
  }

  async create(blog: Blog): Promise<Blog> {
    return this.blogRepository.save(blog);
  }
}
