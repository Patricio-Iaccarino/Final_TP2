import AvionesService from "../services/aviones.service.js"

class AvionesController {
    constructor() {
        this.service = new AvionesService()
    }

    getAviones = async (req, res) => {
        const allAviones = await this.service.getAviones()
        res.send(allAviones)
    }

    postAvion = async (req, res) => {

        if (!req.body || !req.body.id || !req.body.xa || !req.body.ya || !req.body.za) {
            return res.status(400).send({ error: "Faltan datos" });
        }
        try {
            const avion = req.body
            const newAvion = await this.service.postAvion(avion)
            res.status(201).send(newAvion)
        } catch (error) {
            res.status(400).send({ 
                
                error: "Datos no validos",
                errorMsg: error.message })
        }
    }

    patchAvion = async (req, res) => {
        try {
            const avion = req.body
            const updatedAvion = await this.service.postAvion(avion)
            res.status(200).send(updatedAvion)
        } catch (error) {
            res.status(400).send({ 
                
                error: "Datos no validos",
                errorMsg: error.message })
        }
    }

    
}

export default AvionesController