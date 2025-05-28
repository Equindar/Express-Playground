import { Effect } from "@/core/entities/effect";
import { EffectRepository } from "@/core/interfaces/effect-repository";
import { getEffectUseCase } from "@/core/interfaces/getEffect-usecase";

export class GetEffect implements getEffectUseCase {
    effectRepository: EffectRepository;

    constructor(effectRepository: EffectRepository) {
        this.effectRepository = effectRepository;
    }

    async execute(): Promise<Effect> {
        const result = await this.effectRepository.getEffect();
        return result;
    }

}