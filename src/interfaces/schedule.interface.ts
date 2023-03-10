import {z} from "zod";
import { createScheduleSchema } from "../schemas/schedule.schema";

type iCreateSchedule = z.infer<typeof createScheduleSchema>
type iMessage = {
    message: string
}

export { iCreateSchedule, iMessage };