import { PartialType } from '@nestjs/mapped-types';
import { CreateWidgetDto } from './create-widget.dto';

export class UpdateWidgetDto extends PartialType(CreateWidgetDto) {}
