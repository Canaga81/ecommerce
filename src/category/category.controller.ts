import { Body, Controller, Delete, Get, Param, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CategoryService } from "./category.service";
import { AuthGuard } from "src/guards/auth.guards";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UserRoles } from "src/common/enum/user-roles.enum";
import { Roles } from "src/common/decoraters/roles.decorater";

@Controller('category')
@ApiTags('Category')
export class CategoryController {

    constructor(private categoryService: CategoryService) {}

    @Get()
    list() {
        return this.categoryService.find()
    }

    @Get(':id')
    item(@Param('id') id: number) {
        return this.categoryService.findOne( { where: {id} } )
    }

    @Post()
    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    @Roles(UserRoles.ADMIN)
    create( @Body() body: CreateCategoryDto ) {
        return this.categoryService.create(body)
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    @Roles(UserRoles.ADMIN, UserRoles.CONTENT_MANAGER)
    delete(@Param('id') id: number) {
        return this.categoryService.delete(id);
    }

}