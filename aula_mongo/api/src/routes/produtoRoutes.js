import { Router } from "express";
import produtoController from "../controllers/produtoController";

const produtoRoutes = Router();

produtoRoutes.get("/:id", produtoController.obter);
produtoRoutes.put("/:id", produtoController.atualizar);
produtoRoutes.delete("/:id", produtoController.deletar);
produtoRoutes.post("/", produtoController.criar);
produtoRoutes.get("/", produtoController.listar);

export default produtoRoutes;
