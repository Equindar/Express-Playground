import { Effect } from "@/core/entities/effect";

export interface EffectDataSource {
    create(effect: Effect): Promise<boolean>;
    get(): Promise<Effect>;
    getAll(): Promise<Effect[]>;
}