/* eslint-disable indent */
import { Entity,PrimaryGeneratedColumn,Column, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, JoinColumn, ManyToOne} from "typeorm"; 
import { Address } from "./addresses.entity";
import { Categorie } from "./categories.entity";
import { ScheduleUsersProperties } from "./schedule.user.properties.entity";

@Entity("real_estate")
class RealEstate {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "boolean", default: false})
    sold: boolean;

    @Column({type: "decimal", precision: 12, scale: 2})
    value: number | string;

    @Column({type: "integer"})
    size: number;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address;
    
    @OneToMany(() => ScheduleUsersProperties, schedule => schedule.realEstate)
    schedule: ScheduleUsersProperties[]; 

    @ManyToOne(() => Categorie, category => category.estate)
    category: Categorie;
}

export {
    RealEstate
};