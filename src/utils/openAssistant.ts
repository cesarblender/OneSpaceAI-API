import { HfInference } from '@huggingface/inference';
import config from '../core/config';
import textGenerationStreamParameters from '../types/textGenerationStreamParameters';
import { HuggingFaceStream } from 'ai';

const Hf = new HfInference(config.huggingfaceApiKey);

async function generateText(
  prompt: string,
  model: string = 'OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5',
  parameters: textGenerationStreamParameters,
) {
  try {
    const iter = await Hf.textGenerationStream({
      model,
      inputs: prompt,
      parameters: {
        max_new_tokens: 900,
        // @ts-ignore valid on models like open assistant
        typical_p: 0.2,
        repetition_penalty: 1,
        truncate: 1000,
        return_full_text: false,
        ...parameters,
      },
    });

    return HuggingFaceStream(iter);
  } catch (error) {
    throw error;
  }
}
