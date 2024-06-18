import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Connected to the database");
  } catch (err) {
    console.error("Failed to connect to the database", err);
  }
};

export { connectToDatabase, client };