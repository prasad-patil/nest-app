import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MembersService } from './members.service';
import { Member } from './interfaces/member.interface';
import { CreateMemberDto } from './dto/create-member.dto';

@Controller('members')
export class MembersController {
    constructor(private readonly memberService: MembersService) { }
    @Get()
    findAll(): Promise<Member[]> {
        return this.memberService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Member> {
        return this.memberService.findOne(id);
    }

    @Post()
    create(@Body() createMemberDto: CreateMemberDto): Promise<Member> {
        return this.memberService.create(createMemberDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Member> {
        return this.memberService.delete(id);
    }

    @Put(':id')
    update(@Body() updateMemberDto: CreateMemberDto, @Param('id') id): Promise<Member> {
        return this.memberService.update(id, updateMemberDto);
    }
}
