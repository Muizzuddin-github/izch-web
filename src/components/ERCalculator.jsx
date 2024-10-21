import { useEffect } from "react";
import { useState } from "react";

const ERCalculator = () => {
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
    <section className="flex justify-center mt-5 p-10">
      <form className="text-center">
        <section className="flex gap-10 flex-wrap justify-center">
          <section>
            <p>On field elemen sama</p>
            <input
              type="number"
              className="border border-gray-400 p-1 rounded-md outline-none"
              defaultValue={0}
              min={0}
              onChange={(e) => {
                if (e.target.value.length === 0) {
                  e.target.value = 0;
                } else if (
                  e.target.value[0] === "0" &&
                  e.target.value.length > 1
                ) {
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
                if (e.target.value.length === 0) {
                  e.target.value = 0;
                } else if (
                  e.target.value[0] === "0" &&
                  e.target.value.length > 1
                ) {
                  e.target.value = e.target.value.slice(1);
                }
                setOffFieldElemenSama(+e.target.value * 1.8);
              }}
            />
          </section>
          <section>
            <p>On field elemen berbeda</p>
            <input
              type="number"
              className="border border-gray-400 p-1 rounded-md outline-none"
              defaultValue={0}
              min={0}
              onChange={(e) => {
                if (e.target.value.length === 0) {
                  e.target.value = 0;
                } else if (
                  e.target.value[0] === "0" &&
                  e.target.value.length > 1
                ) {
                  e.target.value = e.target.value.slice(1);
                }
                setOnFieldElemenBerbeda(+e.target.value * 1.0);
              }}
            />
          </section>
          <section>
            <p>Off field elemen berbeda</p>
            <input
              type="number"
              className="border border-gray-400 p-1 rounded-md outline-none"
              defaultValue={0}
              min={0}
              onChange={(e) => {
                if (e.target.value.length === 0) {
                  e.target.value = 0;
                } else if (
                  e.target.value[0] === "0" &&
                  e.target.value.length > 1
                ) {
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
                if (e.target.value.length === 0) {
                  e.target.value = 0;
                } else if (
                  e.target.value[0] === "0" &&
                  e.target.value.length > 1
                ) {
                  e.target.value = e.target.value.slice(1);
                }
                setOnFieldPutih(+e.target.value * 2.0);
              }}
            />
          </section>
          <section>
            <p>Off field putih</p>
            <input
              type="number"
              className="border border-gray-400 p-1 rounded-md outline-none"
              defaultValue={0}
              min={0}
              onChange={(e) => {
                if (e.target.value.length === 0) {
                  e.target.value = 0;
                } else if (
                  e.target.value[0] === "0" &&
                  e.target.value.length > 1
                ) {
                  e.target.value = e.target.value.slice(1);
                }
                setOffFieldPutih(+e.target.value * 1.2);
              }}
            />
          </section>
        </section>

        <section className="flex gap-10 mt-5 justify-center flex-wrap">
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
                if (e.target.value.length === 0) {
                  e.target.value = 0;
                } else if (
                  e.target.value[0] === "0" &&
                  e.target.value.length > 1
                ) {
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
                if (e.target.value.length === 0) {
                  e.target.value = 0;
                } else if (
                  e.target.value[0] === "0" &&
                  e.target.value.length > 1
                ) {
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
  );
};

export default ERCalculator;
