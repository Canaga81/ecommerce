import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, Max, Min } from "class-validator";

export class GetOrderDto {

    @Type()
    @ApiProperty({default: 10, required: false})
    @IsNumber()
    @IsOptional()
    @Max(50)
    limit: number;
    
    @Type()
    @ApiProperty({default: 9, required: false})
    @IsNumber()
    @IsOptional()
    @Min(0)
    page: number;

}