import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, IsUrl, Length, MaxLength, Min } from "class-validator";


export class CreateProductDto {

    @Type()
    @IsString()
    @Length(3, 51)
    @ApiProperty()
    name: string;

    @Type()
    @IsNumber()
    @ApiProperty()
    @Min(0)
    price: number;

    @Type()
    @IsString()
    @ApiProperty()
    @MaxLength(500)
    @IsOptional()
    description: string;

    @Type()
    @IsString()
    @ApiProperty()
    @IsUrl()
    image: string;

}