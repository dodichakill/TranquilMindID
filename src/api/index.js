import { Client } from "podcast-api";

export const client = Client({
  apiKey: process.env.X_ListenAPI_Key || null,
});
