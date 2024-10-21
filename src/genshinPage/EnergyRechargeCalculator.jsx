import ERCalculator from "../components/ERCalculator";

const EnergyRechargeCalculator = () => {
  return (
    <section>
      <section className="bg-white dark:bg-gray-900">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-16 lg:py-20">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-6xl dark:text-white">
            Genshin energy recharge calculator
          </h1>
          <p className="mt-10 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Membantu para Traveler menghitung dengan mudah kebutuhan Energy
            Recharge untuk karakternya
          </p>
        </div>
      </section>

      <ERCalculator />

      <section className="p-10 flex justify-center mt-20">
        <section>
          <h2 className="font-semibold text-xl text-center">Penjelasan</h2>

          <section className=" mt-5 flex flex-col gap-4 m-auto">
            <section className="border rounded-md p-2 shadow-md">
              <p className="font-medium">On field elemen sama</p>
              <hr />
              <p className="mt-2">
                karakter menangkap particle secara on field
              </p>
            </section>
            <section className="border rounded-md p-2 shadow-md">
              <p className="font-medium">Off field elemen sama</p>
              <hr />
              <p className="mt-2">
                karakter menangkap particle secara off field tetapi elemennya
                sama
              </p>
            </section>
            <section className="border rounded-md p-2 shadow-md">
              <p className="font-medium">On field elemen berbeda</p>
              <hr />
              <p className="mt-2">
                karakter menangkap particle secara on field tetapi elemennya
                berbeda
              </p>
            </section>
            <section className="border rounded-md p-2 shadow-md">
              <p className="font-medium">Off field elemen berbeda</p>
              <hr />
              <p className="mt-2">
                karakter menangkap particle secara off field tetapi elemennya
                berbeda
              </p>
            </section>
            <section className="border rounded-md p-2 shadow-md">
              <p className="font-medium">On field putih (Clear particle)</p>
              <hr />
              <p className="mt-2">
                karakter menangkap particle secara on field tetapi berbentuk
                clear particle seperti favonius
              </p>
            </section>
            <section className="border rounded-md p-2 shadow-md">
              <p className="font-medium"> Off field putih (Clear particle)</p>
              <hr />
              <p className="mt-2">
                karakter menangkap particle secara off field tetapi berbentuk
                clear particle seperti favonius
              </p>
            </section>
            <section className="border rounded-md p-2 shadow-md">
              <p className="font-medium">
                {" "}
                Penambahan total energy (Flat energy)
              </p>
              <hr />
              <p className="mt-2">
                Energy yang langsung masuk ke burst, seperti 2 set artefak
                scroll of the hero of cinder city
              </p>
            </section>
          </section>
        </section>
      </section>

      <section className="p-5 flex justify-center mt-40">
        <section className="text-center text-sm">
          <p>
            Created by{" "}
            <a
              href="https://www.youtube.com/@izCh."
              target="_blank"
              className="font-semibold"
            >
              @Iz Ch.
            </a>
          </p>
          <hr className="my-2" />
          <p>Reference</p>
          <section>
            <a
              href="https://library.keqingmains.com/combat-mechanics/energy"
              target="_blank"
              className="font-medium"
            >
              Keqing mains
            </a>
            <p className="mx-2 inline-block">&</p>
            <a
              href="https://genshin-impact.fandom.com/wiki/Energy"
              target="_blank"
              className="font-medium"
            >
              Genshin Impact Wiki
            </a>
          </section>
        </section>
      </section>
    </section>
  );
};

export default EnergyRechargeCalculator;
