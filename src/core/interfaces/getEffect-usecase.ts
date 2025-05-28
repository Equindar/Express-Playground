import { Effect } from "../entities/effect";

export interface getEffectUseCase {
    execute(): Promise<Effect>;
}