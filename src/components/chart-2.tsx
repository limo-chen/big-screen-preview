import React, { useEffect,useRef } from 'react';
import * as echarts from 'echarts';
import { px } from './../shared/px';
import {baseEchartOptions} from '../shared/base-echart-options';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart2 = ()=>{
    const divRef = useRef(null);
    const myChart = useRef(null);
    const data = [
      {name: '扶风区', 2011: 2, 2012: 3},
      {name: '都城区', 2011: 2, 2012: 3},
      {name: '古溪区', 2011: 2, 2012: 3},
      {name: '临安区', 2011: 2, 2012: 3},
      {name: '蓝皋区', 2011: 2, 2012: 3},
      {name: '中余县', 2011: 2, 2012: 3},
      {name: '新区屯县', 2011: 2, 2012: 3},
      {name: '机场县', 2011: 2, 2012: 3},
      {name: '新开发区', 2011: 2, 2012: 3},
    ]
    useEffect(() => {
      setInterval(() => {  //做一个定时器，每一秒后得到一个新的data， 每一秒给一个随机数
        const newData = [
          {name: '扶风区', 2011: 2, 2012: Math.random() * 10},
          {name: '都城区', 2011: 2, 2012: 3},
          {name: '古溪区', 2011: 2, 2012: 3},
          {name: '临安区', 2011: 2, 2012: 3},
          {name: '蓝皋区', 2011: 2, 2012: 3},
          {name: '中余县', 2011: 2, 2012: 3},
          {name: '新区屯县', 2011: 2, 2012: 3},
          {name: '机场县', 2011: 2, 2012: 3},
          {name: '新开发区', 2011: 2, 2012: 3},
        ];
        x(newData);//有了这个x,我们拿到newdata就可以再次执行一下这个x
      }, 1000);
    }, []);
    const x = (data) => {
      myChart.current.setOption(createEchartsOptions({ //初始化
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            splitLine: {show: false},
            axisLabel: {show: false}
          },
          yAxis: {
            axisTick: {show: false},
            type: 'category',
            data: data.map(i => i.name),//y轴对于每一项取到他的name
            axisLabel: {
            formatter(val) {
              return val.replace('公安局', '\n公安局');
            }
          }
          },
          series: [
            {
              name: '2011年',
              type: 'bar',
              data: data.map(i => i[2011]),//对data进行map，取到他2011年的所有数据
              itemStyle: {  //渐变
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#2034F9'
                  }, {
                    offset: 1,
                    color: '#04A1FF'
                  }]),
                }
              }
            },
            {
              name: '2012年',
              type: 'bar',
              data: data.map(i => i[2012]),//取到他2012年的所有数据
              itemStyle: { //渐变
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#B92AE8'
                  }, {
                    offset: 1,
                    color: '#6773E7'
                  }]),
                }
              }
            }
          ]
        }));
        
  };
  //把直接执行改成先初始化myChart，然后执行x函数，x接受data会把选项弄到mychart上面
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
      }, []);

    return(
        <div className=" bordered 破获排名">
        <h2>疫情实时动态</h2>
        <div ref={divRef} className="chart"/>
      <div className="legend">
        <span className="first"/> 无症状患者
        <span className="second"/> 新确诊患者
    
        </div>
        </div> 
    )  
}