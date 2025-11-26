import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const PORT = parseInt(process.env.PORT || "3000", 10);
const CLIENT_PUBLIC_PATH = process.env.CLIENT_PUBLIC_PATH
    ? path.resolve(process.env.CLIENT_PUBLIC_PATH)
    : path.resolve(__dirname, "../../client/public");

const app: express.Application = express();

app.use(express.static(CLIENT_PUBLIC_PATH));
app.get("*", (_req, res) =>
    res.sendFile(path.join(CLIENT_PUBLIC_PATH, "index.html")));

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));