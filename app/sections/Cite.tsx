import { Section } from "../components/Section"

const bibTex = '@misc{jin2025socialbiasbenchmarkgeneration,<br/>\n\
&emsp;&emsp;title={Social Bias Benchmark for Generation: A Comparison of Generation and QA-Based Evaluations},<br/>\n\
&emsp;&emsp;author={Jiho Jin and Woosung Kang and Junho Myung and Alice Oh},<br/>\n\
&emsp;&emsp;year={2025},<br/>\n\
&emsp;&emsp;eprint={2503.06987},<br/>\n\
&emsp;&emsp;archivePrefix={arXiv},<br/>\n\
&emsp;&emsp;primaryClass={cs.CL},<br/>\n\
&emsp;&emsp;url={https://arxiv.org/abs/2503.06987}<br/>\n\
}'


export const Cite = () => {
    return <Section title="Citing This Work">
        <div className="border-y-[1px] border-slate-400 py-3">
            <div>
                Jiho Jin, Woosung Kang, Junho Myung, and Alice Oh.
                2025.
                Social Bias Benchmark for Generation: A Comparison of Generation and QA-Based Evaluations.
                In <i>Findings of the Association for Computational Linguistics: ACL 2025</i>.
                Association for Computational Linguistics.
            </div>
        </div>
        <div className="mt-4">
            <div className="font-bold mb-1">BibTeX</div>
            <p className={"p-3 font-mono text-xs sm:text-sm border-[1px] rounded-lg border-slate-300 decoration-none"} dangerouslySetInnerHTML={{__html: bibTex}}/>
        </div>
        
    </Section>
}
