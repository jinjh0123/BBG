// Table: https://github.com/light9639/React-Table-TypeScript.git

import { Section } from "../components/Section"
import React, { useState } from "react"

export const Dataset = () => {
    return <Section title="BBG: Bias Benchmark for Generation">
        <p className="mb-4">
        We propose the Bias Benchmark for Generation (<span className="p-2 py-0.5 rounded-full bg-red-400 text-white">BBG</span>), a benchmark for assessing bias in story generation, built on the
        English <a href="https://github.com/nyu-mll/BBQ" target="_blank" rel="noopener noreferrer" className="inline-block p-2 py-0.5 rounded-full bg-[#ff9164] text-white cursor-pointer transition-transform duration-100 hover:scale-105 shadow hover:shadow-lg">BBQ</a> and
        Korean BBQ (<a href="https://jinjh0123.github.io/KoBBQ" target="_blank" rel="noopener noreferrer" className="inline-block p-2 py-0.5 rounded-full bg-[#ff9164] text-white cursor-pointer transition-transform duration-100 hover:scale-105 shadow hover:shadow-lg">KoBBQ</a>) datasets.
        To adapt the existing multiplechoice format of BBQ for long-form generation, we first obfuscate contextual data by replacing character references with neutral placeholders ('one' and 'the other') and prompt the language model to generate a continuation of the story.
        We then assess bias in the generated output by determining whether the placeholders are consistently assigned to specific characters using machine reading comprehension.
        </p>
        <img alt="phases figure" className="w-full my-8" src={require('../../public/images/bbg_framework.svg')}/>
    </Section>
}