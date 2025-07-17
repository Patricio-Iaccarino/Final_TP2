// import AvionesModelMemory from "../models/DAO/aviones.model.js";
import validation from "../utils/validation.js";
import Factory from "../models/Factory.js";

class AvionesService {
    constructor() {
        this.model = Factory.get(process.env.PERSISTENCE)
    }

    getAviones = async () => {
        const allAviones = await this.model.getAvion()
        return allAviones
    }

    postAvion = async (avion) => {
        const { error } = validation.schema.validate(avion);
        if (error) {
            throw new Error(`Error de validacion: ${error.details[0].message}`);
        }
        const newAvion = await this.model.postAvion(avion)
        return newAvion
    }

    patchAvion = async (id, avion) => {
        const { error } = validation.schema.validate(avion);
        if (error) {
            throw new Error(`Error de validacion: ${error.details[0].message}`);
        }
        const updatedAvion = await this.model.patchAvion(id, avion)
        return updatedAvion
    }
}
export default AvionesService