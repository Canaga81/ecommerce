import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ProfileService } from "./profile.service";
import { AuthGuard } from "src/guards/auth.guards";

@Controller('profile')
@ApiBearerAuth()
@ApiTags('Profile')
export class ProfileController {

    constructor( private profileService: ProfileService ) {}

    @Get()
    @UseGuards(AuthGuard)
    myProfile(@Req() req: any) {
        return this.profileService.findOne(req.userId)
    }

}