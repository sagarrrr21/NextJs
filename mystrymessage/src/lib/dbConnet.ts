import { promises } from "dns";
import mongoose from "mongoose";


type connectionObject = {
    isConnected?: number
}

const conntection: connectionObject = {}

async function dbConnect(): Promise<void> {
    if (conntection.isConnected) {
        console.log("Already connected to database");
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {})
        conntection.isConnected = db.connections[0].readyState
        console.log("DB Connected Successfully")
    }
    catch (error) {
        console.log("Database connection failed", error);

        process.exit(1)
    }
}

export default dbConnect