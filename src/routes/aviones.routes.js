import AvionesController from "../controllers/aviones.controller.js";
import express from 'express'

class Router {
    constructor() {
        this.controller = new AvionesController()
        this.router = express.Router()
    }

    start() {
        this.router.get("/aviones", this.controller.getAviones) 
        this.router.post("/aviones", this.controller.postAvion)
        this.router.patch("/aviones/:id", this.controller.patchAvion)
        return this.router
    }
}
export default Router