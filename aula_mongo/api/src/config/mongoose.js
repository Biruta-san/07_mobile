import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/bd";

const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Banco de dados conectado em: ", MONGO_URI);
  } catch (e) {
    console.error("Erro ao conectar ao banco de dados", e);
    process.exit(1);
  }
};

export default connectDb;
