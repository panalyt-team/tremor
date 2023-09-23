import { Color, ValueFormatter } from "../../../lib";
import type BaseAnimationTimingProps from "./BaseAnimationTimingProps";
import type BaseEventProps from "./BaseEventProps";

interface BaseChartProps extends BaseAnimationTimingProps, React.HTMLAttributes<HTMLDivElement> {
  data: any[];
  categories: string[];
  index: string;
  colors?: Color[];
  valueFormatter?: ValueFormatter;
  startEndOnly?: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
  yAxisWidth?: number;
  showTooltip?: boolean;
  showGradient?: boolean;
  showLegend?: boolean;
  showGridLines?: boolean;
  autoMinValue?: boolean;
  minValue?: number;
  maxValue?: number;
  allowDecimals?: boolean;
  noDataText?: string;
  onValueChange?: (value: BaseEventProps | null) => void;
}

export default BaseChartProps;
