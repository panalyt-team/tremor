import React from 'react';

import {
    Pie,
    PieChart as ReChartsDonutChart,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';

import { Color, Height, MarginTop, ValueFormatter } from '../../../lib/inputTypes';
import {
    classNames,
    defaultColors,
    defaultValueFormatter,
    getHexFromColorThemeValue,
    parseHeight,
    parseMarginTop,
} from 'lib';

import { formatData, parseLabelInput } from './utils';
import { DonutChartTooltip } from './DonutChartTooltip';

export interface DonutChartDataPoint {
    value: number,
    name: string,
    color?: Color,
}

export interface DonutChartProps {
    data: DonutChartDataPoint[],
    valueFormatter?: ValueFormatter,
    label?: string,
    showLabel?: boolean,
    showAnimation?: boolean,
    showTooltip?: boolean,
    height?: Height,
    marginTop?: MarginTop,
}

const DonutChart = ({
    data = [],
    valueFormatter = defaultValueFormatter,
    label,
    showLabel = true,
    showAnimation = true,
    showTooltip = true,
    height = 'h-44',
    marginTop = 'mt-0',
}: DonutChartProps) => {
    const parsedLabelInput = parseLabelInput(label, valueFormatter, data);

    return (
        <div className={ classNames(
            'tremor-base tr-w-full',
            parseHeight(height),
            parseMarginTop(marginTop)
        ) }
        >
            <ResponsiveContainer width="100%" height="100%">
                <ReChartsDonutChart>
                    { showLabel ? (
                        <text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill={ getHexFromColorThemeValue(defaultColors.text) }
                        >
                            { parsedLabelInput }
                        </text>
                    ) : null }
                    <Pie
                        data={ formatData(data) }
                        cx="50%"
                        cy="50%"
                        startAngle={ 90 }
                        endAngle={ -270 }
                        innerRadius="75%"
                        outerRadius="100%"
                        paddingAngle={ 0 }
                        dataKey="value"
                        isAnimationActive={ showAnimation }
                    >
                    </Pie>
                    { showTooltip ? (
                        <Tooltip
                            wrapperStyle={ { outline: 'none' } }
                            content={ ({ active, payload }) => (
                                <DonutChartTooltip
                                    active={ active }
                                    payload={ payload }
                                    valueFormatter={ valueFormatter }
                                />
                            ) }
                        />
                    ) : null }
                </ReChartsDonutChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DonutChart;
