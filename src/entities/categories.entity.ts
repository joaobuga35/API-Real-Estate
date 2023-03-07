/* eslint-disable indent */
import { Entity,PrimaryGeneratedColumn,Column, OneToMany} from "typeorm";
import { RealEstate } from "./real.state.entity";

@Entity("categories")
class Category {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "varchar", length: 45, unique: true})
    name: string;

    @OneToMany(() => RealEstate, estate => estate.category)
    estate: RealEstate[];
}

export {
    Category
};