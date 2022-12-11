import React from "react";

export const Chart14 = () => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>配送地址</th>
          <th>需求物资描述</th>
          <th>供单批数 </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={4}>路程医院</td>
          <td>医用口罩</td>
          <td>10</td>
          <td rowSpan={4}>80</td>
        </tr>
        <tr>
          <td>洗手液</td>
          <td>20</td>
        </tr>
        <tr>
          <td> 急救箱</td>
          <td>20</td>
        </tr>
        <tr>
          <td>氧气罐</td>
          <td>30 </td>
        </tr>
        <tr>
          <td rowSpan={2}>刘家湾医院</td>
          <td>防毒口罩</td>
          <td>22</td>
          <td rowSpan={2}>44</td>
        </tr>
        <tr>
          <td>洗手液</td>
          <td>22</td>
        </tr>
        <tr>
          <td rowSpan={3}>街道分发处</td>
          <td>消毒液</td>
          <td>40</td>
          <td rowSpan={3}>68</td>
        </tr>
        <tr>
          <td>口罩</td>
          <td>22</td>
        </tr>
        <tr>
          <td>防毒面具</td>
          <td>45</td>
        </tr>
        <tr>
          <td rowSpan={2}>三康医院</td>
          <td>急救医药箱</td>
          <td>32</td>
          <td rowSpan={2}>102</td>
        </tr>
        <tr>
          <td>医用口罩</td>
          <td>80</td>
        </tr>
      </tbody>
    </table>
  );
};
