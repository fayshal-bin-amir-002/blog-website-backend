import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFoundRoute from "./app/middleware/notFoundRoute";
const app: Application = express();

// parsers
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3500",
      "http://localhost:5000",
      "http://localhost:5700",
      "https://blog-website-backend-rho.vercel.app",
    ],
  }),
);
app.use(cookieParser());

// application routes
app.use("/api", router);

const getAController = async (req: Request, res: Response) => {
  res.send("BlogSphere is running...");
};

app.get("/", getAController);

app.use(globalErrorHandler);

app.use(notFoundRoute);

export default app;
