import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { TimeKeyDto } from './dto';
import { KeyService } from './key.service';

@Controller('keys')
export class KeyController {
  constructor(private keyService: KeyService) {}
  @Get()
  getKeys() {
    return this.keyService.getKeys();
  }

  @Post()
  addKey(@Body() dto: TimeKeyDto) {
    return this.keyService.addKey(dto);
  }

  @Delete()
  deleteKey(@Body() dto: TimeKeyDto) {
    return this.keyService.deleteKey(dto);
  }
}
