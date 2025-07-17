class AvionesModelMemory {
    constructor() {
        this.aviones = [
            { id: "AAB001", xa: 7500, ya: 1000, za: 2000 },
            { id: "AAB002", xa: 8000, ya: 1200, za: 2500 },
            { id: "AAB003", xa: 9000, ya: 1500, za: 3000 },
            { id: "AAB004", xa: 9500, ya: 1800, za: 3500 },
            { id: "AAB005", xa: 10000, ya: 2000, za: 4000 }
        ]
    }
    getAvion = async () => {
        const allAvion = await this.aviones
        return allAvion
    }

    postAvion = async (avion) => {
        
        const index = this.aviones.findIndex(a => a.id === avion.id);
        if (index !== -1) {
            this.aviones[index] = avion; 
        } else {
            this.aviones.push(avion);
        }

        const avionesCercanos = [];

        for (const otro of this.aviones) {
            
            if (otro.id !== avion.id) {
                const distancia = this.calcularDistancia(
                    avion.xa, avion.ya, avion.za,
                    otro.xa, otro.ya, otro.za
                );
                console.log(`Distancia entre ${avion.id} y ${otro.id}: ${distancia}`);

                if (distancia < 500) {
                    avionesCercanos.push(otro.id);
                }
            }
        }

        return avionesCercanos;
    }

    calcularDistancia = (xa1, ya1, za1, xa2, ya2, za2) => {
        const dx = xa2 - xa1;
        const dy = ya2 - ya1;
        const dz = za2 - za1;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);

    }

    patchAvion = async (id, avion) => {
        const index = this.aviones.findIndex(a => a.id === id);
        if (index !== -1) {
            this.aviones[index] = { ...this.aviones[index], ...avion };
            return this.aviones[index];
        } else {
            throw new Error("Avion no encontrado");
        }
    }
}

export default AvionesModelMemory