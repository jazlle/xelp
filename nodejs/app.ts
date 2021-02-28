import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from "swagger-ui-express";
import router from './src/interfaces/routes/index';

const app = express();
const port = 5006;

app.use(bodyParser.json());

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "./swagger.json",
    },
  }),
);

app.use(router);

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});