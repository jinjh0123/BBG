import { Section } from "../components/Section"
import React from "react"
import Plot from 'react-plotly.js'

export const Evaluation = () => {
    const scatter_en = [
        { xaxis: 'x1', yaxis: 'y1', x: 0.8868, y: 0.6228, color: '#f7c9aa', showlegend: false, model: 'Llama-3.3-70B-Instruct-Turbo' },
        { xaxis: 'x1', yaxis: 'y1', x: 0.9446, y: 0.6026, color: '#f6a47c', showlegend: false, model: 'gemini-2.0-flash-001' },
        { xaxis: 'x1', yaxis: 'y1', x: 0.9791, y: 0.5733, color: '#f47d57', showlegend: false, model: 'gpt-4o-2024-11-20' },
        { xaxis: 'x1', yaxis: 'y1', x: 0.4265, y: 0.6405, color: '#ed503e', showlegend: false, model: 'claude-3-haiku-20240307' },
        { xaxis: 'x1', yaxis: 'y1', x: 0.7701, y: 0.6345, color: '#d92847', showlegend: false, model: 'HCX-003' },
        { xaxis: 'x1', yaxis: 'y1', x: 0.9164, y: 0.6362, color: '#b91657', showlegend: false, model: 'gpt-4-turbo-2024-04-09' },
        { xaxis: 'x1', yaxis: 'y1', x: 0.4851, y: 0.5966, color: '#921c5b', showlegend: false, model: 'HCX-DASH-001' },
        { xaxis: 'x1', yaxis: 'y1', x: 0.9688, y: 0.6866, color: '#691f55', showlegend: false, model: 'Qwen2.5-72B-Instruct-Turbo' },
        { xaxis: 'x1', yaxis: 'y1', x: 0.3728, y: 0.6362, color: '#451c47', showlegend: false, model: 'gpt-3.5-turbo-0125' },
        { xaxis: 'x1', yaxis: 'y1', x: 0.9640, y: 0.5470, color: '#221331', showlegend: false, model: 'claude-3-5-sonnet-20241022' },
        { xaxis: 'x2', yaxis: 'y2', x: 0.0907, y: 0.1795, color: '#f7c9aa', showlegend: true, model: 'Llama-3.3-70B-Instruct-Turbo' },
        { xaxis: 'x2', yaxis: 'y2', x: 0.0446, y: 0.1690, color: '#f6a47c', showlegend: true, model: 'gemini-2.0-flash-001' },
        { xaxis: 'x2', yaxis: 'y2', x: 0.0192, y: 0.1610, color: '#f47d57', showlegend: true, model: 'gpt-4o-2024-11-20' },
        { xaxis: 'x2', yaxis: 'y2', x: 0.2912, y: 0.1565, color: '#ed503e', showlegend: true, model: 'claude-3-haiku-20240307' },
        { xaxis: 'x2', yaxis: 'y2', x: 0.1519, y: 0.1517, color: '#d92847', showlegend: true, model: 'HCX-003' },
        { xaxis: 'x2', yaxis: 'y2', x: 0.0573, y: 0.1504, color: '#b91657', showlegend: true, model: 'gpt-4-turbo-2024-04-09' },
        { xaxis: 'x2', yaxis: 'y2', x: 0.2381, y: 0.1435, color: '#921c5b', showlegend: true, model: 'HCX-DASH-001' },
        { xaxis: 'x2', yaxis: 'y2', x: 0.0261, y: 0.1267, color: '#691f55', showlegend: true, model: 'Qwen2.5-72B-Instruct-Turbo' },
        { xaxis: 'x2', yaxis: 'y2', x: 0.2384, y: 0.1239, color: '#451c47', showlegend: true, model: 'gpt-3.5-turbo-0125' },
        { xaxis: 'x2', yaxis: 'y2', x: 0.0274, y: 0.1028, color: '#221331', showlegend: true, model: 'claude-3-5-sonnet-20241022' },
    ];

    const scatter_ko = [
        { xaxis: 'x1', yaxis: 'y1', x: 0.8668, y: 0.5332, color: '#f7c9aa', showlegend: false, model: 'gpt-4o-2024-11-20' },
        { xaxis: 'x1', yaxis: 'y1', x: 0.8640, y: 0.4919, color: '#f6a47c', showlegend: false, model: 'claude-3-5-sonnet-20241022' },
        { xaxis: 'x1', yaxis: 'y1', x: 0.8988, y: 0.5276, color: '#f47d57', showlegend: false, model: 'gemini-2.0-flash-001' },
        { xaxis: 'x1', yaxis: 'y1', x: 0.8103, y: 0.5636, color: '#ed503e', showlegend: false, model: 'gpt-4-turbo-2024-04-09' },
        { xaxis: 'x1', yaxis: 'y1', x: 0.7035, y: 0.5532, color: '#d92847', showlegend: false, model: 'HCX-003' },
        { xaxis: 'x1', yaxis: 'y1', x: 0.9269, y: 0.6120, color: '#b91657', showlegend: false, model: 'Qwen2.5-72B-Instruct-Turbo' },
        { xaxis: 'x1', yaxis: 'y1', x: 0.6309, y: 0.5605, color: '#921c5b', showlegend: false, model: 'Llama-3.3-70B-Instruct-Turbo' },
        { xaxis: 'x1', yaxis: 'y1', x: 0.2017, y: 0.5973, color: '#691f55', showlegend: false, model: 'claude-3-haiku-20240307' },
        { xaxis: 'x1', yaxis: 'y1', x: 0.4792, y: 0.5577, color: '#451c47', showlegend: false, model: 'HCX-DASH-001' },
        { xaxis: 'x1', yaxis: 'y1', x: 0.2722, y: 0.5717, color: '#221331', showlegend: false, model: 'gpt-3.5-turbo-0125' },
        { xaxis: 'x2', yaxis: 'y2', x: 0.1094, y: 0.2504, color: '#f7c9aa', showlegend: true, model: 'gpt-4o-2024-11-20' },
        { xaxis: 'x2', yaxis: 'y2', x: 0.1126, y: 0.2422, color: '#f6a47c', showlegend: true, model: 'claude-3-5-sonnet-20241022' },
        { xaxis: 'x2', yaxis: 'y2', x: 0.0705, y: 0.2336, color: '#f47d57', showlegend: true, model: 'gemini-2.0-flash-001' },
        { xaxis: 'x2', yaxis: 'y2', x: 0.1477, y: 0.2108, color: '#ed503e', showlegend: true, model: 'gpt-4-turbo-2024-04-09' },
        { xaxis: 'x2', yaxis: 'y2', x: 0.2035, y: 0.1881, color: '#d92847', showlegend: true, model: 'HCX-003' },
        { xaxis: 'x2', yaxis: 'y2', x: 0.0556, y: 0.1851, color: '#b91657', showlegend: true, model: 'Qwen2.5-72B-Instruct-Turbo' },
        { xaxis: 'x2', yaxis: 'y2', x: 0.2753, y: 0.1842, color: '#921c5b', showlegend: true, model: 'Llama-3.3-70B-Instruct-Turbo' },
        { xaxis: 'x2', yaxis: 'y2', x: 0.3979, y: 0.1672, color: '#691f55', showlegend: true, model: 'claude-3-haiku-20240307' },
        { xaxis: 'x2', yaxis: 'y2', x: 0.2411, y: 0.1512, color: '#451c47', showlegend: true, model: 'HCX-DASH-001' },
        { xaxis: 'x2', yaxis: 'y2', x: 0.2872, y: 0.1256, color: '#221331', showlegend: true, model: 'gpt-3.5-turbo-0125' },
    ];

    function makeData({ scatterData }) {
        return [
            ...scatterData.map(({ xaxis, yaxis, x, y, color, showlegend, model }) => ({
                xaxis: xaxis, yaxis: yaxis,
                x: [x], y: [y],
                type: 'scatter', mode: 'markers',
                marker: { size: 12, color: color, line: {color: 'black', width: 1} },
                showlegend: showlegend,
                legendgroup: model,
                name: model,
            })),
            {
                xaxis: 'x1', yaxis: 'y1',
                x: [0, 1], y: [0, 1],
                type: 'scatter', mode: 'lines',
                line: { width: 2, color: '#A0A0A0', dash: 'dot' },
                name: 'y=x',
                showlegend: false
            },
            {
                xaxis: 'x2', yaxis: 'y2',
                x: [0, 1], y: [0, 1],
                type: 'scatter', mode: 'lines',
                line: { width: 2, color: '#A0A0A0', dash: 'dot' },
                name: 'y=x',
                showlegend: false
            }
        ];
    }

    function makeLayout({ title }) {
        return {
            autosize: true,
            title: { text: title, x: 0 },
            grid: { rows: 1, columns: 2, pattern: 'independent' },
            xaxis: { title: 'acc_amb', range: [0, 1], dtick: 0.2 },
            yaxis: { title: 'ntr_gen', range: [0, 1], dtick: 0.2 },
            xaxis2: { title: 'bias_amb', range: [0, 1], dtick: 0.2 },
            yaxis2: { title: 'bias_gen', range: [0, 1], dtick: 0.2 },
            paper_bgcolor: 'rgba(0,0,0,0)', plot_bgcolor: 'rgba(0,0,0,0)',
            annotations: [
                {
                text: "Neutrality",
                showarrow: false,
                x: 0.5, xref: "x domain",
                y: 1.13, yref: "y domain",
                font: { size: 17 }
                },
                {
                text: "Bias",
                showarrow: false,
                x: 0.5, xref: "x2 domain",
                y: 1.13, yref: "y2 domain",
                font: { size: 17 }
                }
            ],
            legend: {
                traceorder: 'normal',
                y: 0.5
            },
        };
    }

    const data_en = makeData({
        scatterData: scatter_en
    });
    const data_ko = makeData({
        scatterData: scatter_ko
    });
    const layout_en = makeLayout({
        title: 'EnBBG vs. EnBBQ'
    });
    const layout_ko = makeLayout({
        title: 'KoBBG vs. KoBBQ'
    });

    const plotStyle = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    };

    const plotContainerStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    };

    return <Section title="Bias in Generation vs. Bias in QA">
        <p className="mb-4">
            When comparing our BBG's results with the original BBQ's accuracy and bias scores in ambiguous contexts,
            the bias scores in QA and generation tasks do not positively correlate, nor do the QA accuracy and neutral generation scores.
            Language models exhibit different biases when evaluated in QA versus generation tasks.
        </p>
        <div style={plotContainerStyle}>
            <div style={plotStyle}>
                <Plot data={data_en} layout={layout_en} config={{responsive: true}} style={{width: "100%"}}/>
            </div>
            <div style={plotStyle}>
                <Plot data={data_ko} layout={layout_ko} config={{responsive: true}} style={{width: "100%"}}/>
            </div>
        </div>

        
        

    </Section>
}