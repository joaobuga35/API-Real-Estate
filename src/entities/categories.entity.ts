/* eslint-disable indent */
import { Entity,PrimaryGeneratedColumn,Column} from "typeorm";

@Entity("categories")
class Categorie {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "varchar", length: 45, unique: true})
    name: string;
}

export {
    Categorie
};