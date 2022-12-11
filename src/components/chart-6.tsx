import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import china from '../geo/china.json';//引入地图

export const Chart6 = () => {
  const divRef = useRef(null);
  const colors = {'青海省': '#BB31F7', '甘肃省': '#15B8FD', '四川省': '#06E1EE'};
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    // @ts-ignore
    echarts.registerMap('CN', china);//注册一个地图，地图叫CN，地图数据就是China
    myChart.setOption(createEchartsOptions({
      xAxis: {show: false},
      yAxis: {show: false},
      series: [//数据
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [//类型
            {name: '甘肃省', value: 1},
          ],
          label: {show: false, color: 'white'},
          itemStyle: {//甘肃的CSS
            areaColor: '#010D3D',
            color: colors['甘肃省'],
            borderColor: '#01A7F7',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            {name: '四川省', value: 100},
          ],
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['四川省'],
            borderColor: 'yellow',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            {name: '青海省', value: 100},
          ],
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['青海省'],
            borderColor: '#01A7F7',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },

      ]
    }));
  }, []);

  return (//wrapper做定位用的 //legend标记是绝对定位，放左上角 notes是注释绝对定位 //chart放原地
     <div className="bordered 籍贯">
      <h2>西部地区疫情防控监控地图</h2>
      <div className="wrapper">
        <div ref={divRef} className="chart"/>
        <div className="legend bordered">
          <span className="icon" style={{background: colors['甘肃省']}}/>甘肃
          <span className="icon" style={{background: colors['四川省']}}/>四川
          <span className="icon" style={{background: colors['青海省']}}/>青海
        </div>
        <div className="notes">此地图仅显示了中国的部分区域</div>
      </div>
    </div>
  );
};