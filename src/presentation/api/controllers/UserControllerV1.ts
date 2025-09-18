// interface/controllers/UserControllerV1.ts
import { GetUsersV1 } from "@/application/usecases/getUsersV1";
import { Request, Response } from "express";


export class UserControllerV1 {
    private useCase: GetUsersV1;

    constructor(useCase: GetUsersV1) {
        this.useCase = useCase;
    }

    getUsers = (req: Request, res: Response) => {
        const result = this.useCase.execute();
        res.json({ version: "1.0", users: result });
    };
}
