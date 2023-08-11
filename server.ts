import mongoose from "mongoose";
import config from "./src/config";
import app from "./app";

async function server() {
  try {
    await mongoose.connect(config.database_url as string);
    console.info("DATABASE connected succesfully");
    app.listen(config.port, () => {
      console.log("App is connected");
    });
  } catch (error) {
    console.error("Failed to connect");
  }
}

server();
