import { PartialType } from '@nestjs/mapped-types';
import { CreateIonmiDto } from './create-ionmi.dto';

export class UpdateIonmiDto extends PartialType(CreateIonmiDto) {}
