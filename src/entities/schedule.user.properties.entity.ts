/* eslint-disable indent */
import { Entity,PrimaryGeneratedColumn,Column, ManyToOne} from "typeorm";
import { RealEstate } from "./real.state.entity";
import { User } from "./user.entity";

@Entity("schedule_users_properties")
class Schedule {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "date"})
    date: string;

    @Column({type: "time"})
    hour: string | number;

    @ManyToOne(() => RealEstate, estate => estate.schedule)
    realEstate: RealEstate;

    @ManyToOne(() => User, user => user.schedule)
    user: User;

}

export {
    Schedule
};