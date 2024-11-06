import Card from "./components/card";
import Calendar from "./components/calendar";
import Player from "./components/player";
import { Button, Spacer } from "@nextui-org/react";
import Portfolio from "./components/portfolio";
import Link from "next/link";

export default function Home() {
  return (
    <div
      id="home"
      className="p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      <div className="flex flex-col lg:flex-row gap-16 row-start-2">
        <main className="flex flex-col gap-8 items-center sm:items-start text-center sm:text-left w-full sm:w-1/2">
          <h1 className="font-semibold leading-[48px] lg:text-5xl text-3xl">
            Entrego soluções de software{" "}
            <span className="inline font-semibold bg-clip-text text-transparent bg-gradient-to-b from-[#FF1CF7] to-[#b249f8] tracking-tight">
              poderosas
            </span>
            , independentemente da complexidade.
          </h1>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Link href="https://www.linkedin.com/in/yuriwz/">
              <Button size="lg" color="primary">
                Entre em contato
              </Button>
            </Link>

            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="#"
              aria-label="Veja meus projetos"
            >
              Veja meus projetos
            </a>
          </div>
        </main>
        <div className="sm:items-start text-center sm:text-left bg-gradient-to-br from-[#ffe4e1] to-[#f0e68c] rounded-xl shadow-lg p-8 max-w-[658px]">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <Card />
            <Calendar />
          </div>
          <Spacer y={2} />
          <Player />
        </div>
      </div>

      {/* Seção com degradê */}
      <section
        id="frontend"
        className="bg-gradient-to-r from-blue-200 via-pink-50 to-green-100 p-10 rounded-xl shadow-md mt-10
                    dark:from-blue-700 dark:via-pink-700 dark:to-green-700 dark:bg-gray-400"
      >
        {/* Conteúdo da seção */}
        <h2 className="text-2xl font-bold">Frontend</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Aqui está uma visão geral dos meus projetos e habilidades em
          desenvolvimento frontend, com foco em interfaces responsivas e UX
          otimizada.
        </p>
        <Spacer y={2} />
        <Portfolio />
      </section>
    </div>
  );
}
