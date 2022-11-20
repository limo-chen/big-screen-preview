import {baseEchartOptions} from './base-echart-options';
import {px} from './px';

export const createEchartsOptions = (options) => { //声明一个函数，在options上加东西
  const result = {
    ...baseEchartOptions,//引入
    ...options,
  };
  if (!(options?.xAxis?.axisLabel?.fontSize)) { //判断
    result.xAxis = result.xAxis || {};
    result.xAxis.axisLabel = result.xAxis.axisLabel || {};
    result.xAxis.axisLabel.fontSize = px(12);
  }
  if (!(options?.yAxis?.axisLabel?.fontSize)) {
    result.yAxis = result.yAxis || {};
    result.yAxis.axisLabel = result.yAxis.axisLabel || {};
    result.yAxis.axisLabel.fontSize = px(12);
  }
  return result;
};