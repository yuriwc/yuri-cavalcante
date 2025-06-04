"use client";

import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Chip,
  Tabs,
  Tab,
} from "@nextui-org/react";
import { StaticImageData } from "next/image";

// Importar todas as imagens
import TeamhubAI from "@/app/assets/images/teamhub-ai.png";
import TeamhubDash from "@/app/assets/images/teamhub-dahs.png";
import TeamhubAnalytics from "@/app/assets/images/dashboard.jpeg";
import TeamhubFrontend from "@/app/assets/images/front.jpeg";
import CoopWeb1 from "@/app/assets/images/coopweb.png";
import CoopWeb2 from "@/app/assets/images/coopweb-2.png";
import Strollerfy1 from "@/app/assets/images/strollerfy.png";
import Strollerfy2 from "@/app/assets/images/strollerfy-2.png";

const getProjectDetails = (projectId: string) => {
  switch (projectId) {
    case "strollerfy-app":
      return {
        features: [
          "Interface mobile-first responsiva",
          "Sistema de reservas em tempo real",
          "Integração com múltiplos gateways de pagamento",
          "Suporte a 3 idiomas (PT/EN/ES)",
          "Sistema de notificações push",
          "Mapa interativo para localização",
        ],
        highlights: [
          "React Native com TypeScript",
          "Firebase para backend",
          "Next-intl para internacionalização",
          "Design system consistente",
          "Performance otimizada",
        ],
      };
    case "strollerfy-web":
      return {
        features: [
          "Sistema completo de checkout com validação",
          "Integração Stripe (cartões internacionais)",
          "Integração Pagar.me (PIX, boleto, cartão Brasil)",
          "Painel administrativo para gestão",
          "Sistema de cupons de desconto",
          "Carrinho de compras avançado",
        ],
        highlights: [
          "App Router do Next.js 15",
          "Documentação completa com JSDoc",
          "Tratamento de erros padronizado",
          "Monitoramento e logs estruturados",
          "Pronto para produção",
        ],
      };
    case "coopweb-main":
      return {
        features: [
          "Dashboard administrativo centralizado",
          "Monitoramento GPS em tempo real via Firebase",
          "Sistema de viagens programadas e sob demanda",
          "Gestão completa de funcionários e motoristas",
          "Suporte a múltiplas cooperativas",
          "Mapas interativos com Leaflet e OpenStreetMap",
        ],
        highlights: [
          "Firebase Realtime Database para GPS",
          "Validação inteligente de passageiros",
          "Interface responsiva com tema claro/escuro",
          "Controles avançados de mapas",
          "Métricas de precisão GPS em tempo real",
        ],
      };
    case "coopweb-admin":
      return {
        features: [
          "Painel de controle com estatísticas de performance",
          "Gestão de viagens (programadas, em tempo real, histórico)",
          "Sistema de autenticação com JWT tokens",
          "Middleware de proteção de rotas",
          "Gestão de passageiros com validação por cidade",
          "API RESTful integrada com Server Actions",
        ],
        highlights: [
          "HeroUI com componentes modernos",
          "Gradientes dinâmicos e animações suaves",
          "Filtros avançados por data e status",
          "Toast notifications para feedback",
          "Sistema multi-cooperativa isolado",
        ],
      };
    case "teamhub-ai":
      return {
        features: [
          "Análise inteligente de performance da equipe",
          "Recomendações automáticas de otimização",
          "Processamento de linguagem natural para feedback",
          "Machine Learning para previsão de entregas",
          "Dashboard com insights comportamentais",
          "Integração com ferramentas de desenvolvimento",
        ],
        highlights: [
          "Modelos de IA personalizados",
          "API RESTful para integrações",
          "Analytics avançado com visualizações",
          "Sistema de alertas inteligentes",
          "Aprendizado contínuo do sistema",
        ],
      };
    case "teamhub-dashboard":
      return {
        features: [
          "Gestão completa de projetos e sprints",
          "Kanban boards interativos",
          "Métricas de produtividade em tempo real",
          "Sistema de notificações avançado",
          "Relatórios customizáveis",
          "Integração com Git e ferramentas DevOps",
        ],
        highlights: [
          "Interface moderna com Tailwind CSS",
          "Gráficos dinâmicos com Chart.js",
          "Drag & drop para organização",
          "Temas personalizáveis",
          "Exportação de dados em múltiplos formatos",
        ],
      };
    case "teamhub-analytics":
      return {
        features: [
          "Dashboard de métricas de equipe",
          "Análise de velocity e burndown",
          "Tracking de código e commits",
          "Relatórios de performance individual",
          "Comparação entre sprints e releases",
          "Métricas de qualidade de código",
        ],
        highlights: [
          "Visualizações interativas com D3.js",
          "KPIs personalizáveis por equipe",
          "Exportação automática de relatórios",
          "Integração com ferramentas de CI/CD",
          "Histórico detalhado de mudanças",
        ],
      };
    case "teamhub-frontend":
      return {
        features: [
          "Interface moderna e responsiva",
          "Sistema de design consistente",
          "Micro-interações fluidas",
          "Modo escuro/claro automático",
          "Componentes reutilizáveis",
          "Acessibilidade WCAG 2.1 compliant",
        ],
        highlights: [
          "Animações com Framer Motion",
          "Performance otimizada com Next.js",
          "PWA com offline support",
          "Bundle size otimizado",
          "SEO friendly com SSR/SSG",
        ],
      };
    case "coopgo-backend":
      return {
        features: [
          "API RESTful com Spring Boot 3.2",
          "Autenticação JWT com refresh tokens",
          "Sistema multi-tenant para cooperativas",
          "Integração com Firebase Cloud Messaging",
          "API Google Maps para geolocalização",
          "Gerenciamento de pedidos em tempo real",
          "Sistema de notificações push avançado",
          "Upload de imagens otimizado",
        ],
        highlights: [
          "Arquitetura hexagonal com DDD",
          "Java 21 com Virtual Threads",
          "SQL Server com otimizações de performance",
          "Docker containerization completa",
          "Documentação Swagger/OpenAPI 3.0",
          "Testes unitários com 90%+ cobertura",
          "CI/CD pipeline automatizado",
          "Monitoramento com Actuator",
        ],
      };
    default:
      return null;
  }
};

interface Project {
  id: string;
  title: string;
  description: string;
  company: string;
  image?: StaticImageData;
  technologies: string[];
  category: "web" | "mobile" | "dashboard" | "ai" | "backend";
}

const projects: Project[] = [
  {
    id: "teamhub-ai",
    title: "TeamHub AI",
    description:
      "Plataforma de inteligência artificial para gestão de equipes com análise preditiva e recomendações automáticas",
    company: "TeamHub",
    image: TeamhubAI,
    technologies: [
      "React",
      "TypeScript",
      "AI/ML",
      "Node.js",
      "TensorFlow",
      "Python",
    ],
    category: "ai",
  },
  {
    id: "teamhub-dashboard",
    title: "TeamHub Dashboard",
    description:
      "Dashboard administrativo completo para gestão de projetos e equipes com métricas em tempo real",
    company: "TeamHub",
    image: TeamhubDash,
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Chart.js",
      "TypeScript",
    ],
    category: "dashboard",
  },
  {
    id: "coopweb-main",
    title: "CoopWeb Platform",
    description:
      "Plataforma web para cooperativas digitais com monitoramento GPS em tempo real e gestão de viagens",
    company: "CoopWeb",
    image: CoopWeb1,
    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "PostgreSQL",
      "Node.js",
      "Leaflet",
    ],
    category: "web",
  },
  {
    id: "coopweb-admin",
    title: "CoopWeb Admin",
    description:
      "Painel administrativo avançado para gestão de cooperativas com autenticação JWT e sistema multi-empresa",
    company: "CoopWeb",
    image: CoopWeb2,
    technologies: ["Next.js", "HeroUI", "Firebase", "JWT", "TypeScript"],
    category: "dashboard",
  },
  {
    id: "strollerfy-app",
    title: "Strollerfy Mobile",
    description:
      "Sistema completo de locação de carrinhos de bebê com interface mobile-first, integração de pagamentos e suporte multilíngue",
    company: "Strollerfy",
    image: Strollerfy1,
    technologies: [
      "React Native",
      "TypeScript",
      "Next.js 15",
      "Stripe",
      "Pagar.me",
      "Firebase",
      "TailwindCSS",
      "Next-intl",
    ],
    category: "mobile",
  },
  {
    id: "strollerfy-web",
    title: "Strollerfy Platform",
    description:
      "Plataforma web para gerenciamento de aluguéis com checkout otimizado, múltiplos gateways de pagamento e painel administrativo",
    company: "Strollerfy",
    image: Strollerfy2,
    technologies: [
      "Next.js 15",
      "TypeScript",
      "HeroUI",
      "TailwindCSS",
      "Stripe",
      "Pagar.me",
      "React Query",
      "Next-intl",
    ],
    category: "web",
  },
  {
    id: "teamhub-analytics",
    title: "TeamHub Analytics",
    description:
      "Dashboard avançado de análise de dados e métricas para equipes com visualizações interativas",
    company: "TeamHub",
    image: TeamhubAnalytics,
    technologies: ["React", "D3.js", "Chart.js", "TypeScript", "Node.js"],
    category: "dashboard",
  },
  {
    id: "teamhub-frontend",
    title: "TeamHub Interface",
    description:
      "Interface moderna e responsiva com animações fluidas e sistema de design consistente",
    company: "TeamHub",
    image: TeamhubFrontend,
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
    ],
    category: "web",
  },
  {
    id: "coopgo-backend",
    title: "CoopGo Backend API",
    description:
      "Sistema backend robusto para aplicativo de delivery de cooperativas com arquitetura Spring Boot, multi-tenancy e integração Firebase",
    company: "CoopGo",
    technologies: [
      "Spring Boot 3.2",
      "Java 21",
      "SQL Server",
      "JWT",
      "Firebase",
      "Google Maps API",
      "Docker",
      "Swagger",
    ],
    category: "backend",
  },
];

const companies = ["Todos", "TeamHub", "CoopWeb", "Strollerfy", "CoopGo"];

const getCompanyColor = (company: string) => {
  switch (company) {
    case "TeamHub":
      return "primary";
    case "CoopWeb":
      return "success";
    case "Strollerfy":
      return "warning";
    case "CoopGo":
      return "secondary";
    default:
      return "default";
  }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "web":
      return "🌐";
    case "mobile":
      return "📱";
    case "dashboard":
      return "📊";
    case "ai":
      return "🤖";
    case "backend":
      return "⚙️";
    default:
      return "💻";
  }
};

const App = () => {
  const [selectedCompany, setSelectedCompany] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  const filteredProjects = projects.filter((project) =>
    selectedCompany === "Todos" ? true : project.company === selectedCompany
  );

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="w-full">
      {/* Company Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {companies.map((company) => (
          <Button
            key={company}
            variant={selectedCompany === company ? "solid" : "bordered"}
            color={
              selectedCompany === company ? getCompanyColor(company) : "default"
            }
            onPress={() => setSelectedCompany(company)}
            className={`text-sm font-medium transition-all duration-200 ${
              selectedCompany === company
                ? "shadow-lg transform scale-105"
                : "hover:scale-102 dark:text-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            {company}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="h-[380px] group hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
            isPressable
            onPress={() => openProjectModal(project)}
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start bg-black/70 backdrop-blur-sm rounded-lg m-3 p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">
                  {getCategoryIcon(project.category)}
                </span>
                <Chip
                  size="sm"
                  color={getCompanyColor(project.company)}
                  variant="solid"
                  className="text-white font-medium"
                >
                  {project.company}
                </Chip>
              </div>
              {/* Badge de Desenvolvimento Autoral */}
              <div className="flex items-center gap-1 mb-2">
                <Chip
                  size="sm"
                  color="secondary"
                  variant="solid"
                  className="text-white font-bold text-xs px-2 py-1"
                >
                  👨‍💻 100% Autoral
                </Chip>
              </div>
              <p className="text-tiny text-white/90 font-bold uppercase tracking-wider">
                {project.category}
              </p>
              <h4 className="text-white font-bold text-lg leading-tight">
                {project.title}
              </h4>
            </CardHeader>
            {project.image ? (
              <Image
                removeWrapper
                alt={project.title}
                className="z-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={project.image.src}
              />
            ) : (
              <div className="z-0 w-full h-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <div className="text-center text-white/80">
                  <span className="text-6xl mb-4 block">⚙️</span>
                  <div className="text-lg font-bold">Backend API</div>
                  <div className="text-sm opacity-70">{project.company}</div>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>
        ))}
      </div>

      {/* Project Details Modal */}
      <Modal
        size="4xl"
        isOpen={isModalOpen}
        onClose={closeModal}
        scrollBehavior="inside"
        classNames={{
          base: "max-h-[90vh] m-4",
          body: "p-0",
          header: "border-b border-gray-200 dark:border-gray-700",
          footer: "border-t border-gray-200 dark:border-gray-700",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="p-6">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">
                    {selectedProject &&
                      getCategoryIcon(selectedProject.category)}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold">
                        {selectedProject?.title}
                      </h2>
                      <Chip
                        color={getCompanyColor(selectedProject?.company || "")}
                        variant="flat"
                        size="lg"
                        className="font-medium"
                      >
                        {selectedProject?.company}
                      </Chip>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {selectedProject?.description}
                    </p>
                  </div>
                </div>
              </ModalHeader>

              <ModalBody className="p-6">
                <div className="space-y-6">
                  {/* Project Image */}
                  <div className="rounded-lg overflow-hidden shadow-lg relative">
                    {selectedProject?.image ? (
                      <>
                        <Image
                          src={selectedProject.image.src}
                          alt={selectedProject.title}
                          className="w-full h-64 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                          onClick={() => setIsImageFullscreen(true)}
                        />
                        <div
                          className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                          onClick={() => setIsImageFullscreen(true)}
                        >
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                            <span className="text-white text-2xl">🔍</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-64 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center">
                        <div className="text-center text-white">
                          <span className="text-8xl mb-4 block">⚙️</span>
                          <div className="text-2xl font-bold mb-2">
                            Backend API
                          </div>
                          <div className="text-lg opacity-70">
                            {selectedProject?.company}
                          </div>
                          <div className="text-sm opacity-50 mt-2">
                            Sistema de Backend Robusto
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Development Highlight */}
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">👨‍💻</span>
                      <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100">
                        Desenvolvimento 100% Autoral
                      </h3>
                    </div>
                    <p className="text-purple-800 dark:text-purple-200 font-medium">
                      UI/UX Design e toda a implementação de código foram
                      desenvolvidos integralmente por mim, desde a concepção
                      visual até a arquitetura técnica e deployment.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Chip
                        color="secondary"
                        variant="flat"
                        size="sm"
                        className="font-medium"
                      >
                        🎨 UI/UX Design
                      </Chip>
                      <Chip
                        color="secondary"
                        variant="flat"
                        size="sm"
                        className="font-medium"
                      >
                        ⚡ Frontend Development
                      </Chip>
                      <Chip
                        color="secondary"
                        variant="flat"
                        size="sm"
                        className="font-medium"
                      >
                        🔧 Backend Architecture
                      </Chip>
                      <Chip
                        color="secondary"
                        variant="flat"
                        size="sm"
                        className="font-medium"
                      >
                        🚀 Deployment & DevOps
                      </Chip>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <span>🛠️</span>
                      Tecnologias
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject?.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          color="primary"
                          variant="flat"
                          size="md"
                          className="font-medium"
                        >
                          {tech}
                        </Chip>
                      ))}
                    </div>
                  </div>

                  {/* Features and Highlights */}
                  {selectedProject && getProjectDetails(selectedProject.id) && (
                    <Tabs
                      aria-label="Project details"
                      color="primary"
                      variant="underlined"
                      classNames={{
                        tabList: "gap-6",
                        tab: "px-0 h-12",
                        tabContent: "text-base font-medium",
                      }}
                    >
                      <Tab
                        key="features"
                        title={
                          <div className="flex items-center space-x-2">
                            <span>🔧</span>
                            <span>Funcionalidades</span>
                          </div>
                        }
                      >
                        <div className="space-y-3 mt-6">
                          {getProjectDetails(selectedProject.id)?.features.map(
                            (feature, index) => (
                              <div
                                key={index}
                                className="flex items-start space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500"
                              >
                                <span className="text-blue-500 mt-0.5 font-bold">
                                  ✓
                                </span>
                                <span className="text-blue-900 dark:text-blue-100 font-medium">
                                  {feature}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </Tab>
                      <Tab
                        key="highlights"
                        title={
                          <div className="flex items-center space-x-2">
                            <span>⭐</span>
                            <span>Destaques</span>
                          </div>
                        }
                      >
                        <div className="space-y-3 mt-6">
                          {getProjectDetails(
                            selectedProject.id
                          )?.highlights.map((highlight, index) => (
                            <div
                              key={index}
                              className="flex items-start space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500"
                            >
                              <span className="text-green-500 mt-0.5 font-bold">
                                ★
                              </span>
                              <span className="text-green-900 dark:text-green-100 font-medium">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </Tab>
                    </Tabs>
                  )}
                </div>
              </ModalBody>

              <ModalFooter className="p-6">
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  size="lg"
                >
                  Fechar
                </Button>
                <Button
                  color="primary"
                  onPress={onClose}
                  size="lg"
                  className="font-medium"
                >
                  Ver Mais Projetos
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Fullscreen Image Modal */}
      {selectedProject?.image && (
        <Modal
          size="full"
          isOpen={isImageFullscreen}
          onClose={() => setIsImageFullscreen(false)}
          hideCloseButton
          classNames={{
            base: "m-0 bg-black/95",
            body: "p-0",
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody className="flex items-center justify-center p-4">
                  <div className="relative max-w-full max-h-full">
                    {selectedProject?.image && (
                      <Image
                        src={selectedProject.image.src}
                        alt={selectedProject.title}
                        className="max-w-full max-h-[90vh] object-contain"
                      />
                    )}
                    <Button
                      isIconOnly
                      color="danger"
                      variant="solid"
                      onPress={onClose}
                      className="absolute top-4 right-4 z-10"
                    >
                      ✕
                    </Button>
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-3">
                      <h3 className="text-white font-bold text-lg">
                        {selectedProject?.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {selectedProject?.company}
                      </p>
                    </div>
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default App;
