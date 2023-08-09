export default interface textGenerationStreamParameters {
  do_sample?: boolean;
  max_new_tokens?: number;
  max_time?: number;
  num_return_sequences?: number;
  repetition_penalty?: number;
  return_full_text?: boolean;
  temperature?: number;
  top_k?: number;
  top_p?: number;
  truncate?: number;
}
