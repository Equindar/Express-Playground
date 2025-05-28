import { Effect } from "../entities/effect";

export interface createEffectUseCase {
    execute(effect: Effect): Promise<boolean>;

}