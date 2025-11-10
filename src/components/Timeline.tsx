import { Code, Rocket, Users, LineChart, Sparkles, Target } from "lucide-react";
import RadialOrbitalTimeline from "./ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Planejamento",
    date: "Semana 1",
    content: "Levantamento completo de requisitos, definição de escopo e planejamento estratégico com metodologia Scrum.",
    category: "Planning",
    icon: Target,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Design & UX",
    date: "Semana 2-3",
    content: "Criação da arquitetura do sistema, wireframes, protótipos e definição da stack tecnológica ideal.",
    category: "Architecture",
    icon: Sparkles,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 3,
    title: "Desenvolvimento",
    date: "Semana 4-8",
    content: "Codificação das funcionalidades principais, implementação de APIs, banco de dados e interfaces responsivas.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 4,
    title: "Deploy Cloud",
    date: "Semana 9",
    content: "Configuração de infraestrutura, CI/CD, deploy em cloud nacional/internacional e otimização de performance.",
    category: "Deploy",
    icon: Rocket,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 5,
    title: "Testes QA",
    date: "Semana 10",
    content: "Testes de integração, performance, segurança e validação multiplataforma (Web, Android, iOS).",
    category: "Integration",
    icon: Users,
    relatedIds: [4, 6],
    status: "in-progress" as const,
    energy: 65,
  },
  {
    id: 6,
    title: "Entrega Final",
    date: "Semana 11-12",
    content: "Refinamentos finais, documentação completa, treinamento da equipe e lançamento oficial em produção.",
    category: "Optimization",
    icon: LineChart,
    relatedIds: [5],
    status: "pending" as const,
    energy: 25,
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="relative">
      <RadialOrbitalTimeline timelineData={timelineData} />
    </section>
  );
}

export default Timeline;
