import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart3 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      legend: {  //标记位置
        bottom: px(3),//距底部10像素
        textStyle: {color: 'white'},//字体白色
        itemWidth: px(30),//每一项宽度30
        itemHeight: px(15)//..高度
      },
      grid: {
        x: px(20),
        x2: px(20),
        y: px(20),
        y2: px(70),
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [2019,2020,2021,2022],
        splitLine: {show: true, lineStyle: {color: '#073E78'}},//表格竖线
        axisTick: {show: false},//去掉坐标线上的分割小竖线
        axisLine: {show: false},//去掉x轴白线
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },
      series: [ //折线上圆球设置
        {
          name: '配送',
          type: 'line',
          data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09].reverse()
        },
        {
          name: '核酸人员',
          type: 'line',
          data: [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10].reverse()
        },
        {
          name: '志愿者',
          type: 'line',
          data: [0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11].reverse()
        },
        {
          name: '社区保障',
          type: 'line',
          data: [0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12].reverse()
        },
        {
          name: '救护',
          type: 'line',
          data: [0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12, 0.13].reverse()
        }
      ].map(obj => ({//map的意思是，对于我这数组里的每一个对象，我在里面加了三个属性，
        ...obj,
        symbol: 'circle',//表示他是一个圆圈
        symbolSize: px(12),//宽度是12px
        lineStyle: {width: px(2)}//线是2px
      }))
    }));
  }, []);

  return (
    <div className="bordered 发案趋势">
      <h2>防疫人员分析</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};