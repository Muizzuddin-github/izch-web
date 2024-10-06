import PlotlyScatter from "../components/PlotlyScatter";
import { transformatifReaction } from "../../helper/keqingMain/reaction";
import { enemyResMult } from "../../helper/keqingMain/generalDMG";
import {
  calculateDamageDifferencePercentageIncrease,
  formatNumber,
  fromPercentage,
} from "../../helper/helpers";

const Hyperbloom = () => {
  const peningkatan = [];
  const dataDMG = [];
  const elementalMastery = [];
  const dataDMGShow = [];

  let incre = 0;

  for (let i = 0; i <= 1800; i += 100) {
    const result =
      transformatifReaction("Hyperbloom", 90, i) *
      enemyResMult(fromPercentage("10%"), fromPercentage("30%"));
    dataDMG.push(+result.toFixed(0));
    dataDMGShow.push(formatNumber(+result.toFixed(0)) + "k");

    elementalMastery.push(i);

    if (incre === 0) {
      peningkatan.push("0%");
    } else {
      const perbedaan = calculateDamageDifferencePercentageIncrease(
        dataDMG[incre - 1],
        result
      );
      peningkatan.push(perbedaan + "%");
    }

    incre++;
  }

  const data1 = {
    x: elementalMastery,
    y: peningkatan,
    type: "scatter",
    mode: "lines+markers+text",
    name: "Peningkatan",
    text: peningkatan,
    textposition: "top right",
    hovertemplate: "%{y}%",
  };
  const data2 = {
    x: elementalMastery,
    y: dataDMG,
    type: "scatter",
    mode: "lines+markers+text",
    name: "Damage",
    text: dataDMGShow,
    textposition: "top left",
    hovertemplate: "%{y}",
  };
  return (
    <section>
      <section className="ml-6 mt-5 absolute top-0 z-10 ">
        <p className="font-bold">Level character: 90</p>
        <p className="font-bold">Enemy res: 10%</p>
      </section>
      <section className="p-10 min-w-screen-sm overflow-x-scroll">
        <PlotlyScatter
          data={data1}
          title={"Grafik Deminishing Return"}
          nameHorizontal={"Elemental mastery"}
          nameVertikal={"Peningkatan"}
        />
        {window.innerWidth <= 1669 ? <p>Geser</p> : ""}
      </section>
      <section className="p-10 min-w-screen-sm overflow-x-scroll">
        <PlotlyScatter
          data={data2}
          title={"Grafik Damage Hyperbloom + Deepwood Memories"}
          nameHorizontal={"Elemental mastery"}
          nameVertikal={"Damage"}
        />
        {window.innerWidth <= 1669 ? <p>Geser</p> : ""}
      </section>
    </section>
  );
};

export default Hyperbloom;
