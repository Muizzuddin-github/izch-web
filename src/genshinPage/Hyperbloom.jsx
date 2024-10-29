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
  const dataDMGDeepwood = [];
  const elementalMastery = [];
  const dataDMGDeepwoodShow = [];

  const dataDMGNoDeepwood = [];
  const dataDMGNoDeepwoodShow = [];

  let incre = 0;

  for (let i = 0; i <= 1800; i += 100) {
    const resultDeepwood =
      transformatifReaction("Hyperbloom", 90, i) *
      enemyResMult(fromPercentage("10%"), fromPercentage("30%"));
    dataDMGDeepwood.push(+resultDeepwood.toFixed(0));
    dataDMGDeepwoodShow.push(formatNumber(+resultDeepwood.toFixed(0)) + "k");

    const resultNoDeepwood =
      transformatifReaction("Hyperbloom", 90, i) *
      enemyResMult(fromPercentage("10%"), fromPercentage("0%"));
    dataDMGNoDeepwood.push(+resultNoDeepwood.toFixed(0));
    dataDMGNoDeepwoodShow.push(+resultNoDeepwood.toFixed(0));

    elementalMastery.push(i);

    if (incre === 0) {
      peningkatan.push("0%");
    } else {
      const perbedaan = calculateDamageDifferencePercentageIncrease(
        dataDMGDeepwood[incre - 1],
        resultDeepwood
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
    name: "",
    text: peningkatan,
    textposition: "top right",
    hovertemplate: "%{x} EM, %{y}% Peningkatan",
  };

  const data2 = {
    x: elementalMastery,
    y: dataDMGNoDeepwood,
    type: "scatter",
    mode: "lines+markers+text",
    name: "",
    text: dataDMGNoDeepwoodShow,
    textposition: "top left",
    hovertemplate: "%{x} EM, %{y} Damage",
  };

  const data3 = {
    x: elementalMastery,
    y: dataDMGDeepwood,
    type: "scatter",
    mode: "lines+markers+text",
    name: "",
    text: dataDMGDeepwoodShow,
    textposition: "top left",
    hovertemplate: "%{x} EM, %{y} Damage",
  };

  return (
    <section>
      <section className="ml-6 mt-5 absolute top-0 z-10 ">
        <p className="font-bold">Level character: 90</p>
        <p className="font-bold">Enemy res: 10%</p>
      </section>
      <section className="p-10 min-w-screen-sm overflow-x-scroll geser:overflow-auto">
        <PlotlyScatter
          data={data1}
          title={"Grafik Deminishing Return"}
          nameHorizontal={"Elemental mastery"}
          nameVertikal={"Peningkatan"}
        />
        {window.innerWidth <= 1669 ? <p>Geser</p> : ""}
      </section>
      <section className="p-10 min-w-screen-sm overflow-x-scroll geser:overflow-auto">
        <PlotlyScatter
          data={data2}
          title={"Grafik Damage Hyperbloom"}
          nameHorizontal={"Elemental mastery"}
          nameVertikal={"Damage"}
        />
        {window.innerWidth <= 1669 ? <p>Geser</p> : ""}
      </section>
      <section className="p-10 min-w-screen-sm overflow-x-scroll geser:overflow-auto">
        <PlotlyScatter
          data={data3}
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
