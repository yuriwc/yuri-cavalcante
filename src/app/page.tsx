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
      className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="flex flex-col lg:flex-row gap-16 row-start-2 relative z-10">
        <main className="flex flex-col gap-8 items-center sm:items-start text-center sm:text-left w-full lg:w-1/2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-4 py-2 rounded-full border border-purple-200/50 dark:border-purple-700/50">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-purple-700 dark:text-purple-300 font-medium">
                Disponível para novos projetos
              </span>
            </div>

            <h1 className="font-bold leading-[48px] lg:text-6xl text-4xl">
              Entrego soluções de software{" "}
              <span className="inline font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] via-[#b249f8] to-[#7c3aed] tracking-tight animate-gradient">
                extraordinárias
              </span>
              , independentemente da complexidade.
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              Desenvolvedor Full Stack especializado em criar experiências
              digitais impactantes com tecnologias modernas e design centrado no
              usuário.
            </p>
          </div>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Link href="https://www.linkedin.com/in/yuriwz/">
              <Button
                size="lg"
                color="primary"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-semibold px-8 py-3 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center gap-2">
                  💬 Entre em contato
                </span>
              </Button>
            </Link>

            <a
              className="group rounded-full border border-gray-200 dark:border-gray-700 transition-all duration-300 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 font-medium"
              href="#frontend"
              aria-label="Veja meus projetos"
            >
              <span className="flex items-center gap-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                🚀 Veja meus projetos
              </span>
            </a>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                15+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Projetos
              </div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                3+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Anos Exp.
              </div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                100%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Satisfação
              </div>
            </div>
          </div>
        </main>

        <div className="sm:items-start text-center sm:text-left bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 max-w-[658px] border border-white/20 dark:border-gray-700/20 relative overflow-hidden">
          {/* Elemento decorativo no card */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"></div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 relative z-10">
            <Card />
            <Calendar />
          </div>
          <Spacer y={2} />
          <Player />
        </div>
      </div>

      {/* Seção com degradê aprimorada */}
      <section
        id="frontend"
        className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 
                   dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20
                   p-12 rounded-2xl shadow-xl mt-16 border border-white/20 backdrop-blur-sm
                   relative overflow-hidden"
      >
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl"></div>
        <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-xl"></div>

        {/* Conteúdo da seção */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-2xl">💼</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Projetos e experiências profissionais
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl">
            Explore uma coleção cuidadosamente curada dos meus projetos mais
            impactantes, desenvolvidos para empresas como{" "}
            <strong>TeamHub</strong>, <strong>CoopWeb</strong> e{" "}
            <strong>Strollerfy</strong>. Cada projeto representa um marco na
            minha jornada de desenvolvimento, demonstrando expertise em
            tecnologias modernas e foco em experiência do usuário.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="font-semibold text-lg mb-2">Inovação</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Soluções criativas usando as tecnologias mais modernas do
                mercado
              </p>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-semibold text-lg mb-2">Performance</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Aplicações otimizadas para máxima velocidade e eficiência
              </p>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-2xl mb-2">🎨</div>
              <h3 className="font-semibold text-lg mb-2">Design</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Interfaces intuitivas com foco na experiência do usuário
              </p>
            </div>
          </div>
        </div>

        <Spacer y={4} />
        <Portfolio />
      </section>
    </div>
  );
}
