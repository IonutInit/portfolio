import express from "express";
import { generateText } from "./model.js";

export const openAI_Text = express.Router();

openAI_Text.post("/text", generateText);
