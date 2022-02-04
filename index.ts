import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;
const app: express.Application = express();

app.get('/', (req: express.Request, res: express.Response) => {
	res.send(`<h1>HELLO THERE !</h1>`);
});

app.listen(port, () =>
	console.log(`the sever works on http://localhost:${port}`)
);
