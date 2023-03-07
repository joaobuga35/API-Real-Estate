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
import { Schedule } from "./schedule.user.properties.entity";

@Entity("users")
class User {
    @PrimaryGeneratedColumn("increment")
    id: number;
    
    @Column({type: "varchar", length: 45})
    name: string;

    @Column({type: "varchar",length: 45, unique: true})
    email: string;

    @Column({type: "boolean", default: false, nullable: true})
    admin: boolean | undefined;

    @Column({type: "varchar", length: 120})
    password: string;

    @CreateDateColumn({type: "date"})
    createdAt: string;

    @UpdateDateColumn({type: "date"})
    updatedAt: string;

    @DeleteDateColumn({type: "date"})
    deletedAt: string;

    @OneToMany(() => Schedule, schedule => schedule.user)
    schedule: Schedule[];

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isEncrypted = getRounds(this.password);
        if (!isEncrypted) {
            this.password = hashSync(this.password, 10);
        }
    }

}

export { 
    User
};