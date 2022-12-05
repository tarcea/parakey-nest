import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { KeyDto } from './dto';
import { KeyService } from './key.service';

@Controller('keys')
export class KeyController {
  constructor(private keyService: KeyService) {}
  @Get()
  getKeys() {
    return this.keyService.getKeys();
  }

  @Post()
  addKey(@Body() dto: KeyDto) {
    return this.keyService.addKey(dto);
  }

  @Delete()
  deleteKey(@Body() dto: KeyDto) {
    return this.keyService.deleteKey(dto);
  }
}
