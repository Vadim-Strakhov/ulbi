import Router from "../framework/Router.js";
import controller from "./user-controller.js";

export const router = new Router();

router.get("/users", controller.getUsers);
router.post("/users", controller.createUser);
