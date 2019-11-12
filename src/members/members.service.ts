import { CreateMemberDto } from './dto/create-member.dto';
import { Injectable, Param } from '@nestjs/common';
import { Model } from 'mongoose';
import { Member } from './interfaces/member.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MembersService {
    constructor(
        @InjectModel('Member')
        private readonly memberModel: Model<Member>
    ) { }

    async findAll(): Promise<Member[]> {
        return await this.memberModel.find();
    }
    async findOne(id: string): Promise<Member> {
        return await this.memberModel.findOne({ _id: id });
    }
    async create(memberDto: CreateMemberDto): Promise<Member> {
        const member = new this.memberModel(memberDto);
        return await member.save()
    }
    async delete(id: string): Promise<Member> {
        return await this.memberModel.findByIdAndRemove(id);
    }
    async update(id: string, item: Member): Promise<Member> {
        return await this.memberModel.findByIdAndUpdate(id, item, { new: true });
    }
}
