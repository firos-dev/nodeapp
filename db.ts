require("dotenv").config()
import { DataSource, OneToOne } from "typeorm";
import { User } from "./entities/User";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [
    User,
    
  ],
  logging: false, // Enables query logging
  migrations: [__dirname + "/migrations/*.ts"], // Path to your migrations
  synchronize: true,
  ssl:{
    rejectUnauthorized: false
  }
});

export default AppDataSource;
