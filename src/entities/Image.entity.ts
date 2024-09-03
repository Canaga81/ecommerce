import { BeforeRemove, Column, Entity, ManyToOne } from "typeorm";
import { CommonEntity } from "./Common.entity";
import { Product } from "./Product.entity";
import { join } from "path";
import { rmSync } from "fs";

@Entity('image')
export class ImageEntity extends CommonEntity {

    @Column()
    fileName: string;

    @Column()
    url: string;

    @ManyToOne( () => Product, (product) => product.images )
    product: Product

    @BeforeRemove()
    beforeRemove() {
        rmSync(join(__dirname, '../../uploads', this.fileName));
    }

}