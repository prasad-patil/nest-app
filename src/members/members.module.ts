import { MemberSchema } from './schemas/member.schema';
import { Module } from '@nestjs/common';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Member', schema: MemberSchema }])],
  controllers: [MembersController],
  providers: [MembersService],
})
export class MembersModule { }
