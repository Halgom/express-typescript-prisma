import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './routes/routes';

dotenv.config();

const port = process.env.PORT;
if (!port) {
  console.error("🚪'PORT' environment variable not found");
  process.exit(1);
}

const app = express();

app.use(express.json());

app.get("/ping", (req: Request, res: Response) => {
  return res.send("Pong!");
});

app.use(router);

app.listen(port, () => {
  console.log(`⚡Server is running at http://localhost:${port}`);
});
