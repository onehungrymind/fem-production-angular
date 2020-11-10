import { Widget } from '@fem/api-interfaces';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { WidgetsService } from './widgets.service';

@Controller('widgets')
export class WidgetsController {
  constructor(private readonly widgetsService: WidgetsService) {}

  @Post()
  create(@Body() widget: Widget) {
    return this.widgetsService.create(widget);
  }

  @Get()
  findAll() {
    return this.widgetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.widgetsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() widget: Widget) {
    return this.widgetsService.update(id, widget);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.widgetsService.remove(id);
  }
}
