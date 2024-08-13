import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEmail, IsString, Matches } from "class-validator";

export class LoginUserDto {

    @Type()
    @IsEmail()
    @ApiProperty({default: 'john.doe@example.com'})
    email: string;

    @Type()
    @ApiProperty({default: 'Passw0rd!'})
    @IsString()
    // @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/)
    password: string;

}