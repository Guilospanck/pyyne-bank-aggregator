import { Router } from "express";
import bankRouter from "./bankRouter";

const routes = Router();

routes.use('/bank', bankRouter);

export default routes;