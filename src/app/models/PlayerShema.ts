import mongoose, { Schema } from 'mongoose';
import { Player } from './player';

const playerSchema: Schema = new Schema<Player>({
    username: { type: String, required: true },
    resources: {
        mina: { type: Number, required: true },
        granja: { type: Number, required: true },
        piedra: { type: Number, required: true },
        madera: { type: Number, required: true },
        tropas: { type: Number, required: true }
    },
    edificios: {
        parcela1: { type: String, required: true },
        parcela2: { type: String, required: true },
        parcela3: { type: String, required: true },
        parcela4: { type: String, required: true },
        parcela5: { type: String, required: true },
        parcela6: { type: String, required: true },
        parcela7: { type: String, required: true },
        parcela8: { type: String, required: true },
        parcela9: { type: String, required: true },
        parcela10: { type: String, required: true },
        parcela11: { type: String, required: true },
        parcela12: { type: String, required: true },
        parcela13: { type: String, required: true },
        parcela14: { type: String, required: true },
        parcela15: { type: String, required: true },
        parcela16: { type: String, required: true },
        parcela17: { type: String, required: true },
        parcela18: { type: String, required: true },
        parcela19: { type: String, required: true }
    }
});

const PlayerModel = mongoose.model<Player>('abc', playerSchema);

export default PlayerModel;
