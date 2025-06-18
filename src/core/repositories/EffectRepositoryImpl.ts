import { Effect } from "../entities/effect";
import { EffectRepository } from "../interfaces/effect-repository";

export class EffectRepositoryImpl implements EffectRepository {
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