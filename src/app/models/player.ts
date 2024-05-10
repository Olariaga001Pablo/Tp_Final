import { Document } from 'mongoose';
import { Resources } from './resources';
import { Edificios } from './edificios';


export interface Player extends Document {
    username: string;
    resources: Resources;
    edificios: Edificios;
}