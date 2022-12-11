import React from 'react';

export const Chart5 = () => { 
    //表格主要分两部分,thead，tbody
  return (
    <div className="战果">
      <h2>管控区防控人员体系</h2> 
      <table> 
        <thead>
        <tr>
          <th>年份</th><th>感染人数</th><th>医护人员</th><th>配送人员</th><th>社区防空人员</th>
          <th>志愿者</th><th>合计</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>2020</td><td>7</td><td>54</td><td>67</td><td>5</td><td>40</td><td>124</td>
        </tr>
        <tr>
          <td>2021</td><td>22</td><td>87</td><td>89</td><td>9</td><td>60</td><td>235</td>
        </tr>
        <tr>
          <td>2022</td><td>50</td><td>304</td><td>182</td><td>25</td><td>100</td><td>587</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};