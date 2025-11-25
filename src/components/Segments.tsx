'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))
import type { Application } from '@splinetool/runtime'

// Tipos para Three.js (usado internamente pelo Spline)
interface ThreeMaterial {
  color?: { set: (color: number) => void }
  emissive?: { set: (color: number) => void }
  metalness?: number
  roughness?: number
  needsUpdate?: boolean
}

interface ThreeObject3D {
  isMesh?: boolean
  material?: ThreeMaterial | ThreeMaterial[]
  traverse?: (callback: (child: ThreeObject3D) => void) => void
}

interface ThreeScene extends ThreeObject3D {
  getObjectByName?: (name: string) => ThreeObject3D | undefined
}

interface SplineSceneProps {
  scene: string
  className?: string
  /** se true converte todos os materiais para preto ao carregar a cena */
  forceBlack?: boolean
  /** se definido, alvo específico (nome do objeto) será pintado de preto em vez de toda a cena */
  targetObjectName?: string
}

export function SplineScene({ scene, className, forceBlack = true, targetObjectName }: SplineSceneProps) {
  const handleLoad = (spline: Application) => {
    if (!forceBlack || !spline) return

    try {
      // Usar requestIdleCallback para não bloquear a thread principal
      const processScene = () => {
        const threeScene = spline as unknown as ThreeScene

        // Função utilitária para pintar materiais de preto
        const paintBlack = (mat: ThreeMaterial | ThreeMaterial[]) => {
          try {
            if (!mat) return

            // alguns materiais podem ser arrays
            if (Array.isArray(mat)) {
              mat.forEach(m => {
                if (m?.color) m.color.set(0x000000)
                if (m?.emissive) m.emissive.set(0x000000)
                if (m) m.needsUpdate = true
              })
              return
            }

            if (mat.color) mat.color.set(0x000000)
            if (mat.emissive) mat.emissive.set(0x000000)
            // reduzir brilho/specular
            if (typeof mat.metalness !== 'undefined') mat.metalness = 0
            if (typeof mat.roughness !== 'undefined') mat.roughness = 1
            mat.needsUpdate = true
          } catch {
            // ignore materiais inesperados
          }
        }

        // Se o usuário informou um nome de objeto específico, tente encontrá-lo
        if (targetObjectName && threeScene.getObjectByName) {
          const target = threeScene.getObjectByName(targetObjectName)
          if (target?.traverse) {
            target.traverse((child: ThreeObject3D) => {
              if (child.isMesh && child.material) paintBlack(child.material)
            })
            return
          }
        }

        // Caso contrário, percorre toda a cena e pinta cada mesh
        if (threeScene.traverse) {
          threeScene.traverse((child: ThreeObject3D) => {
            if (child.isMesh && child.material) {
              paintBlack(child.material)
            }
          })
        }
      }

      // Processar de forma assíncrona para não travar
      if ('requestIdleCallback' in window) {
        requestIdleCallback(processScene)
      } else {
        setTimeout(processScene, 0)
      }

    } catch (err) {
      // mensagem de debug, não quebra o app
      // eslint-disable-next-line no-console
      console.error('Erro ao forçar preto na cena Spline:', err)
    }
  }

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-transparent">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Carregando visualização 3D...</p>
          </div>
        </div>
      }
    >
      <Spline scene={scene} className={className} onLoad={handleLoad} />
    </Suspense>
  )
}

export function Segments() {
  return (
    <section className="relative w-full min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Grid de fundo */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Elementos decorativos - responsivos */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-cyan-400/10 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Container principal */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-screen items-center">

        {/* Conteúdo de texto - esquerda */}
        <div className="relative z-10 p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-center order-1">

          {/* Título */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-gray-900 dark:text-white">Inovação em </span>
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Tecnologia
            </span>
          </h1>

          {/* Linha decorativa */}
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-600 to-transparent mb-4 sm:mb-6"></div>

          {/* Descrições */}
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            <p className="text-base sm:text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
              A <span className="text-cyan-600 dark:text-cyan-400 font-semibold">LT Cloud</span> transforma ideias em soluções digitais de alto desempenho para empresas que buscam excelência tecnológica.
            </p>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Utilizamos as tecnologias mais modernas do mercado, para transformar ideias em produtos digitais que impressionam e entregam resultados reais.
            </p>

            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Nossa expertise em <span className="text-cyan-600 dark:text-cyan-400 font-semibold">desenvolvimento web</span>, <span className="text-cyan-600 dark:text-cyan-400 font-semibold">aplicações mobile</span> e <span className="text-cyan-600 dark:text-cyan-400 font-semibold">cloud computing</span> permite entregar soluções escaláveis e inovadoras.
            </p>
          </div>

          {/* Stats rápidos */}
          {/* <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 max-w-xl">
            <div className="relative group">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                10+
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Anos</div>
              <div className="absolute -inset-2 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <div className="relative group">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Projetos</div>
              <div className="absolute -inset-2 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <div className="relative group">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Dedicação</div>
              <div className="absolute -inset-2 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          </div> */}
        </div>

        {/* Robô 3D - direita */}
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-screen order-2">
          <div className="absolute inset-0">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
          {/* Overlay sutil para integração */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-gray-50/20 dark:to-slate-950/20 pointer-events-none"></div>
        </div>
      </div>

      {/* Linha decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
    </section>
  )
}
