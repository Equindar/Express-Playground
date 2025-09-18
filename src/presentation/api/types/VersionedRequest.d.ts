import { Request } from "express";

export default interface VersionedRequest extends Request {
    apiVersion?: string;
}