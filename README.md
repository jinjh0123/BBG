# BBG
This is the official repository of **Social Bias Benchmark for Generation: A Comparison of Generation and QA-Based Evaluations** (ACL-Findings 2025).

- Paper: [arXiv](https://arxiv.org/abs/2503.06987)
- Webpage: [jinjh0123.github.io/BBG](https://jinjh0123.github.io/BBG/)
- GitHub Repository: [jinjh0123/BBG](https://github.com/jinjh0123/BBG)
- HuggingFace Datasets: [jinjh0123/bbg](https://huggingface.co/datasets/jinjh0123/bbg)

## About
Measuring social bias in large language models (LLMs) is crucial, but existing bias evaluation methods struggle to assess bias in long-form generation.
We propose a **Bias Benchmark for Generation (BBG)**, an adaptation of the Bias Benchmark for QA (BBQ), designed to evaluate social bias in long-form generation by having LLMs generate continuations of story prompts.
Building our benchmark in English and Korean, we measure the probability of neutral and biased generations across ten LLMs.
We also compare our long-form story generation evaluation results with multiple-choice BBQ evaluation, showing that the two approaches produce inconsistent results.


## Dataset
We propose the Bias Benchmark for Generation (BBG), a benchmark for assessing bias in story generation, built on the English BBQ and Korean BBQ (KoBBQ) datasets.
To adapt the existing multiple-choice format of BBQ for long-form generation, we first obfuscate contextual data by replacing character references with neutral placeholders ('one' and 'the other') and prompt the language model to generate a continuation of the story.
We then assess bias in the generated output by determining whether the placeholders are consistently assigned to specific characters using machine reading comprehension.
<img src="img/overview.svg">

### Languages
- English
- Korean

### Data Splits
- `all`: Exhaustive. Contains all possible combinations that can be created from each template. Use for full-scale analysis.
- `eval`: Lightweight. Contains exactly one randomly selected instantiation per template. Recommended for standard benchmarking.


## Evaluation
### Bias in Generation
- **Step 1: Generation**
  - Let the target model generate a continuation of the seed story.
  - Input: `context` (`amb_context` + `obfdis_context`)
- **Step 2: QA**
  - Let the evaluator model answer the reading comprehension question.
  - Input:
    - Passage: `context` + generated text from Step 1
    - Multiple-choice QA: `question`, `choices`
- **Step 3: Evaluation**
  - Based on the answer from Step 2, calculate the neutrality and bias scores.
  - Type:
    - Undetermined: Cannot be determined, 주어진 정보만으로는 답을 알 수 없음
    - Biased: `biased_answer`

### Bias in QA (original BBQ setting)
- **Step 1: QA**
  - Let the target model choose an answer for the reading comprehension question.
  - Input:
    - Passage:
      - Ambiguous context: `amb_context`
      - Disambiguated context: `amb_context` + `dis_context`
    - Multiple-choice QA: `question`, `choices`
- **Step 2: Evaluation**
  - Based on the answer from Step 1, calculate the accuracy and bias scores.
  - Type:
    - Correct answer for ambiguous contexts: undetermined (Cannot be determined, 주어진 정보만으로는 답을 알 수 없음)
    - Correct answer for disambiguated contexts: `dis_answer`
    - Biased answer: `biased_answer`


## BibTex
```
@misc{jin2025socialbiasbenchmarkgeneration,
  title={Social Bias Benchmark for Generation: A Comparison of Generation and QA-Based Evaluations},
  author={Jiho Jin and Woosung Kang and Junho Myung and Alice Oh},
  year={2025},
  eprint={2503.06987},
  archivePrefix={arXiv},
  primaryClass={cs.CL},
  url={https://arxiv.org/abs/2503.06987}
}
```
