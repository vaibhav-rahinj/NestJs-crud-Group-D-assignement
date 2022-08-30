import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserdataController } from './userdata.controller';
import { UserdataEntity } from './userdata.entity';
import { UserdataService } from './userdata.service';


@Module({
    imports:[TypeOrmModule.forFeature([UserdataEntity])],
    // controllers:[UserdataController],
    // providers:[UserdataService]
})
export class UserdataModule {}
