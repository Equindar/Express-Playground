import { createEffectUseCase } from "@/core/interfaces/createEffect-usecase";
import { getEffectUseCase } from "@/core/interfaces/getEffect-usecase";
import express, { Request, Response } from "express";

export default function EffectRouter(
    getEffectUseCase: getEffectUseCase,
    createEffectUseCase: createEffectUseCase
) {
    const router = express.Router();

    router.get('/', async (req: Request, res: Response) => {
        try {
            const effect = await getEffectUseCase.execute();
            res.send(effect);
        }
        catch (err) {
            res.status(500).send({ message: "Error fetching data."});
        }
    })

    router.post('/', async (req: Request, res: Response) => {
        try {
            await createEffectUseCase.execute(req.body);
            res.statusCode = 201;
            res.json({ message: "created"});
        }
        catch (err) {
            res.status(500).send({ message: "Error saving data"});
        }
    })
    return router;
}