/* eslint-disable react/prop-types */
import Plot from "react-plotly.js";

const PlotlyScatter = ({ data, title, nameVertikal, nameHorizontal }) => {
  return (
    <Plot
      data={[data]}
      config={{
        displayModeBar: false, // Sembunyikan toolbar interaksi
        staticPlot: false, // Izinkan hover
        editable: false, // Nonaktifkan mode edit
        modeBarButtonsToRemove: [
          "zoom2d", // Hapus tombol zoom in/out
          "pan2d", // Hapus tombol pan
          "select2d", // Hapus tombol select
          "lasso2d", // Hapus tombol lasso
          "resetScale2d", // Hapus tombol reset scale
          "toggleSpikelines", // Hapus tombol toggle spike lines
        ],
      }}
      layout={{
        width: 1800,
        height: 800,
        dragmode: false, // Nonaktifkan drag mode
        hovermode: "closest", // Hover pada titik terdekat
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
