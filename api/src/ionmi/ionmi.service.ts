import { Injectable } from '@nestjs/common';
import { CreateIonmiDto } from './dto/create-ionmi.dto';
import { UpdateIonmiDto } from './dto/update-ionmi.dto';

@Injectable()
export class IonmiService {
  create(createIonmiDto: CreateIonmiDto) {
    return 'This action adds a new ionmi';
  }

  findAll() {
    return `This action returns all ionmi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ionmi`;
  }

  update(id: number, updateIonmiDto: UpdateIonmiDto) {
    return `This action updates a #${id} ionmi`;
  }

  remove(id: number) {
    return `This action removes a #${id} ionmi`;
  }
}
