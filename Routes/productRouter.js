import express from "express";
import { addProduct } from "../Controllers/productcontroller.js";

const productRouter = express.Router();

productRouter.post("/", addProduct);

export default productRouter;