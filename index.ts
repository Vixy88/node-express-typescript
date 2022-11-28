import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./views/router";

dotenv.config();

const app: Application = express();
const port = process.env.PORT;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Node Server running with Express and Typescript",
  });
});

try {
  app.listen(port, (): void => {
    console.log(`⚡️[server]: Connected successfully on port ${port}`);
  });
} catch (err) {
  if (err instanceof Error) {
    // ✅ TypeScript knows err is Error
    console.log(err.message);
  } else {
    console.log("Unexpected error", err);
  }
}
