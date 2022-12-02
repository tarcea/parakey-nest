import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KeyModule } from './key/key.module';

@Module({
  imports: [KeyModule, ConfigModule.forRoot()],
})
export class AppModule {}
