import {z} from "zod";
import { createScheduleSchema, readScheduleSchema } from "../schemas/schedule.schema";

type iCreateSchedule = z.infer<typeof createScheduleSchema>
type iMessage = {
    message: string
}
type iScheduleRead = z.infer<typeof readScheduleSchema>

export { iCreateSchedule, iMessage, iScheduleRead };