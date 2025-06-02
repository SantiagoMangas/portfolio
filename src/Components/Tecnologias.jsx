import TecCard from '../cards/CardTec'
import CardCV from '../cards/CardCV'
import CardUIUX from '../cards/CardUIUX'

export default function Tecnologias() {
    return (
      <div className="relative overflow-hidden bg-theme_light_fond dark:bg-black py-24 sm:py-32">
      <div className="bg-[#F0A04B]/60 dark:bg-[#F0A04B]/50 absolute top-36 right-0 -mr-12 w-80 h-48 rounded-full  blur-3xl pointer-events-none"></div>
      <div className="bg-[#73BBA3]/65 absolute top-64 2xl:top-22 left-0 -ml-24 w-80 h-80 rounded-full   blur-3xl pointer-events-none"></div>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-theme_light_brown dark:text-white sm:text-5xl">
            Tecnologías y servicios que ofrezco!
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-900 lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-theme_light_brown dark:text-white max-lg:text-center">
                  💡 No solo sé frontend...
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400 max-lg:text-center">
                  También me muevo con otras herramientas y tecnologías que complementan mi perfil!                  
                  </p>
                </div>
                <div className="flex-1 overflow-y-auto pt-4 pb-8 sm:px-10 sm:pb-10">
                  <TecCard />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 dark:ring-white/10 lg:rounded-l-[2rem]"></div>
            </div>

            <div className="flex justify-center items-center relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-900 max-lg:rounded-t-[2rem]"></div>
              <CardCV />
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 dark:ring-white/10 max-lg:rounded-t-[2rem]"></div>
            </div>

            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-900"></div>
              <CardUIUX />
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 dark:ring-white/10"></div>
            </div>

            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-900 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-theme_light_brown dark:text-white max-lg:text-center">
                    Desarrollo de APIs eficientes y seguras
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400 max-lg:text-center text-balance">
                    Desarrollo interfaces robustas que conectan tus sistemas de forma eficiente, cuidando el rendimiento y la seguridad desde el inicio.
                  </p>
                </div>

                {/* Código */}
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 dark:bg-gray-800 shadow-2xl">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                          apiRoutes.js
                        </div>
                        <div className="border-r border-gray-600/10 px-4 py-2 dark:text-gray-300">app.js</div>
                      </div>
                    </div>
                    <div className="px-6 pb-14 pt-6">
                      <code className="whitespace-pre-wrap text-green-400 dark:text-green-300">
{`const express = require("express");
const app = express();

app.get("/api/status", (req, res) => {
  res.json({ message: "API funcionando correctamente", status: "ok" });
});

app.listen(3000, () => console.log("Servidor en puerto 3000"));
`}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 dark:ring-white/10 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>
    )
}
