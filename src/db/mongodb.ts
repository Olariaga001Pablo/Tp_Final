import mongoose,  {Connection}  from 'mongoose';


const MONGODB_URI = 'mongodb+srv://pabloolariaga27:45387987ola@cluster0.g9j8hym.mongodb.net/';

export async function connectToDatabase() {
    await mongoose.connect(MONGODB_URI);
}