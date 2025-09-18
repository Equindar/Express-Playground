import { GetUsersV1 } from "@/application/usecases/getUsersV1";
import { GetUsersV2 } from "@/application/usecases/getUsersV2";
import { Router, Response } from "express";
import { UserControllerV1 } from "../controllers/UserControllerV1";
import { UserControllerV2 } from "../controllers/UserControllerV2";
import VersionedRequest from "../types/VersionedRequest";


const userRouter = Router();

// Controller-Instanzen
const userControllerV1 = new UserControllerV1(new GetUsersV1());
const userControllerV2 = new UserControllerV2(new GetUsersV2());

// Versioniertes Routing Helper
function versionedRoute(
  versions: Record<string, (req: VersionedRequest, res: Response) => void>
) {
  return (req: VersionedRequest, res: Response) => {
    const version = req.apiVersion!;
    const handler = versions[version];

    if (!handler) {
      return res.status(500).json({ error: "No handler for this version" });
    }

    return handler(req, res);
  };
}

// Endpoint mit Versionierung
userRouter.get(
  "/users",
  versionedRoute({
    "1.0": userControllerV1.getUsers,
    "2.0": userControllerV2.getUsers,
  })
);

export default userRouter;
