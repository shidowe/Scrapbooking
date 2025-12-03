import express from "express";
import path from "path";
import dotenv from "dotenv";
import {userRoute} from "./user/user.routes";
import cors from "cors";

dotenv.config();

const PORT = parseInt(process.env.PORT || "3000", 10);
const CLIENT_PUBLIC_PATH = process.env.CLIENT_PUBLIC_PATH
    ? path.resolve(process.env.CLIENT_PUBLIC_PATH)
    : path.resolve(__dirname, "../../client/public");

const app: express.Application = express();

const allowedOrigins = [
    "http://localhost:9000/",
    "http://localhost:3000/"
];

export function checkOrigin(allowedOrigins: string[]) {
    return (req: any, res: any, next: any) => {
        const origin = req.headers.origin;

        if (origin && allowedOrigins.includes(origin)) {
            res.header("Access-Control-Allow-Origin", origin);
            res.header("Access-Control-Allow-Credentials", "true");
        }

        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");

        if (req.method === "OPTIONS") return res.sendStatus(200);
        next();
    };
}

/*
app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) return callback(null, true);
        return callback(new Error("Not allowed by CORS"));
    },
    credentials: true
}));*/
app.use(cors({origin: "*"}));
app.use(checkOrigin(allowedOrigins));

app.use(express.static(CLIENT_PUBLIC_PATH));
app.get("/login", (_req, res) =>
    res.sendFile(path.join(CLIENT_PUBLIC_PATH, "login.html")));
app.get("*", (_req, res) =>
    res.sendFile(path.join(CLIENT_PUBLIC_PATH, "index.html")));

const router = express.Router();
app.use("/users", userRoute)


app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));