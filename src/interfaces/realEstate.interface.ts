import {z} from "zod";
import { createRealEstateSchema, realEstateResponseSchema } from "../schemas/realEstate.schema";

type iCreateRealEstate = z.infer<typeof createRealEstateSchema>
type iResponseRealEstate = z.infer<typeof realEstateResponseSchema>
type iReadRealEstate = Array<iResponseRealEstate>

export {
	iCreateRealEstate,
	iResponseRealEstate,
	iReadRealEstate
};