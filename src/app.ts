import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFoundRoute from "./app/middleware/notFoundRoute";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api", router);

const getAController = async (req: Request, res: Response) => {
  res.send("Hello World!");
};

app.get("/", getAController);

app.use(globalErrorHandler);

app.use(notFoundRoute);

export default app;
