import { Dependencies, Injectable } from '@nestjs/common';
import { getRepositoryToken, InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';

@Injectable()
@Dependencies(getRepositoryToken(Admin))
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private userRepo: Repository<Admin>,
  ) {}
  create(createAdminDto: Admin) {
    return this.userRepo.save(createAdminDto);
  }

  // findAll() {
  //   return `This action returns all admin`;
  // }
  findData(): Promise<Admin[]> {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
