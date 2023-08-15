import mongoose from "mongoose";
import config from "../config/config.json" assert { type: "json" };

// Connects the server to the database
export default function dbConnect() {
  try {
    mongoose.connect(config.dbURL).then(() => {
      console.log("Successfully connected to database.\n");
    });
  } catch (error) {
    console.error("Could not connect to database.\n", error);
  }
}
