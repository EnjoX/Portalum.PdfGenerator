import express, { Response as ExResponse, Request as ExRequest } from "express";
import bodyParser from "body-parser";
import { RegisterRoutes } from "../build/routes";
import swaggerUi from "swagger-ui-express";

export const app = express();

// Use body parser to read sent json payloads.
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/swagger", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
    return res.send(
      swaggerUi.generateHTML(await import("../build/swagger.json"))
    );
  });

RegisterRoutes(app);