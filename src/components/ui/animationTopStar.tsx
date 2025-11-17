'use client'
import { useRef, useEffect, useState } from 'react'

type Vec2 = [number, number]

class WebGLRenderer {
  canvas: HTMLCanvasElement
  gl: WebGL2RenderingContext
  program: WebGLProgram | null = null
  vs: WebGLShader | null = null
  fs: WebGLShader | null = null
  buffer: WebGLBuffer | null = null
  mouseMove: Vec2 = [0, 0]
  mouseCoords: Vec2 = [0, 0]
  pointerCount: number = 0
  pointerArray: Float32Array
  vertices: Float32Array
  uResolution: WebGLUniformLocation | null = null
  uTime: WebGLUniformLocation | null = null
  uMove: WebGLUniformLocation | null = null
  uTouch: WebGLUniformLocation | null = null
  uPointerCount: WebGLUniformLocation | null = null
  uPointers: WebGLUniformLocation | null = null
  isActive: boolean = false

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    const gl = canvas.getContext('webgl2', {
      antialias: false,
      alpha: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
      powerPreference: 'low-power', // Mudado para low-power
      failIfMajorPerformanceCaveat: false
    })
    if (!gl) throw new Error('WebGL2 não suportado')
    this.gl = gl

    this.pointerArray = new Float32Array(16)
    this.vertices = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1])
  }

  compile(shader: WebGLShader, source: string): void {
    const gl = this.gl
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader error:', gl.getShaderInfoLog(shader))
    }
  }

  setup(): void {
    const gl = this.gl
    
    const vertexSrc = `#version 300 es
      precision mediump float;
      in vec4 position;
      void main(){ gl_Position = position; }`
    
    // Shader ultra otimizado com pontinhos brancos
    const fragmentSrc = `#version 300 es
      precision lowp float;
      out vec4 O;
      uniform vec2 resolution;
      uniform float time;

      void main() {
        vec2 uv=(gl_FragCoord.xy-.5*resolution)/min(resolution.x,resolution.y);
        vec3 col=vec3(0);
        float t=time*.5;

        // 6 pontinhos para melhor performance
        for(float i=1.;i<7.;i++) {
          uv+=.1*cos(i*vec2(.1,.8)+t);
          float d=length(uv);
          vec3 color=vec3(.9,.95,1.);
          col+=.002/d*cos(sin(i)*color);
        }

        O=vec4(col,1);
      }`

    this.vs = gl.createShader(gl.VERTEX_SHADER)
    this.fs = gl.createShader(gl.FRAGMENT_SHADER)
    if (!this.vs || !this.fs) throw new Error('Failed to create shaders')
    
    this.compile(this.vs, vertexSrc)
    this.compile(this.fs, fragmentSrc)

    this.program = gl.createProgram()
    if (!this.program) throw new Error('Failed to create program')
    
    gl.attachShader(this.program, this.vs)
    gl.attachShader(this.program, this.fs)
    gl.linkProgram(this.program)
  }

  init(): void {
    const gl = this.gl
    const program = this.program
    if (!program) return
    
    this.buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer)
    gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.STATIC_DRAW)

    const position = gl.getAttribLocation(program, 'position')
    gl.enableVertexAttribArray(position)
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)

    this.uResolution = gl.getUniformLocation(program, 'resolution')
    this.uTime = gl.getUniformLocation(program, 'time')
  }

  updateCanvasSize(width: number, height: number): void {
    const gl = this.gl
    // Limitar resolução agressivamente para melhor performance
    const isMobile = window.innerWidth < 768
    const dpr = isMobile ? 2 : 2.5 // Reduzido significativamente
    this.canvas.width = Math.floor(width / dpr)
    this.canvas.height = Math.floor(height / dpr)
    gl.viewport(0, 0, this.canvas.width, this.canvas.height)
  }

  render(now: number = 0): void {
    if (!this.isActive) return
    
    const gl = this.gl
    const program = this.program
    if (!program) return

    gl.clearColor(0, 0, 0, 1)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.useProgram(program)

    if (this.uResolution) gl.uniform2f(this.uResolution, this.canvas.width, this.canvas.height)
    if (this.uTime) gl.uniform1f(this.uTime, now * 1e-3)

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
  }

  destroy(): void {
    const gl = this.gl
    if (this.program) {
      if (this.vs) { gl.detachShader(this.program, this.vs); gl.deleteShader(this.vs) }
      if (this.fs) { gl.detachShader(this.program, this.fs); gl.deleteShader(this.fs) }
      gl.deleteProgram(this.program)
    }
    if (this.buffer) gl.deleteBuffer(this.buffer)
  }
}

const useShaderBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rendererRef = useRef<WebGLRenderer | null>(null)
  const rafRef = useRef<number | null>(null)
  const resizeTimeout = useRef<number | null>(null)
  const lastFrameTime = useRef<number>(0)
  const startTime = useRef<number>(0)

  const resize = () => {
    if (resizeTimeout.current) clearTimeout(resizeTimeout.current)

    resizeTimeout.current = window.setTimeout(() => {
      const canvas = canvasRef.current
      if (!canvas || !rendererRef.current) return
      const w = window.innerWidth
      const h = window.innerHeight
      rendererRef.current.updateCanvasSize(w, h)
    }, 250)
  }

  const loop = (t: number) => {
    const renderer = rendererRef.current
    if (!renderer || !renderer.isActive) return

    // Throttle: 30fps nos primeiros 3 segundos, depois 60fps
    const elapsed = t - startTime.current
    const targetFps = elapsed < 3000 ? 30 : 60
    const frameInterval = 1000 / targetFps

    if (t - lastFrameTime.current < frameInterval) {
      rafRef.current = requestAnimationFrame(loop)
      return
    }

    lastFrameTime.current = t
    renderer.render(t)
    rafRef.current = requestAnimationFrame(loop)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Inicializar com pequeno delay para não bloquear o Loader
    const initRenderer = () => {
      if (!canvasRef.current || rendererRef.current) return

      try {
        rendererRef.current = new WebGLRenderer(canvasRef.current)
        rendererRef.current.setup()
        rendererRef.current.init()
        resize()

        // Ativar WebGL
        if (rendererRef.current) {
          rendererRef.current.isActive = true
          startTime.current = performance.now()
          rafRef.current = requestAnimationFrame(loop)
        }
      } catch (error) {
        console.error('Failed to initialize WebGL:', error)
      }
    }

    // Usar requestIdleCallback com timeout curto
    if ('requestIdleCallback' in window) {
      requestIdleCallback(initRenderer, { timeout: 200 })
    } else {
      setTimeout(initRenderer, 100)
    }

    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current)
    }
  }, [])

  return canvasRef
}

export default function Hero() {
  const canvasRef = useShaderBackground()

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-slate-950">
      {/* Canvas WebGL - animação de fundo */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full touch-none"
        style={{
          background: 'transparent',
          pointerEvents: 'none',
          animation: 'fadeIn 0.8s ease-out forwards',
          opacity: 0
        }}
      />

      {/* Grid de fundo cyan */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-[1]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Elementos decorativos borrados */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none z-[2]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none z-[2]"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-[5]" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white px-6 pt-20">
        <div className="text-center space-y-10 max-w-6xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">Inovação &</span>
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Tecnologia</span>
            </h1>
          </div>
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto" />
          <div className="max-w-4xl mx-auto backdrop-blur-sm bg-black/10 rounded-2xl p-6 border border-white/5">
            <p className="text-xl md:text-2xl lg:text-3xl text-cyan-50/90 font-light leading-relaxed">
              A LT Cloud transforma ideias em soluções digitais de alto desempenho para empresas que buscam excelência tecnológica.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-14">
            <a href="#services" className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-xl transition-transform duration-300 hover:scale-105 shadow-xl shadow-cyan-500/40">
              Nossos Serviços
            </a>
            <a href="#contact" className="px-10 py-5 bg-cyan-500/10 border border-cyan-300/30 text-cyan-100 rounded-xl font-semibold text-xl transition-transform duration-300 hover:scale-105 backdrop-blur-md">
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
{/* 
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2 animate-bounce">
          <div className="w-1 h-2 bg-cyan-400 rounded-full"></div>
        </div>
      </div> */}

      {/* Linha decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent z-[6]"></div>
    </section>
  )
}