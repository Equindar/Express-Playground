// server.ts
import express from "express";
import { apiVersionMiddleware } from "./presentation/api/middlewares/apiVersionMiddleware";
import userRouter from "./presentation/api/routes/user";


const app = express();

const supportedVersions = ["1.0", "2.0"];

// Middleware aktivieren
app.use(apiVersionMiddleware(supportedVersions));

// Routen
app.use(userRouter);

// Error Handling
app.use((err: unknown, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
