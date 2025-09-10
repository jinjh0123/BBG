import { Section } from "../components/Section"

const bibTex = '@inproceedings{jin-etal-2025-social,<br/>\n\
&emsp;&emsp;title = "Social Bias Benchmark for Generation: A Comparison of Generation and {QA}-Based Evaluations",<br/>\n\
&emsp;&emsp;author = "Jin, Jiho  and  Kang, Woosung  and  Myung, Junho  and  Oh, Alice",<br/>\n\
&emsp;&emsp;booktitle = "Findings of the Association for Computational Linguistics: ACL 2025",<br/>\n\
&emsp;&emsp;month = jul,<br/>\n\
&emsp;&emsp;year = "2025",<br/>\n\
&emsp;&emsp;address = "Vienna, Austria",<br/>\n\
&emsp;&emsp;publisher = "Association for Computational Linguistics",<br/>\n\
&emsp;&emsp;url = "https://aclanthology.org/2025.findings-acl.585/",<br/>\n\
&emsp;&emsp;doi = "10.18653/v1/2025.findings-acl.585",<br/>\n\
&emsp;&emsp;pages = "11215--11228",<br/>\n\
&emsp;&emsp;ISBN = "979-8-89176-256-5"<br/>\n\
}'


export const Cite = () => {
    return <Section title="Citing This Work">
        <div className="border-y-[1px] border-slate-400 py-3">
            <div>
                Jiho Jin, Woosung Kang, Junho Myung, and Alice Oh.
                2025.
                Social Bias Benchmark for Generation: A Comparison of Generation and QA-Based Evaluations.
                In <i>Findings of the Association for Computational Linguistics: ACL 2025</i>, pages 11215–11228, Vienna, Austria.
                Association for Computational Linguistics.
            </div>
        </div>
        <div className="mt-4">
            <div className="font-bold mb-1">BibTeX</div>
            <p className={"p-3 font-mono text-xs sm:text-sm border-[1px] rounded-lg border-slate-300 decoration-none"} dangerouslySetInnerHTML={{__html: bibTex}}/>
        </div>
        
    </Section>
}
