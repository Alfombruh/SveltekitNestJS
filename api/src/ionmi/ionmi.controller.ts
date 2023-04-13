import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IonmiService } from './ionmi.service';
import { CreateIonmiDto } from './dto/create-ionmi.dto';
import { UpdateIonmiDto } from './dto/update-ionmi.dto';

@Controller('ionmi')
export class IonmiController {
  constructor(private readonly ionmiService: IonmiService) {}

  @Post()
  create(@Body() createIonmiDto: CreateIonmiDto) {
    return this.ionmiService.create(createIonmiDto);
  }

  @Get()
  findAll() {
    return this.ionmiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ionmiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIonmiDto: UpdateIonmiDto) {
    return this.ionmiService.update(+id, updateIonmiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ionmiService.remove(+id);
  }
}
