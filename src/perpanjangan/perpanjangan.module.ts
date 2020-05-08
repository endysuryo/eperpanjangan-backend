import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PerpanjanganController } from './perpanjangan.controller';
import { PerpanjanganService } from './perpanjangan.service';
import { PerpanjanganSchema } from './schemas/perpanjangan.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Perpanjangan', schema: PerpanjanganSchema },
  ])],
  controllers: [PerpanjanganController],
  providers: [PerpanjanganService],
})
export class PerpanjanganModule {}
