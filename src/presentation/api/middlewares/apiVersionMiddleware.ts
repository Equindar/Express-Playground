import { Response, NextFunction } from "express";
import VersionedRequest from "../types/VersionedRequest";

export function apiVersionMiddleware(supportedVersions: string[]) {
    return (req: VersionedRequest, res: Response, next: NextFunction) => {
        const version = req.header("X-API-Version");

        if (!version) {
            return res.status(400).json({
                error: "Missing X-API-Version header",
            });
        }

        if (!supportedVersions.includes(version)) {
            return res.status(400).json({
                error: `Unsupported API version: ${version}. Supported versions are: ${supportedVersions.join(", ")}.`,
            });
        }

        req.apiVersion = version;
        next();
    };
}
