
import { DataSource, OneToOne } from "typeorm";
import express from "express";
import dotenv from "dotenv";
// import { setCommonHeaders } from "./middleware/cors";
import AppDataSource from "./db";
// import { routes } from "./routes";
// import { notFound } from "./controllers/notFound";
dotenv.config();

const app = express();

// app.use(setCommonHeaders());

(async () => {
  try {
    if (!process.env.PORT) {
      throw new Error("Environment variables are missing");
    }
    await AppDataSource.initialize()
      .then((con) => {
        con.runMigrations();
        console.log("Data Source has been initialized!");
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.get("/", (req, res) => {
        res.status(200).json({
            success: true,
            message: "This is your sample request"
        })
    })
    // app.use(routes);

    // app.use(notFound);

    const port: number | string | undefined = process.env.PORT;

    app.listen(port, () => {
      console.log(`App running on port ${port}`);
    });
  } catch (error) {
    console.error(error);
    throw new Error("Unable to connect to db");
  }
})();
