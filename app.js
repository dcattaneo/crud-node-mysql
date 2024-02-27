import express from "express";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import cors from 'cors'

const app = express();

app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(taskRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Endpoint not found" });
});

export default app;
