import { connectToDatabase } from "@/db/mongodb";
import PlayerModel from "@/app/models/PlayerShema";
import User from "@/app/models/schema";


export async function GET() {
    // Compila el modelo Player antes de realizar la consulta
    // await compilePlayerModel();

    // // Realiza la conexión a la base de datos
    await connectToDatabase();

    // Consulta todos los jugadores
    // const players = await PlayerModel.find();

    const players = await User.find();

    // Devuelve la lista de jugadores como respuesta
    return new Response(JSON.stringify(players), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export async function POST(request: Request) {
    
    await connectToDatabase();

    // Obtiene los datos del jugador del cuerpo de la solicitud
    const data = await request.json();

    // Crea un nuevo jugador
    // const player = await PlayerModel.create(data);
    const player = await User.create(data);

    // Devuelve el nuevo jugador creado como respuesta
    return new Response(JSON.stringify(player), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}
