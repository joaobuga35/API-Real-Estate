/* eslint-disable indent */
import { Entity,PrimaryGeneratedColumn,Column, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm"; 
import { ScheduleUsersProperties } from "./schedule.user.properties.entity";

@Entity("real_estate")
class RealEstate {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "boolean", default: false})
    sold: boolean;

    @Column({type: "decimal", precision: 12, scale: 2})
    value: number;

    @Column({type: "integer"})
    size: number;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    @OneToMany(() => ScheduleUsersProperties, schedule => schedule.realEstate)
    schedule: ScheduleUsersProperties[]; 
}

export {
    RealEstate
};