
import { useState, useEffect } from 'react'
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaMobileAlt, 
  FaAndroid, FaApple, FaDatabase, FaAws, FaDocker, FaGitAlt, FaPython 
} from "react-icons/fa"
import { 
  SiNextdotjs, SiTypescript, SiMongodb, SiPostgresql, SiGraphql, 
  SiKotlin, SiSwift 
} from "react-icons/si"

export default function TechShowcase() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDevice = () => setIsDesktop(window.innerWidth >= 768)
    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  if (isDesktop) {
    return <DesktopView hoveredTech={hoveredTech} setHoveredTech={setHoveredTech} />
  }
  
  return <MobileView hoveredTech={hoveredTech} setHoveredTech={setHoveredTech} />
}

function DesktopView({ hoveredTech, setHoveredTech }: ViewProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Tech Stack</h2>
          <p className="text-gray-600 text-lg">Tecnologias que domino e utilizo</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techStack.map((tech) => (
            <TechCard 
              key={tech.name}
              tech={tech}
              isHovered={hoveredTech === tech.name}
              onHover={setHoveredTech}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileView({ hoveredTech, setHoveredTech }: ViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = [
    { 
      name: "Frontend", 
      icon: <FaReact />, 
      color: "#61DAFB",
      gradient: "from-blue-400 to-cyan-400"
    },
    { 
      name: "Backend", 
      icon: <FaNodeJs />, 
      color: "#339933",
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      name: "Mobile", 
      icon: <FaMobileAlt />, 
      color: "#FF9800",
      gradient: "from-orange-400 to-amber-400"
    }
  ]

  const getCategoryTechs = (category: string) => {
    return techStack.filter(tech => tech.category === category)
  }

  if (selectedCategory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
        <div className="max-w-md mx-auto px-4">
          <button 
            onClick={() => setSelectedCategory(null)}
            className="flex items-center gap-2 mb-6 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <span className="text-xl">←</span>
            <span className="font-medium">Voltar</span>
          </button>
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedCategory}</h2>
            <p className="text-gray-600 text-sm">Tecnologias</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {getCategoryTechs(selectedCategory).map((tech) => (
              <TechCard 
                key={tech.name}
                tech={tech}
                isHovered={hoveredTech === tech.name}
                onHover={setHoveredTech}
                isMobile
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 flex items-center">
      <div className="max-w-md mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Tech Stack</h2>
          <p className="text-gray-600">Escolha uma categoria</p>
        </div>
        
        <div className="space-y-6">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className="w-full group"
            >
              <div className={`
                relative overflow-hidden
                bg-gradient-to-r ${category.gradient}
                rounded-2xl p-8
                shadow-lg hover:shadow-2xl
                transform transition-all duration-300
                hover:scale-105
                active:scale-95
              `}>
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl text-white drop-shadow-lg">
                      {category.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {category.name}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {getCategoryTechs(category.name).length} tecnologias
                      </p>
                    </div>
                  </div>
                  <div className="text-3xl text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all">
                    →
                  </div>
                </div>
                
                {/* Efeito de brilho */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

interface TechCardProps {
  tech: TechItem
  isHovered: boolean
  onHover: (name: string | null) => void
  isMobile?: boolean
}

function TechCard({ tech, isHovered, onHover, isMobile = false }: TechCardProps) {
  const cardSize = isMobile ? 'h-28' : 'h-32'
  const iconSize = isMobile ? 'text-4xl' : 'text-5xl'
  const textSize = isMobile ? 'text-sm' : 'text-base'
  
  return (
    <div 
      className={`
        ${cardSize} relative group cursor-pointer
        transition-all duration-300 ease-out
        ${isHovered ? 'scale-105 z-10' : 'hover:scale-105'}
      `}
      onMouseEnter={() => onHover(tech.name)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Background com gradiente */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${tech.primaryColor}, ${tech.secondaryColor})`
        }}
      />
      
      {/* Card principal */}
      <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-4">
        {/* Ícone */}
        <div 
          className={`${iconSize} mb-2 transition-all duration-300 group-hover:scale-110`}
          style={{ color: tech.primaryColor }}
        >
          {tech.icon}
        </div>
        
        {/* Nome */}
        <span className={`${textSize} font-semibold text-gray-700 text-center leading-tight`}>
          {tech.name}
        </span>
        
        {/* Categoria (apenas no hover) */}
        <span className={`text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded whitespace-nowrap`}>
          {tech.category}
        </span>
      </div>
      
      {/* Efeito de brilho */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div 
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${tech.primaryColor}15, ${tech.secondaryColor}15)`,
            boxShadow: `0 0 20px ${tech.primaryColor}30`
          }}
        />
      </div>
    </div>
  )
}

// Types
interface ViewProps {
  hoveredTech: string | null
  setHoveredTech: (name: string | null) => void
}

import type { JSX } from "react"

interface TechItem {
  name: string
  icon: JSX.Element
  primaryColor: string
  secondaryColor: string
  category: string
}

// Data com cores mais refinadas e categorias
const techStack: TechItem[] = [
  // Frontend
  { name: "HTML5", icon: <FaHtml5 />, primaryColor: "#E34F26", secondaryColor: "#FF6B47", category: "Frontend" },
  { name: "CSS3", icon: <FaCss3Alt />, primaryColor: "#1572B6", secondaryColor: "#42A5F5", category: "Frontend" },
  { name: "JavaScript", icon: <FaJsSquare />, primaryColor: "#F7DF1E", secondaryColor: "#FFD54F", category: "Frontend" },
  { name: "TypeScript", icon: <SiTypescript />, primaryColor: "#3178C6", secondaryColor: "#5C6BC0", category: "Frontend" },
  { name: "React", icon: <FaReact />, primaryColor: "#61DAFB", secondaryColor: "#4FC3F7", category: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs />, primaryColor: "#000000", secondaryColor: "#424242", category: "Frontend" },
  
  // Backend
  { name: "Node.js", icon: <FaNodeJs />, primaryColor: "#339933", secondaryColor: "#66BB6A", category: "Backend" },
  { name: "Python", icon: <FaPython />, primaryColor: "#3776AB", secondaryColor: "#5C6BC0", category: "Backend" },
  { name: "GraphQL", icon: <SiGraphql />, primaryColor: "#E10098", secondaryColor: "#EC407A", category: "Backend" },
  
  // Database
  { name: "MongoDB", icon: <SiMongodb />, primaryColor: "#47A248", secondaryColor: "#66BB6A", category: "Database" },
  { name: "PostgreSQL", icon: <SiPostgresql />, primaryColor: "#336791", secondaryColor: "#5C6BC0", category: "Database" },
  { name: "SQL", icon: <FaDatabase />, primaryColor: "#4479A1", secondaryColor: "#42A5F5", category: "Database" },
  
  // Mobile
  { name: "Mobile", icon: <FaMobileAlt />, primaryColor: "#FF9800", secondaryColor: "#FFB74D", category: "Mobile" },
  { name: "Android", icon: <FaAndroid />, primaryColor: "#3DDC84", secondaryColor: "#81C784", category: "Mobile" },
  { name: "iOS", icon: <FaApple />, primaryColor: "#000000", secondaryColor: "#424242", category: "Mobile" },
  { name: "Kotlin", icon: <SiKotlin />, primaryColor: "#7F52FF", secondaryColor: "#9575CD", category: "Mobile" },
  { name: "Swift", icon: <SiSwift />, primaryColor: "#FA7343", secondaryColor: "#FF8A65", category: "Mobile" },
  
  // DevOps
  { name: "AWS", icon: <FaAws />, primaryColor: "#FF9900", secondaryColor: "#FFB74D", category: "Cloud" },
  { name: "Docker", icon: <FaDocker />, primaryColor: "#2496ED", secondaryColor: "#42A5F5", category: "DevOps" },
  { name: "Git", icon: <FaGitAlt />, primaryColor: "#F05032", secondaryColor: "#FF7043", category: "DevOps" },
]