import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from "swagger-ui-express";
import router from './src/interfaces/routes/index';
import initMongo from './src/infrastructure/orm/mongoose/mongoose';

const app = express();
const port = 5006;

initMongo();

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