import { Effect } from "../entities/effect";
import { EffectDataSource } from "@/infrastructure/interfaces/EffectDataSource";
import { EffectRepository } from "../interfaces/effect-repository";

export class EffectRepositoryImpl implements EffectRepository {
    effectDataSource: EffectDataSource;

    constructor(effectDataSource: EffectDataSource) {
        this.effectDataSource = effectDataSource;
    }

    createEffect(effect: Effect): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    getEffect(): Promise<Effect> {
        throw new Error("Method not implemented.");
    }
    
    getEffects(): Promise<Effect[]> {
        throw new Error("Method not implemented.");
    }
    
}