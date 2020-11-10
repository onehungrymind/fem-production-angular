import { Module } from '@nestjs/common';
import { WidgetsModule } from '../widgets/widgets.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [WidgetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
