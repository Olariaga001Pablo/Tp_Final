import mongoose, { Document, Schema } from 'mongoose';

// Interfaz para el documento de recurso
interface Recurso {
    name: string;
    quantity: number;
}

// Interfaz para el documento de edificio
interface Edificio {
    name: string;
    level: number;
}

// Esquema para los recursos
const ResourceSchema = new Schema<Recurso>({
    name: { type: String, required: true },
    quantity: { type: Number, required: true, default: 50 }
});

// Esquema para los edificios
const BuildingSchema = new Schema<Edificio>({
    name: { type: String, required: true },
    level: { type: Number, required: true, default: 1 }
});

// Esquema para el usuario
interface User {
    username: string;
    email: string;
    password: string;
    recursos: Recurso[];
    edificios: Edificio[];
}

const UserSchema = new Schema<User>({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    recursos: [ResourceSchema],
    edificios: [BuildingSchema]
});

// Edificios constantes (vacíos por defecto)
const constantResources: Recurso[] = [
    { name: 'oro', quantity: 50 },
    { name: 'comida', quantity: 50 },
    { name: 'piedra', quantity: 50 },
    { name: 'madera', quantity: 50 },
    { name: 'tropas', quantity: 0 }
];

const constantBuildings: Edificio[] = Array(19).fill({ name: 'Vacio', level: 1 });
constantBuildings[9] = { name: 'Urbano', level: 1 };

// Antes de guardar el usuario, asigna los recursos y edificios constantes
UserSchema.pre<User>('save', function (next) {
    this.recursos = constantResources.map(resource => ({ ...resource }));
    this.edificios = constantBuildings.map(building => ({ ...building }));
    next();
});

export default mongoose.models.User || mongoose.model<User>('User', UserSchema);
