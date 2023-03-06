/* eslint-disable indent */
import { getRounds, hashSync } from "bcryptjs";
import { Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	BeforeInsert,
	BeforeUpdate, 
    OneToMany
} from "typeorm";
import { ScheduleUsersProperties } from "./schedule.user.properties.entity";

@Entity("users")
class User {
    @PrimaryGeneratedColumn("increment")
    id: number;
    
    @Column({type: "varchar", length: 45})
    name: string;

    @Column({type: "varchar",length: 45, unique: true})
    email: string;

    @Column({type: "boolean", default: false})
    admin: boolean;

    @Column({type: "varchar", length: 120})
    password: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    @DeleteDateColumn()
    deletedAt: string;

    @OneToMany(() => ScheduleUsersProperties, schedule => schedule.user)
    schedule: ScheduleUsersProperties[];
}

export { 
    User
};