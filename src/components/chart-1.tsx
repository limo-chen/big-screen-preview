import React, { useEffect,useRef } from 'react';
import * as echarts from 'echarts';
const px = (n) => n / 2420 * (window as any).pageWidth;
import {baseEchartOptions} from '../shared/base-echart-options';

export const Chart1 =()=>{
    const divRef = useRef(null);
    useEffect(() => {
      var myChart = echarts.init(divRef.current);
      myChart.setOption({
 ...baseEchartOptions, 
        xAxis: {
          data: ['扶风区', '都城区', '古溪区', '临安区', '蓝皋区', '中余县', '新区屯县', '机场县', '新开发区'],
          axisTick: {show: false},//去掉数轴上的尖尖
          axisLine: {
            lineStyle: {color: '#083B70'}
          },
          axisLabel: {
            fontSize: px(12),
            formatter(val) {
              if (val.length > 2) {
                const array = val.split('');
                array.splice(2, 0, '\n');
                return array.join('');
              } else {
                return val;
              }
            }
          },
        },
    
        yAxis: {
          splitLine: {show: false},
          axisLine: {
            show: true,
            lineStyle: {color: '#083B70'}
          },
          axisLabel: {
            fontSize: px(12)
          }
        },
        series: [{
          type: 'bar',
          data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
        }]
      });
    }, []);
    return(
        <div className=" bordered 管辖统计">
        <h2>地区确诊人数统计</h2>
        <div ref={divRef} className='chart'>
    
        </div>
        </div> 
    )
    
}