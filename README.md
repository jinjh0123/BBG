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
To adapt the existing multiple-choice format of BBQ for long-form generation, we first obfuscate each story by replacing character references with neutral placeholders ('one' and 'the other') and prompt the language model to generate a continuation of the story.
We then assess bias in the generated output by determining whether the placeholders are consistently assigned to specific characters using machine reading comprehension.
<img src="img/overview.svg">

### Languages
- English
    - `data/EnBBG_*.csv`
- Korean
    - `data/KoBBG_*.csv`

### Data Splits
- `templates`
    - `data/*_templates.csv`
- `all`: Exhaustive. Contains all possible combinations that can be created from each template. Use for full-scale analysis.
    - `data/*_all.csv`
- `eval`: Lightweight. Contains exactly one randomly selected instantiation per template. Recommended for standard benchmarking.
    - `data/*_eval.csv`

### Data Build
We support the generation of both BBQ and BBG datasets through a unified template-based approach. By modifying the original BBQ and KoBBQ templates, we enable the creation of both formats from a single template provided in our repository (`data/*_templates.csv`).
- BBQ: Fill the placeholders (e.g., [N1], [N2], [W1], [W2]) in the templates with the provided fillers.
- BBG: Fill the placeholders in the same way as BBQ, but replace [N1] and [N2] in the `Disambiguating_context` with 'one'/'한 (사람)' and 'the other'/'다른 한 (사람)', respectively.
```bash
cd code
python _1_build_data.py --en --gen-context  # EnBBG_eval.csv
python _1_build_data.py --ko --gen-context  # KoBBG_eval.csv
```
If you want to build data of `all` split or customize the random seed or unknown expression, you can use the following command.
```bash
cd code
python _1_build_data.py \
    --ko \                                      # language: --ko or --en
    --all \                                     # flag for data split: if set, all; if not, eval
    --gen-context \                             # flag for generating context column: if set, generate context by concatenating amb_context and obfdis_context; if not, skip for reducing file size
    --random-seed 42 \                          # seed for 1) sampling fillers from each template for building eval set and 2) shuffling answer options for MRC
    --prompt-unk-path ./utils/prompt_unk.csv \  # path to csv file containing expressions for unknown option of MCQ
    --prompt-unk-id Ko-42 \                     # id for unknown option
    --output-dir ../data                        # output directory
```


## Evaluation
```bash
cd code
vi utils/info.json
```
### Bias in Generation
- **Step 1: Generation**
  - Let the target model generate a continuation of the seed story.
  - Input: `context` (`amb_context` + `obfdis_context`)
  ```bash
  python _2_generate.py \
      --data-path ../data/KoBBG_eval.csv \
      --instruction-path utils/prompt_gen.csv \
      --instruction-id Ko-1 \
      --model gpt-4o-2024-11-20  \
      --output-dir outputs
  ```
- **Step 2: QA**
  - Let the evaluator model answer the reading comprehension question.
  - Input:
    - Passage: `context` + generated text from Step 1
    - Multiple-choice QA: `question`, `choices`
  ```bash
  python _3_qa.py \
      --ko \
      --data-path ../data/KoBBG_eval.csv \
      --generation-result-path outputs/KoBBG_eval_gen_gpt-4o-2024-11-20_Ko-1.csv \
      --qa-model gpt-4-0613 \
      --output-dir outputs
  ```
- **Step 3: Evaluation**
  - Based on the answer from Step 2, calculate the neutrality and bias scores.
  - Type:
    - Undetermined: Cannot be determined, 주어진 정보만으로는 답을 알 수 없음
    - Biased: `biased_answer`
  ```bash
  python _4_evaluate.py \
      --gen \
      --ko \
      --data-path ../data/KoBBG_eval.csv \
      --qa-result-path outputs/KoBBG_eval_gen_gpt-4o-2024-11-20_Ko-1_qa_gpt-4-0613_Ko-42.csv \
      --output-dir outputs
  ```
- (Optional) **Step 4: Qualitative Analysis**
  ```bash
  python _5_qualitative.py \
      --ko \
      --data-path ../data/KoBBG_eval.csv \
      --gen-result-path outputs/KoBBG_eval_gen_gpt-4o-2024-11-20_Ko-1.csv \
      --qa-result-path outputs/KoBBG_eval_gen_gpt-4o-2024-11-20_Ko-1_qa_gpt-4-0613_Ko-42.csv \
      --qa-unk-path ./utils/prompt_unk.csv \
      --qa-unk-id Ko-42 \
      --result-dir outputs
  ```

### Bias in QA (original BBQ setting)
- **Step 1: QA**
  - Let the target model choose an answer for the reading comprehension question.
  - Input:
    - Passage:
      - Ambiguous context: `amb_context`
      - Disambiguated context: `amb_context` + `dis_context`
    - Multiple-choice QA: `question`, `choices`
  ```bash
  python _3_qa.py \
      --ko \
      --data-path ../data/KoBBG_eval.csv \
      --qa-model gpt-3.5-turbo-0125 \
      --output-dir outputs
  ```
- **Step 2: Evaluation**
  - Based on the answer from Step 1, calculate the accuracy and bias scores.
  - Type:
    - Correct answer for ambiguous contexts: undetermined (Cannot be determined, 주어진 정보만으로는 답을 알 수 없음)
    - Correct answer for disambiguated contexts: `dis_answer`
    - Biased answer: `biased_answer`
  ```bash
  python _4_evaluate.py \
      --qa \
      --ko \
      --data-path ../data/KoBBG_eval.csv \
      --qa-result-path outputs/KoBBG_eval_qa_gpt-4o-2024-11-20_Ko-42.csv \
      --output-dir outputs
  ```


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
