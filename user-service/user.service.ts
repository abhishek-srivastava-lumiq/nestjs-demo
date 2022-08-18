import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
@Dependencies(getRepositoryToken(User))
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {
    // this.usersRepository = usersRepository;
  }

  private readonly blogs: any[] = [
    {
      id: 1,
      data: 'NA',
    },
  ];

  create(data: any) {
    this.blogs.push(data);
  }

  findData(): Promise<User[]> {
    return this.userRepo.find();
  }

  getUserData(): string {
    return 'Abhishek comes from get User Data';
  }

  findAll() {
    // return this.usersRepository.find();
  }

  //   findOne(id) {
  //     return this.usersRepository.findOneBy({ id });
  //   }

  //   async remove(id) {
  //     await this.usersRepository.delete(id);
  //   }
}
