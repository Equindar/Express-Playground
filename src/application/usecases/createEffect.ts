import { Effect } from "@/core/entities/effect";
import { createEffectUseCase } from "@/core/interfaces/createEffect-usecase";
import { EffectRepository } from "@/core/interfaces/effect-repository";

export class CreateEffect implements createEffectUseCase {
    effectRepository: EffectRepository;
    constructor(effectRepository: EffectRepository) {
        this.effectRepository = effectRepository;
    }

    async execute(effect: Effect): Promise<boolean> {
        const result = await this.effectRepository.createEffect(effect);
        return result;
    }
}