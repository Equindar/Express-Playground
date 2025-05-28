import { Effect } from "@/core/entities/effect";

export interface EffectRepository {
    createEffect(effect: Effect): Promise<boolean>;
    getEffect(): Promise<Effect>;
    getEffects(): Promise<Effect[]>;
}