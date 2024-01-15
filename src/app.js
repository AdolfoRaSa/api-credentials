import express from "express";
import cors from "cors";
import config from "./config";
import usersRoutes from "./routes/users.routes";

const app = express();
// Settings
app.use(cors());
app.set("port", config.port || 8080);
app.get("/", (req, res) => {
  res.send("Api working on port: " + app.get("port"));
});

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(usersRoutes);

export default app;
