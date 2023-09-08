import express from "express";
import userController from "../controller/userController.js";

const Router = express.Router();


Router.get('/users',userController.getUser);
Router.put('/users/:id',userController.updateUser);

export default Router;