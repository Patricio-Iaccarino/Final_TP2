import AvionesModelMemory from "./DAO/aviones.model.js"


class Factory {
    static get(persistence) {
        if(persistence == 'memory') {
            console.log("Persistiendo en memoria")
            return new AvionesModelMemory()
        }
        else {
            throw new Error("Persistencia no soportada: " + persistence);
        }
    }
    
}

export default Factory