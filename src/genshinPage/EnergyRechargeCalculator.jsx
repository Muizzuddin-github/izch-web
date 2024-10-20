import { useEffect } from "react";
import { useState } from "react";

const EnergyRechargeCalculator = () => {
  const [onFieldElemenSama, setOnFieldElemenSama] = useState(0);
  const [offFieldElemenSama, setOffFieldElemenSama] = useState(0);
  const [onFieldElemenBerbeda, setOnFieldElemenBerbeda] = useState(0);
  const [offFieldElemenBerbeda, setOffFieldElemenBerbeda] = useState(0);
  const [onFieldPutih, setOnFieldPutih] = useState(0);
  const [offFieldPutih, setOffFieldPutih] = useState(0);
  const [penambahanTotalEnergy, setPenambahanTotalEnergy] = useState(0);
  const [kebutuhanEnergy, setKebutuhanEnergy] = useState("0.00");
  const [energyConst, setEnergyConst] = useState(0);

  useEffect(() => {
    const result =
      (energyConst /
        (onFieldElemenSama +
          offFieldElemenSama +
          onFieldElemenBerbeda +
          offFieldElemenBerbeda +
          onFieldPutih +
          offFieldPutih +
          penambahanTotalEnergy)) *
      100;

    if (isFinite(result)) {
      setKebutuhanEnergy(result.toFixed(2));
    }
  }, [
    onFieldElemenSama,
    offFieldElemenSama,
    onFieldElemenBerbeda,
    offFieldElemenBerbeda,
    onFieldPutih,
    offFieldPutih,
    penambahanTotalEnergy,
    kebutuhanEnergy,
    energyConst,
  ]);

  return (
    <section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-0 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Genshin energy recharge calculator
          </h1>
          <p className="mt-10 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Membantu para Traveler menghitung dengan mudah kebutuhan Energy
            Recharge untuk karakternya
          </p>
        </div>
      </section>

      <section>
        <section className="flex justify-center mt-5 border p-10">
          <form className="text-center">
            <section className="flex gap-10">
              <section>
                <p>On field elemen sama</p>
                <input
                  type="number"
                  className="border border-gray-400 p-1 rounded-md outline-none"
                  defaultValue={0}
                  min={0}
                  onChange={(e) => {
                    if (e.target.value[0] === "0") {
                      e.target.value = e.target.value.slice(1);
                    }

                    setOnFieldElemenSama(+e.target.value * 3);
                  }}
                />
              </section>
              <section>
                <p>Off field elemen sama</p>
                <input
                  type="number"
                  className="border border-gray-400 p-1 rounded-md outline-none"
                  defaultValue={0}
                  min={0}
                  onChange={(e) => {
                    if (e.target.value[0] === "0") {
                      e.target.value = e.target.value.slice(1);
                    }
                    setOffFieldElemenSama(+e.target.value * 1.8);
                  }}
                />
              </section>
              <section>
                <p>On field berbeda elemen</p>
                <input
                  type="number"
                  className="border border-gray-400 p-1 rounded-md outline-none"
                  defaultValue={0}
                  min={0}
                  onChange={(e) => {
                    if (e.target.value[0] === "0") {
                      e.target.value = e.target.value.slice(1);
                    }
                    setOnFieldElemenBerbeda(+e.target.value * 1);
                  }}
                />
              </section>
              <section>
                <p>Off field berbeda elemen</p>
                <input
                  type="number"
                  className="border border-gray-400 p-1 rounded-md outline-none"
                  defaultValue={0}
                  min={0}
                  onChange={(e) => {
                    if (e.target.value[0] === "0") {
                      e.target.value = e.target.value.slice(1);
                    }
                    setOffFieldElemenBerbeda(+e.target.value * 0.6);
                  }}
                />
              </section>
              <section>
                <p>On field putih</p>
                <input
                  type="number"
                  className="border border-gray-400 p-1 rounded-md outline-none"
                  defaultValue={0}
                  min={0}
                  onChange={(e) => {
                    if (e.target.value[0] === "0") {
                      e.target.value = e.target.value.slice(1);
                    }
                    setOnFieldPutih(+e.target.value * 2);
                  }}
                />
              </section>
              <section>
                <p>Off field putih</p>
                <input
                  type="number"
                  className="border border-gray-400 p-1 rounded-md outline-none"
                  defaultValue={0}
                  onChange={(e) => {
                    if (e.target.value[0] === "0") {
                      e.target.value = e.target.value.slice(1);
                    }
                    setOffFieldPutih(+e.target.value * 1.2);
                  }}
                />
              </section>
            </section>

            <section className="flex gap-10 mt-5 justify-center">
              <section>
                <p className="font-semibold">Total energy</p>
                <p>
                  {(
                    onFieldElemenSama +
                    offFieldElemenSama +
                    onFieldElemenBerbeda +
                    offFieldElemenBerbeda +
                    onFieldPutih +
                    offFieldPutih +
                    penambahanTotalEnergy
                  ).toFixed(2)}
                </p>
              </section>
              <section>
                <p>Penambahan total energy</p>
                <input
                  type="number"
                  className="border border-gray-400 p-1 rounded-md outline-none"
                  defaultValue={0}
                  onChange={(e) => {
                    if (e.target.value[0] === "0") {
                      e.target.value = e.target.value.slice(1);
                    }
                    setPenambahanTotalEnergy(+e.target.value);
                  }}
                />
              </section>
            </section>

            <section className="flex justify-center mt-5">
              <section>
                <p>Energy const</p>
                <input
                  type="number"
                  className="border border-gray-400 p-1 rounded-md outline-none"
                  defaultValue={0}
                  onChange={(e) => {
                    if (e.target.value[0] === "0") {
                      e.target.value = e.target.value.slice(1);
                    }
                    setEnergyConst(+e.target.value);
                  }}
                />
              </section>
            </section>

            <section className="mt-5">
              <section>
                <p className="font-bold">Kebutuhan energy recharge</p>
                <p>{kebutuhanEnergy}%</p>
              </section>
            </section>
          </form>
        </section>
      </section>
    </section>
  );
};

export default EnergyRechargeCalculator;
