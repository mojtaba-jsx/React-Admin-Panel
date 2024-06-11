import React from "react";
import "./Home.css";
import Features from "../../components/Features/Features";
import Chart from "../../components/Chart/Chart";
import WidgetSm from '../../components/WidgetSm/WidgetSm';

import { xAxisData } from "../../datas";
function Home() {
  return (
    <div>
      <Features />
      <div className="home">
        <Features />
        <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale" />
        <div className="home-widgets">
          <WidgetSm />
        </div>
      </div>
    </div>
  );
}

export default Home;
