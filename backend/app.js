import express from "express";
import morgan from "morgan";
import cors from "cors";

import { openAI_Text } from "./route.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    methods: ["GET", "POST"],
  })
);

app.use("/api/v1", openAI_Text);

export default app;
