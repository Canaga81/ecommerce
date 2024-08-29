import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, Length, MaxLength, Min } from "class-validator";


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
    @IsNumber( {}, { each: true } )
    @ApiProperty()
    images: number[];

    @Type()
    @IsNumber({}, { each: true })
    @ApiProperty({ type: Number, isArray: true })
    @IsOptional()
    categories: number[];

}