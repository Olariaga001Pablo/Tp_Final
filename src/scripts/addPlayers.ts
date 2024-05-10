import { connectToDatabase } from "@/db/mongodb";
import playerSchema from "@/app/models/PlayerShema";

// Función para conectarse a la base de datos
function addPlayers() {
    
    
    try {
        // Crea varios jugadores utilizando el método create
        const players =  playerSchema.create([
            { username: "jugador1", resources: { gold: 100, wood: 50, food: 30, stone: 70 } },
            { username: "jugador2", resources: { gold: 200, wood: 100, food: 60, stone: 140 } },
            { username: "jugador3", resources: { gold: 300, wood: 150, food: 90, stone: 210 } },
        ]);

        console.log("Jugadores añadidos:", players);
    } catch (error) {
        console.error("Error al añadir jugadores:", error);
    }
}
