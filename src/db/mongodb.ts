import mongoose  from 'mongoose';


const MONGODB_URI = 'mongodb+srv://pabloolariaga27:45387987ola@cluster0.g9j8hym.mongodb.net/';
// const MONGODB_URI = 'mongodb+srv://pabloolariga27:45387987ola@cluster01.y5xmxtt.mongodb.net/';

export async function connectToDatabase() {
    await mongoose.connect(MONGODB_URI);
}