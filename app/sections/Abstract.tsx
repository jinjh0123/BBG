import { Section } from "../components/Section"
import { ArxivIcon, GithubIcon, HuggingfaceIcon } from "../components/icons"
import { NewspaperIcon } from "@heroicons/react/20/solid"
import { TableCellsIcon } from "@heroicons/react/20/solid"

export const Abstract = () => {
    return <Section title="Abstract" className="flex-1 pt-0 md:pt-12">
        <p>
        Measuring social bias in large language models (LLMs) is crucial, but existing bias evaluation methods struggle to assess bias in long-form generation.
        We propose a Bias Benchmark for Generation (BBG), an adaptation of the Bias Benchmark for QA (BBQ), designed to evaluate social bias in long-form generation by having LLMs generate continuations of story prompts.
        Building our benchmark in English and Korean, we measure the probability of neutral and biased generations across ten LLMs.
        We also compare our long-form story generation evaluation results with multiple-choice BBQ evaluation, showing that the two approaches produce inconsistent results.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
            {/* <a className="icon-label-button bg-teal-500 pl-4 text-white" aria-disabled={true} href={"https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00661/120915"} target="_blank">
                <NewspaperIcon className="w-6 h-6 text-white"/>
                <span>Paper</span>
            </a> */}
            <a className="icon-label-button bg-red-400 pl-4 text-white" href="https://arxiv.org/abs/2503.06987" target="_blank">
                <ArxivIcon size={20}/>
                <span>arXiv</span>
            </a>
            {/* <a className="icon-label-button bg-yellow-400 pl-4 text-white" href="https://huggingface.co/datasets/naver-ai/kobbq" target="_blank">
                <HuggingfaceIcon size={40}/>
                <span>HuggingFace</span>
            </a> */}
            <a className="icon-label-button text-white" href="https://github.com/jinjh0123/BBG" target="_blank">
                <GithubIcon size={28}/>
                <span>GitHub</span>
            </a>
        </div>
    </Section>
}
