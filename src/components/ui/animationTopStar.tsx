// 'use client'
// import { useRef, useEffect, useState } from 'react'

// // ---------- Types ----------
// type Vec2 = [number, number]

// // ---------- WebGLRenderer ----------
// class WebGLRenderer {
//   canvas: HTMLCanvasElement
//   gl: WebGL2RenderingContext
//   shaderSource: string
//   program: WebGLProgram | null = null
//   vs: WebGLShader | null = null
//   fs: WebGLShader | null = null
//   buffer: WebGLBuffer | null = null
//   mouseMove: Vec2 = [0, 0]
//   mouseCoords: Vec2 = [0, 0]
//   pointerCount: number = 0
//   pointerArray: Float32Array
//   vertexSrc: string
//   vertices: Float32Array
//   uResolution: WebGLUniformLocation | null = null
//   uTime: WebGLUniformLocation | null = null
//   uMove: WebGLUniformLocation | null = null
//   uTouch: WebGLUniformLocation | null = null
//   uPointerCount: WebGLUniformLocation | null = null
//   uPointers: WebGLUniformLocation | null = null

//   constructor(canvas: HTMLCanvasElement) {
//     this.canvas = canvas
//     const gl = canvas.getContext('webgl2', { antialias: true })
//     if (!gl) throw new Error('WebGL2 não suportado')
//     this.gl = gl

//     this.shaderSource = defaultShaderSource
//     this.pointerArray = new Float32Array(16)
//     this.vertexSrc = `#version 300 es
//       precision highp float;
//       in vec4 position;
//       void main(){ gl_Position = position; }`
//     this.vertices = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1])
//   }

//   updateShader(source: string): void {
//     this.shaderSource = source
//     this.reset()
//     this.setup()
//     this.init()
//   }

//   updateMove(deltas: Vec2): void {
//     this.mouseMove[0] = deltas[0] || 0
//     this.mouseMove[1] = deltas[1] || 0
//   }

//   updateMouse(coords: Vec2): void {
//     this.mouseCoords[0] = coords[0] || 0
//     this.mouseCoords[1] = coords[1] || 0
//   }

//   updatePointerCount(n: number): void {
//     this.pointerCount = n | 0
//   }

//   updatePointerCoords(arr: Float32Array): void {
//     if (!arr || arr.length === 0) {
//       for (let i = 0; i < this.pointerArray.length; i++) this.pointerArray[i] = 0
//       return
//     }
//     const max = Math.min(arr.length, this.pointerArray.length)
//     for (let i = 0; i < max; i++) this.pointerArray[i] = arr[i]
//     for (let i = max; i < this.pointerArray.length; i++) this.pointerArray[i] = 0
//   }

//   updateCanvasSize(width: number, height: number): void {
//     const gl = this.gl
//     this.canvas.width = Math.floor(width)
//     this.canvas.height = Math.floor(height)
//     this.canvas.style.width = Math.floor(width / (window.devicePixelRatio || 1)) + 'px'
//     this.canvas.style.height = Math.floor(height / (window.devicePixelRatio || 1)) + 'px'
//     gl.viewport(0, 0, this.canvas.width, this.canvas.height)
//   }

//   compile(shader: WebGLShader, source: string): void {
//     const gl = this.gl
//     gl.shaderSource(shader, source)
//     gl.compileShader(shader)
//     if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
//       console.error('Shader compilation error:', gl.getShaderInfoLog(shader))
//     }
//   }

//   reset(): void {
//     const gl = this.gl
//     if (this.program) {
//       try {
//         if (this.vs) { gl.detachShader(this.program, this.vs); gl.deleteShader(this.vs) }
//         if (this.fs) { gl.detachShader(this.program, this.fs); gl.deleteShader(this.fs) }
//         gl.deleteProgram(this.program)
//       } catch {
//         // ignore cleanup errors
//       }
//     }
//     this.program = null
//     this.vs = null
//     this.fs = null
//   }

//   setup(): void {
//     const gl = this.gl
//     this.vs = gl.createShader(gl.VERTEX_SHADER)
//     this.fs = gl.createShader(gl.FRAGMENT_SHADER)
//     if (!this.vs || !this.fs) throw new Error('Failed to create shaders')
    
//     this.compile(this.vs, this.vertexSrc)
//     this.compile(this.fs, this.shaderSource)

//     this.program = gl.createProgram()
//     if (!this.program) throw new Error('Failed to create program')
    
//     gl.attachShader(this.program, this.vs)
//     gl.attachShader(this.program, this.fs)
//     gl.linkProgram(this.program)
//     if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
//       console.error('Program link error:', gl.getProgramInfoLog(this.program))
//     }
//   }

//   init(): void {
//     const gl = this.gl
//     const program = this.program
//     if (!program) return
    
//     this.buffer = gl.createBuffer()
//     gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer)
//     gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.STATIC_DRAW)

//     const position = gl.getAttribLocation(program, 'position')
//     gl.enableVertexAttribArray(position)
//     gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)

//     this.uResolution = gl.getUniformLocation(program, 'resolution')
//     this.uTime = gl.getUniformLocation(program, 'time')
//     this.uMove = gl.getUniformLocation(program, 'move')
//     this.uTouch = gl.getUniformLocation(program, 'touch')
//     this.uPointerCount = gl.getUniformLocation(program, 'pointerCount')
//     this.uPointers = gl.getUniformLocation(program, 'pointers')
//   }

//   render(now: number = 0): void {
//     const gl = this.gl
//     const program = this.program
//     if (!program || gl.getProgramParameter(program, gl.DELETE_STATUS)) return

//     gl.clearColor(0, 0, 0, 1)
//     gl.clear(gl.COLOR_BUFFER_BIT)
//     gl.useProgram(program)
//     gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer)

//     if (this.uResolution) gl.uniform2f(this.uResolution, this.canvas.width, this.canvas.height)
//     if (this.uTime) gl.uniform1f(this.uTime, now * 1e-3)
//     if (this.uMove) gl.uniform2f(this.uMove, this.mouseMove[0], this.mouseMove[1])
//     if (this.uTouch) gl.uniform2f(this.uTouch, this.mouseCoords[0], this.mouseCoords[1])
//     if (this.uPointerCount) gl.uniform1i(this.uPointerCount, this.pointerCount)
//     if (this.uPointers) gl.uniform2fv(this.uPointers, this.pointerArray)

//     gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
//   }
// }

// // ---------- PointerHandler ----------
// class PointerHandler {
//   canvas: HTMLCanvasElement
//   active: boolean = false
//   pointers: Map<number, Vec2> = new Map()
//   lastCoords: Vec2 = [0, 0]
//   _moves: Vec2 = [0, 0]
//   _coordsCache: Float32Array

//   constructor(canvas: HTMLCanvasElement) {
//     this.canvas = canvas
//     this._coordsCache = new Float32Array(16)

//     const map = (x: number, y: number): Vec2 => {
//       const rect = canvas.getBoundingClientRect()
//       const dpr = window.devicePixelRatio || 1
//       const cx = (x - rect.left) * dpr
//       const cy = (y - rect.top) * dpr
//       return [cx, canvas.height - cy]
//     }

//     canvas.addEventListener('pointerdown', (e: PointerEvent) => {
//       this.active = true
//       const [mx, my] = map(e.clientX, e.clientY)
//       this.pointers.set(e.pointerId, [mx, my])
//     })

//     const removePointer = (e: PointerEvent) => {
//       if (this.count === 1) this.lastCoords = this.first
//       this.pointers.delete(e.pointerId)
//       this.active = this.pointers.size > 0
//     }

//     canvas.addEventListener('pointerup', removePointer)
//     canvas.addEventListener('pointercancel', removePointer)
//     canvas.addEventListener('pointerleave', removePointer)

//     canvas.addEventListener('pointermove', (e: PointerEvent) => {
//       if (!this.active) return
//       const [mx, my] = map(e.clientX, e.clientY)
//       this.pointers.set(e.pointerId, [mx, my])
//       this._moves[0] += e.movementX
//       this._moves[1] += e.movementY
//       this.lastCoords = [mx, my]
//     })
//   }

//   get count(): number {
//     return this.pointers.size
//   }

//   get move(): Vec2 {
//     return this._moves
//   }

//   coordsArray(): Float32Array {
//     const arr = this._coordsCache
//     let i = 0
//     for (const v of this.pointers.values()) {
//       if (i >= arr.length) break
//       arr[i++] = v[0]
//       arr[i++] = v[1]
//     }
//     for (; i < arr.length; i++) arr[i] = 0
//     return arr
//   }

//   get first(): Vec2 {
//     for (const v of this.pointers.values()) return v
//     return this.lastCoords
//   }
// }

// // ---------- Shader ----------
// const defaultShaderSource = `#version 300 es
// precision highp float;
// out vec4 O;
// uniform vec2 resolution;
// uniform float time;
// #define FC gl_FragCoord.xy
// #define T time
// #define R resolution
// #define MN min(R.x,R.y)

// float rnd(vec2 p) {
//   p=fract(p*vec2(12.9898,78.233));
//   p+=dot(p,p+34.56);
//   return fract(p.x*p.y);
// }

// float noise(in vec2 p) {
//   vec2 i=floor(p), f=fract(p), u=f*f*(3.-2.*f);
//   float
//   a=rnd(i),
//   b=rnd(i+vec2(1,0)),
//   c=rnd(i+vec2(0,1)),
//   d=rnd(i+1.);
//   return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
// }

// float fbm(vec2 p) {
//   float t=.0, a=1.; mat2 m=mat2(1.,-.5,.2,1.2);
//   for (int i=0; i<5; i++) {
//     t+=a*noise(p);
//     p*=2.*m;
//     a*=.5;
//   }
//   return t;
// }

// float clouds(vec2 p) {
//   float d=1., t=.0;
//   for (float i=.0; i<3.; i++) {
//     float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);
//     t=mix(t,d,a);
//     d=a;
//     p*=2./(i+1.);
//   }
//   return t;
// }

// void main(void) {
//   vec2 uv=(FC-.5*R)/MN,st=uv*vec2(2,1);
//   vec3 col=vec3(0);
//   float bg=clouds(vec2(st.x+T*.5,-st.y));
//   uv*=1.-.3*(sin(T*.2)*.5+.5);
//   for (float i=1.; i<12.; i++) {
//     uv+=.1*cos(i*vec2(.1+.01*i, .8)+i*i+T*.5+.1*uv.x);
//     vec2 p=uv;
//     float d=length(p);
//     col+=.00125/d*(cos(sin(i)*vec3(0.4,0.7,1.0))+1.);
//     float b=noise(i+p+bg*1.731);
//     col+=.002*b/length(max(p,vec2(b*p.x*.02,p.y)));
//     col=mix(col,vec3(bg*.05,bg*.1,bg*.25),d);
//   }
//   O=vec4(col,1);
// }`

// // ---------- Hook com pré-carregamento ----------
// const useShaderBackground = (onReady?: () => void) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null)
//   const rendererRef = useRef<WebGLRenderer | null>(null)
//   const pointerRef = useRef<PointerHandler | null>(null)
//   const rafRef = useRef<number | null>(null)

//   const resize = () => {
//     const canvas = canvasRef.current
//     if (!canvas || !rendererRef.current) return
//     const dpr = window.devicePixelRatio || 1
//     const w = Math.floor(window.innerWidth * dpr)
//     const h = Math.floor(window.innerHeight * dpr)
//     rendererRef.current.updateCanvasSize(w, h)
//   }

//   const loop = (t: number) => {
//     const renderer = rendererRef.current
//     const pointers = pointerRef.current
//     if (renderer && pointers) {
//       renderer.updateMouse(pointers.first || [0, 0])
//       renderer.updatePointerCount(pointers.count)
//       renderer.updatePointerCoords(pointers.coordsArray())
//       renderer.updateMove(pointers.move || [0, 0])
//       renderer.render(t)
//     }
//     rafRef.current = requestAnimationFrame(loop)
//   }

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     // Inicialização assíncrona
//     const init = async () => {
//       // Pequeno delay para garantir que o canvas está montado
//       await new Promise(resolve => setTimeout(resolve, 50))
      
//       rendererRef.current = new WebGLRenderer(canvas)
//       rendererRef.current.setup()
//       rendererRef.current.init()

//       pointerRef.current = new PointerHandler(canvas)

//       resize()
      
//       // Renderizar 3 frames iniciais para "aquecer" o WebGL
//       for (let i = 0; i < 3; i++) {
//         rendererRef.current.render(performance.now())
//       }
      
//       // Notificar que está pronto
//       if (onReady) onReady()
      
//       // Iniciar loop
//       rafRef.current = requestAnimationFrame(loop)
//     }

//     init()

//     window.addEventListener('resize', resize)
//     return () => {
//       window.removeEventListener('resize', resize)
//       if (rafRef.current) cancelAnimationFrame(rafRef.current)
//       if (rendererRef.current) rendererRef.current.reset()
//     }
//   }, [onReady])

//   return canvasRef
// }

// // ---------- Componente Hero ----------
// export default function Hero() {
//   const [isReady, setIsReady] = useState(false)
//   const [isVisible, setIsVisible] = useState(false)
  
//   const canvasRef = useShaderBackground(() => {
//     // WebGL pronto, aguardar um pouco antes de mostrar
//     setTimeout(() => {
//       setIsReady(true)
//       setTimeout(() => setIsVisible(true), 50)
//     }, 100)
//   })

//   return (
//     <section id="home" className="relative w-full h-screen overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-300">
//       {/* Overlay de loading enquanto WebGL carrega */}
//       {!isReady && (
//         <div className="absolute inset-0 z-50 bg-gray-50 dark:bg-black flex items-center justify-center transition-colors duration-300">
//           <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
//         </div>
//       )}
      
//       {/* Canvas WebGL - visível apenas no dark mode via CSS */}
//       <canvas
//         ref={canvasRef}
//         className={`absolute inset-0 w-full h-full object-contain touch-none transition-opacity duration-500 opacity-0 dark:opacity-100 ${isReady ? '' : '!opacity-0'}`}
//         style={{ background: 'transparent', width: '100%', height: '100%' }}
//       />
      
//       {/* Background alternativo para light mode - visível apenas no light mode via CSS */}
//       <div className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-300">
//         <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100"></div>
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.15) 1px, transparent 0)`,
//             backgroundSize: '40px 40px'
//           }}></div>
//         </div>
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
//       </div>
      
//       {/* Overlay gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-200/20 dark:to-black/20 z-[5] transition-colors duration-300" />
      
//       <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-gray-900 dark:text-white px-6 transition-colors duration-300">
//         <div className="text-center space-y-10 max-w-6xl mx-auto scale-105 md:scale-110 lg:scale-125">
//           <div className="space-y-4">
//             <h1 className={`text-6xl md:text-8xl lg:text-9xl font-extrabold transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
//               <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 dark:from-white dark:via-cyan-100 dark:to-blue-200 bg-clip-text text-transparent">Inovação &</span>
//             </h1>
//             <h1 className={`text-6xl md:text-8xl lg:text-9xl font-extrabold transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
//               <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500 bg-clip-text text-transparent animate-gradient">Tecnologia</span>
//             </h1>
//           </div>
//           <div className={`w-40 h-1 bg-gradient-to-r from-transparent via-cyan-600 dark:via-cyan-500 to-transparent mx-auto transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} />
//           <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
//             <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-cyan-50/90 font-light leading-relaxed transition-colors duration-300">
//               A LT Cloud transforma ideias em soluções digitais de alto desempenho para empresas que buscam excelência tecnológica.
//             </p>
//           </div>
//           {/* <div className={`flex flex-col sm:flex-row gap-6 justify-center mt-14 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
//             <a href="#services" className="group relative px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-600 text-white rounded-xl font-semibold text-xl transition-all duration-300 transform hover:scale-110 shadow-xl shadow-cyan-500/40 overflow-hidden">
//               <span className="relative z-10">Nossos Serviços</span>
//             </a>
//             <a href="#contact" className="px-10 py-5 bg-cyan-600/10 dark:bg-cyan-500/10 border border-cyan-600/30 dark:border-cyan-300/30 text-cyan-700 dark:text-cyan-100 rounded-xl font-semibold text-xl transition-all duration-300 transform hover:scale-110 backdrop-blur-md">
//               Entre em Contato
//             </a>
//           </div> */}
//         </div>
//       </div>

//       <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
//         <div className="w-6 h-10 border-2 border-cyan-600/50 dark:border-cyan-400/50 rounded-full flex items-start justify-center p-2 animate-bounce transition-colors duration-300">
//           <div className="w-1 h-2 bg-cyan-600 dark:bg-cyan-400 rounded-full transition-colors duration-300"></div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes gradient-shift {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient-shift 3s ease infinite;
//         }
//       `}</style>
//     </section>
//   )
// }
'use client'
import { useRef, useEffect, useState } from 'react'

// ---------- Types ----------
type Vec2 = [number, number]

// ---------- WebGLRenderer ----------
class WebGLRenderer {
  canvas: HTMLCanvasElement
  gl: WebGL2RenderingContext
  shaderSource: string
  program: WebGLProgram | null = null
  vs: WebGLShader | null = null
  fs: WebGLShader | null = null
  buffer: WebGLBuffer | null = null
  mouseMove: Vec2 = [0, 0]
  mouseCoords: Vec2 = [0, 0]
  pointerCount: number = 0
  pointerArray: Float32Array
  vertexSrc: string
  vertices: Float32Array
  uResolution: WebGLUniformLocation | null = null
  uTime: WebGLUniformLocation | null = null
  uMove: WebGLUniformLocation | null = null
  uTouch: WebGLUniformLocation | null = null
  uPointerCount: WebGLUniformLocation | null = null
  uPointers: WebGLUniformLocation | null = null

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    const gl = canvas.getContext('webgl2', { antialias: true })
    if (!gl) throw new Error('WebGL2 não suportado')
    this.gl = gl

    this.shaderSource = defaultShaderSource
    this.pointerArray = new Float32Array(16)
    this.vertexSrc = `#version 300 es
      precision highp float;
      in vec4 position;
      void main(){ gl_Position = position; }`
    this.vertices = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1])
  }

  updateShader(source: string): void {
    this.shaderSource = source
    this.reset()
    this.setup()
    this.init()
  }

  updateMove(deltas: Vec2): void {
    this.mouseMove[0] = deltas[0] || 0
    this.mouseMove[1] = deltas[1] || 0
  }

  updateMouse(coords: Vec2): void {
    this.mouseCoords[0] = coords[0] || 0
    this.mouseCoords[1] = coords[1] || 0
  }

  updatePointerCount(n: number): void {
    this.pointerCount = n | 0
  }

  updatePointerCoords(arr: Float32Array): void {
    if (!arr || arr.length === 0) {
      for (let i = 0; i < this.pointerArray.length; i++) this.pointerArray[i] = 0
      return
    }
    const max = Math.min(arr.length, this.pointerArray.length)
    for (let i = 0; i < max; i++) this.pointerArray[i] = arr[i]
    for (let i = max; i < this.pointerArray.length; i++) this.pointerArray[i] = 0
  }

  updateCanvasSize(width: number, height: number): void {
    const gl = this.gl
    this.canvas.width = Math.floor(width)
    this.canvas.height = Math.floor(height)
    this.canvas.style.width = Math.floor(width / (window.devicePixelRatio || 1)) + 'px'
    this.canvas.style.height = Math.floor(height / (window.devicePixelRatio || 1)) + 'px'
    gl.viewport(0, 0, this.canvas.width, this.canvas.height)
  }

  compile(shader: WebGLShader, source: string): void {
    const gl = this.gl
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader compilation error:', gl.getShaderInfoLog(shader))
    }
  }

  reset(): void {
    const gl = this.gl
    if (this.program) {
      try {
        if (this.vs) { gl.detachShader(this.program, this.vs); gl.deleteShader(this.vs) }
        if (this.fs) { gl.detachShader(this.program, this.fs); gl.deleteShader(this.fs) }
        gl.deleteProgram(this.program)
      } catch {
        // ignore cleanup errors
      }
    }
    this.program = null
    this.vs = null
    this.fs = null
  }

  setup(): void {
    const gl = this.gl
    this.vs = gl.createShader(gl.VERTEX_SHADER)
    this.fs = gl.createShader(gl.FRAGMENT_SHADER)
    if (!this.vs || !this.fs) throw new Error('Failed to create shaders')
    
    this.compile(this.vs, this.vertexSrc)
    this.compile(this.fs, this.shaderSource)

    this.program = gl.createProgram()
    if (!this.program) throw new Error('Failed to create program')
    
    gl.attachShader(this.program, this.vs)
    gl.attachShader(this.program, this.fs)
    gl.linkProgram(this.program)
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(this.program))
    }
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
    this.uMove = gl.getUniformLocation(program, 'move')
    this.uTouch = gl.getUniformLocation(program, 'touch')
    this.uPointerCount = gl.getUniformLocation(program, 'pointerCount')
    this.uPointers = gl.getUniformLocation(program, 'pointers')
  }

  render(now: number = 0): void {
    const gl = this.gl
    const program = this.program
    if (!program || gl.getProgramParameter(program, gl.DELETE_STATUS)) return

    gl.clearColor(0, 0, 0, 1)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.useProgram(program)
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer)

    if (this.uResolution) gl.uniform2f(this.uResolution, this.canvas.width, this.canvas.height)
    if (this.uTime) gl.uniform1f(this.uTime, now * 1e-3)
    if (this.uMove) gl.uniform2f(this.uMove, this.mouseMove[0], this.mouseMove[1])
    if (this.uTouch) gl.uniform2f(this.uTouch, this.mouseCoords[0], this.mouseCoords[1])
    if (this.uPointerCount) gl.uniform1i(this.uPointerCount, this.pointerCount)
    if (this.uPointers) gl.uniform2fv(this.uPointers, this.pointerArray)

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
  }
}

// ---------- PointerHandler ----------
class PointerHandler {
  canvas: HTMLCanvasElement
  active: boolean = false
  pointers: Map<number, Vec2> = new Map()
  lastCoords: Vec2 = [0, 0]
  _moves: Vec2 = [0, 0]
  _coordsCache: Float32Array

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this._coordsCache = new Float32Array(16)

    const map = (x: number, y: number): Vec2 => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      const cx = (x - rect.left) * dpr
      const cy = (y - rect.top) * dpr
      return [cx, canvas.height - cy]
    }

    canvas.addEventListener('pointerdown', (e: PointerEvent) => {
      this.active = true
      const [mx, my] = map(e.clientX, e.clientY)
      this.pointers.set(e.pointerId, [mx, my])
    })

    const removePointer = (e: PointerEvent) => {
      if (this.count === 1) this.lastCoords = this.first
      this.pointers.delete(e.pointerId)
      this.active = this.pointers.size > 0
    }

    canvas.addEventListener('pointerup', removePointer)
    canvas.addEventListener('pointercancel', removePointer)
    canvas.addEventListener('pointerleave', removePointer)

    canvas.addEventListener('pointermove', (e: PointerEvent) => {
      if (!this.active) return
      const [mx, my] = map(e.clientX, e.clientY)
      this.pointers.set(e.pointerId, [mx, my])
      this._moves[0] += e.movementX
      this._moves[1] += e.movementY
      this.lastCoords = [mx, my]
    })
  }

  get count(): number {
    return this.pointers.size
  }

  get move(): Vec2 {
    return this._moves
  }

  coordsArray(): Float32Array {
    const arr = this._coordsCache
    let i = 0
    for (const v of this.pointers.values()) {
      if (i >= arr.length) break
      arr[i++] = v[0]
      arr[i++] = v[1]
    }
    for (; i < arr.length; i++) arr[i] = 0
    return arr
  }

  get first(): Vec2 {
    for (const v of this.pointers.values()) return v
    return this.lastCoords
  }
}

// ---------- Shader ----------
const defaultShaderSource = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)

float rnd(vec2 p) {
  p=fract(p*vec2(12.9898,78.233));
  p+=dot(p,p+34.56);
  return fract(p.x*p.y);
}

float noise(in vec2 p) {
  vec2 i=floor(p), f=fract(p), u=f*f*(3.-2.*f);
  float
  a=rnd(i),
  b=rnd(i+vec2(1,0)),
  c=rnd(i+vec2(0,1)),
  d=rnd(i+1.);
  return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
}

float fbm(vec2 p) {
  float t=.0, a=1.; mat2 m=mat2(1.,-.5,.2,1.2);
  for (int i=0; i<5; i++) {
    t+=a*noise(p);
    p*=2.*m;
    a*=.5;
  }
  return t;
}

float clouds(vec2 p) {
  float d=1., t=.0;
  for (float i=.0; i<3.; i++) {
    float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);
    t=mix(t,d,a);
    d=a;
    p*=2./(i+1.);
  }
  return t;
}

void main(void) {
  vec2 uv=(FC-.5*R)/MN,st=uv*vec2(2,1);
  vec3 col=vec3(0);
  float bg=clouds(vec2(st.x+T*.5,-st.y));
  uv*=1.-.3*(sin(T*.2)*.5+.5);
  for (float i=1.; i<12.; i++) {
    uv+=.1*cos(i*vec2(.1+.01*i, .8)+i*i+T*.5+.1*uv.x);
    vec2 p=uv;
    float d=length(p);
    col+=.00125/d*(cos(sin(i)*vec3(0.4,0.7,1.0))+1.);
    float b=noise(i+p+bg*1.731);
    col+=.002*b/length(max(p,vec2(b*p.x*.02,p.y)));
    col=mix(col,vec3(bg*.05,bg*.1,bg*.25),d);
  }
  O=vec4(col,1);
}`

// ---------- Hook com pré-carregamento ----------
const useShaderBackground = (onReady?: () => void) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rendererRef = useRef<WebGLRenderer | null>(null)
  const pointerRef = useRef<PointerHandler | null>(null)
  const rafRef = useRef<number | null>(null)

  const resize = () => {
    const canvas = canvasRef.current
    if (!canvas || !rendererRef.current) return
    const dpr = window.devicePixelRatio || 1
    const w = Math.floor(window.innerWidth * dpr)
    const h = Math.floor(window.innerHeight * dpr)
    rendererRef.current.updateCanvasSize(w, h)
  }

  const loop = (t: number) => {
    const renderer = rendererRef.current
    const pointers = pointerRef.current
    if (renderer && pointers) {
      renderer.updateMouse(pointers.first || [0, 0])
      renderer.updatePointerCount(pointers.count)
      renderer.updatePointerCoords(pointers.coordsArray())
      renderer.updateMove(pointers.move || [0, 0])
      renderer.render(t)
    }
    rafRef.current = requestAnimationFrame(loop)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Inicialização assíncrona
    const init = async () => {
      // Pequeno delay para garantir que o canvas está montado
      await new Promise(resolve => setTimeout(resolve, 50))
      
      rendererRef.current = new WebGLRenderer(canvas)
      rendererRef.current.setup()
      rendererRef.current.init()

      pointerRef.current = new PointerHandler(canvas)

      resize()
      
      // Renderizar 3 frames iniciais para "aquecer" o WebGL
      for (let i = 0; i < 3; i++) {
        rendererRef.current.render(performance.now())
      }
      
      // Notificar que está pronto
      if (onReady) onReady()
      
      // Iniciar loop
      rafRef.current = requestAnimationFrame(loop)
    }

    init()

    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (rendererRef.current) rendererRef.current.reset()
    }
  }, [onReady])

  return canvasRef
}

// ---------- Componente Hero ----------
export default function Hero() {
  const [isReady, setIsReady] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  const canvasRef = useShaderBackground(() => {
    // WebGL pronto, aguardar um pouco antes de mostrar
    setTimeout(() => {
      setIsReady(true)
      setTimeout(() => setIsVisible(true), 50)
    }, 100)
  })

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-300">
      {/* Overlay de loading enquanto WebGL carrega */}
      {!isReady && (
        <div className="absolute inset-0 z-50 bg-gray-50 dark:bg-black flex items-center justify-center transition-colors duration-300">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Canvas WebGL - visível apenas no dark mode via CSS */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full object-contain touch-none transition-opacity duration-500 opacity-0 dark:opacity-100 ${isReady ? '' : '!opacity-0'}`}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
      />
      
      {/* Background alternativo para light mode - visível apenas no light mode via CSS */}
      <div className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-200/20 dark:to-black/20 z-[5] transition-colors duration-300" />
      
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-gray-900 dark:text-white px-6 transition-colors duration-300">
        <div className="text-center space-y-10 max-w-6xl mx-auto scale-105 md:scale-110 lg:scale-125">
          <div className="space-y-4">
            <h1 className={`text-6xl md:text-8xl lg:text-9xl font-extrabold transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 dark:from-white dark:via-cyan-100 dark:to-blue-200 bg-clip-text text-transparent">Inovação &</span>
            </h1>
            <h1 className={`text-6xl md:text-8xl lg:text-9xl font-extrabold transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500 bg-clip-text text-transparent animate-gradient">Tecnologia</span>
            </h1>
          </div>
          <div className={`w-40 h-1 bg-gradient-to-r from-transparent via-cyan-600 dark:via-cyan-500 to-transparent mx-auto transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} />
          <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-cyan-50/90 font-light leading-relaxed transition-colors duration-300">
              A LT Cloud transforma ideias em soluções digitais de alto desempenho para empresas que buscam excelência tecnológica.
            </p>
          </div>
          <div className={`flex flex-col sm:flex-row gap-6 justify-center mt-14 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <a href="#services" className="group relative px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-600 text-white rounded-xl font-semibold text-xl transition-all duration-300 transform hover:scale-110 shadow-xl shadow-cyan-500/40 overflow-hidden">
              <span className="relative z-10">Nossos Serviços</span>
            </a>
            <a href="#contact" className="px-10 py-5 bg-cyan-600/10 dark:bg-cyan-500/10 border border-cyan-600/30 dark:border-cyan-300/30 text-cyan-700 dark:text-cyan-100 rounded-xl font-semibold text-xl transition-all duration-300 transform hover:scale-110 backdrop-blur-md">
              Entre em Contato
            </a>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-6 h-10 border-2 border-cyan-600/50 dark:border-cyan-400/50 rounded-full flex items-start justify-center p-2 animate-bounce transition-colors duration-300">
          <div className="w-1 h-2 bg-cyan-600 dark:bg-cyan-400 rounded-full transition-colors duration-300"></div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </section>
  )
}