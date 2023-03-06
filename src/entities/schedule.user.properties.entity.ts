/* eslint-disable indent */
import { Entity,PrimaryGeneratedColumn,Column} from "typeorm";

@Entity("schedule_users_properties")
class UsersProperties {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "date"})
    date: string;

    @Column({type: "time"})
    hour: string | number;
}

export {
    UsersProperties
};