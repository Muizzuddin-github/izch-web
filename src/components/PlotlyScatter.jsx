/* eslint-disable react/prop-types */
import Plot from "react-plotly.js";

const PlotlyScatter = ({ data, title, nameVertikal, nameHorizontal }) => {
  return (
    <Plot
      data={[data]}
      config={{
        staticPlot: true,
      }}
      layout={{
        width: 1800,
        height: 800,
        title: {
          text: title,
          font: {
            size: 24,
          },
        },
        xaxis: {
          title: {
            text: nameHorizontal,
            font: {
              size: 18,
            },
          },
        },
        yaxis: {
          title: {
            text: nameVertikal,
            font: {
              size: 18,
            },
          },
        },
        legend: {
          font: {
            size: 16,
          },
        },
      }}
    />
  );
};

export default PlotlyScatter;
