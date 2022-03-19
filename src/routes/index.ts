import { Router } from "express";
import bankRouter from "./bank.routes";

const routes = Router();

routes.use('/bank', bankRouter);

export default routes;