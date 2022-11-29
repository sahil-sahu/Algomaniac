import React from "react";

// import ChartCard from '../components/Chart/ChartCard'
// import { Doughnut, Line, Bar } from 'react-chartjs-2'
// import ChartLegend from '../components/Chart/ChartLegend'
// import PageTitle from '../components/Typography/PageTitle'
// import {
//   doughnutOptions,
//   lineOptions,
//   barOptions,
//   doughnutLegends,
//   lineLegends,
//   barLegends,
// } from '../utils/demo/chartsData'

function Charts() {
  return (
    // <>
    //   <PageTitle>Charts</PageTitle>

    //   <div className="grid gap-6 mb-8 md:grid-cols-2">
    //     <ChartCard title="Doughnut">
    //       <Doughnut {...doughnutOptions} />
    //       <ChartLegend legends={doughnutLegends} />
    //     </ChartCard>

    //     <ChartCard title="Lines">
    //       <Line {...lineOptions} />
    //       <ChartLegend legends={lineLegends} />
    //     </ChartCard>

    //     <ChartCard title="Bars">
    //       <Bar {...barOptions} />
    //       <ChartLegend legends={barLegends} />
    //     </ChartCard>
    //   </div>
    // </>
    <div className="flex flex-col space-y-6">
      <h1 className="text-white">Add complaint</h1>
      <div>
        <button className="bg-white text-black p-2">Add an image</button>
      </div>
      <div>
        <button className="bg-white text-black p-2">add location</button>
      </div>
    </div>
  );
}

export default Charts;
