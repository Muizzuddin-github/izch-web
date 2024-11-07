import { calculateDamageDifferencePercentageIncrease } from "../../helper/helpers";
import PlotlyScatter from "../components/PlotlyScatter";

const Vaporize = () => {
  let vaporizePeningkatan = [];
  let vaporize = [];
  let EM = [];
  let incre = 0;
  for (let i = 0; i <= 1000; i += 100) {
    const reactionMultiplierVaporize = 1.5;
    const rumus = 1 + (2.78 * i) / (1400 + i) + 0;
    const result = reactionMultiplierVaporize * rumus;
    vaporize.push(result);

    if (incre === 0) {
      vaporizePeningkatan.push("0%");
    } else {
      const peningkatan = calculateDamageDifferencePercentageIncrease(
        vaporize[incre - 1],
        result
      );

      vaporizePeningkatan.push(peningkatan + "%");
    }

    EM.push(i);

    incre++;
  }

  const data1 = {
    x: EM,
    y: vaporizePeningkatan,
    type: "scatter",
    mode: "lines+markers+text",
    name: "",
    text: vaporizePeningkatan,
    textposition: "top right",
    hovertemplate: "%{x} EM",
  };

  return (
    <section>
      <section className="bg-white dark:bg-gray-900">
        <section className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Genshin impact Amplifying Reaction
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Amplifying Reaction meliputi reaksi Vaporize dan Melt, damage reaksi
            ini berasal dari reaction multiplier dan elemental mastery karakter
          </p>
        </section>
      </section>

      <section className="text-center">
        <section>
          <section>
            <h1 className="pt-10 font-medium text-2xl">Reaksi Vaporize</h1>
            <p className="mt-4">
              Reaksi vaporize terjadi jika element pyro bertemu dengan elemen
              hydro (<strong>Reverse vaporize</strong>) atau element hydro
              bertemu dengan element pyro (<strong>Forward vaporize</strong>){" "}
            </p>
          </section>

          <section className="flex justify-center mt-10">
            <section className="flex gap-10 flex-col">
              <section className="flex w-fit flex-col gap-2">
                <section className="flex w-fit gap-20">
                  <section>
                    <img src="/Element_Pyro.webp" alt="elemen pyro" />
                    <p>Pemicu</p>
                  </section>
                  <section>
                    <img src="/Element_Hydro.webp" alt="elemen hydro" />
                    <p>Musuh</p>
                  </section>
                </section>
                <section className="text-center text-sm font-medium">
                  <p>Vaporize dipicu pyro</p>
                  <p>Reaksi multiplier x 1.5</p>
                </section>
              </section>

              <section className="flex w-fit flex-col gap-2">
                <section className="flex w-fit gap-20">
                  <section>
                    <img src="/Element_Hydro.webp" alt="elemen hydro" />
                    <p>Pemicu</p>
                  </section>
                  <section>
                    <img src="/Element_Pyro.webp" alt="elemen pyro" />
                    <p>Musuh</p>
                  </section>
                </section>
                <section className="text-center text-sm font-medium">
                  <p>Vaporize dipicu hydro</p>
                  <p>Reaksi multiplier x 2</p>
                </section>
              </section>
            </section>
          </section>
        </section>

        <section>
          <section>
            <h1 className="pt-10 font-medium text-2xl">Reaksi Melt</h1>
            <p className="mt-4">
              Reaksi melt terjadi jika element cryo bertemu dengan element pyro
              (<strong>Reverse melt</strong>) atau element pyro bertemu dengan
              element cyro (<strong>Forward melt</strong>){" "}
            </p>
          </section>

          <section className="flex justify-center mt-10">
            <section className="flex gap-10 flex-col">
              <section className="flex w-fit flex-col gap-2">
                <section className="flex w-fit gap-20">
                  <section>
                    <img src="/Element_Cryo.webp" alt="elemen cryo" />
                    <p>Pemicu</p>
                  </section>
                  <section>
                    <img src="/Element_Pyro.webp" alt="elemen pyro" />
                    <p>Musuh</p>
                  </section>
                </section>
                <section className="text-center text-sm font-medium">
                  <p>Melt dipicu cryo</p>
                  <p>Reaksi multiplier x 1.5</p>
                </section>
              </section>

              <section className="flex w-fit flex-col gap-2">
                <section className="flex w-fit gap-20">
                  <section>
                    <img src="/Element_Pyro.webp" alt="elemen pyro" />
                    <p>Pemicu</p>
                  </section>
                  <section>
                    <img src="/Element_Cryo.webp" alt="elemen cryo" />
                    <p>Musuh</p>
                  </section>
                </section>
                <section className="text-center text-sm font-medium">
                  <p>Melt dipicu pyro</p>
                  <p>Reaksi multiplier x 2</p>
                </section>
              </section>
            </section>
          </section>
        </section>

        <section className="mt-20">
          <section className="p-10 min-w-screen-sm overflow-x-scroll geser:overflow-auto">
            <PlotlyScatter
              data={data1}
              title={"Grafik Deminishing Return Amplifying Reaction"}
              nameHorizontal={"Elemental mastery"}
              nameVertikal={"Peningkatan"}
            />
            {window.innerWidth <= 1669 ? (
              <p className="text-start">Geser</p>
            ) : (
              ""
            )}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Vaporize;
