import * as express from 'express';
import { Request, Response } from 'express';

const app = express();
const port = 3000;

// Ruta Get
app.get('/', (req: Request, res: Response) => {
  res.send('Hello Typescript');
});

// Puerto de escucha
app.listen(port, () => {
  console.log(`App Listinging on port: ${port}`);
});
