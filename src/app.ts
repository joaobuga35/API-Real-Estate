import "express-async-errors";
import express, { Application } from "express";
import { handleError } from "./errors";
import userRoutes from "./routers/users.routes";
import loginRoutes from "./routers/login.routes";
import categoryRoutes from "./routers/category.routes";
import realEstateRoutes from "./routers/realEstate.routes";

const app: Application = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login",loginRoutes);
app.use("/categories",categoryRoutes);
app.use("/realEstate",realEstateRoutes);

app.use(handleError);

export default app;