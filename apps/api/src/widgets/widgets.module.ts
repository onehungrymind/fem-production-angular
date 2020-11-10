import { Module } from '@nestjs/common';
import { WidgetsService } from './widgets.service';
import { WidgetsController } from './widgets.controller';

@Module({
  controllers: [WidgetsController],
  providers: [WidgetsService]
})
export class WidgetsModule {}
