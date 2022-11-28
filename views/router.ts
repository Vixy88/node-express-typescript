import express, { Request, Response } from "express";

const router = express.Router();

router.get("/server", (req: Request, res: Response) => {
  res.status(200).send("API is Running");
});

router.get("/login", (req: Request, res: Response) => {
  res.status(200).send("This will be the login route");
});

export default router;
