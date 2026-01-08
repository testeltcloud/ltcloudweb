import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial } from "@react-three/drei"
import type { Group } from "three"

export function GlobeScene() {
    return (
        <div className="absolute inset-0 z-0" style={{ background: 'transparent' }}>
            <Canvas
                camera={{ position: [0, 0, 15], fov: 60 }}
                style={{ background: 'transparent' }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1d4ed8" />
                <pointLight position={[0, 0, 5]} intensity={0.3} color="#60a5fa" />

                <BlobEffect />
            </Canvas>
        </div>
    )
}

function BlobEffect() {
    const blobRef = useRef<Group>(null)

    useFrame(({ clock }) => {
        if (blobRef.current) {
            blobRef.current.rotation.y = clock.getElapsedTime() * 0.15
            blobRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.08
        }
    })

    return (
        <group ref={blobRef} position={[0, 0, 0]}>
            {/* Main wireframe sphere - primary visual */}
            <Sphere args={[6, 64, 64]} position={[0, 0, 0]}>
                <MeshDistortMaterial
                    color="#3b82f6"
                    attach="material"
                    distort={0.3}
                    speed={2}
                    wireframe
                    transparent
                    opacity={0.7}
                />
            </Sphere>

            {/* Inner solid glow sphere */}
            <Sphere args={[4.5, 32, 32]} position={[0, 0, 0]}>
                <MeshDistortMaterial
                    color="#1d4ed8"
                    attach="material"
                    distort={0.4}
                    speed={2.5}
                    transparent
                    opacity={0.12}
                />
            </Sphere>

            {/* Outer ethereal ring */}
            <Sphere args={[7.5, 32, 32]} position={[0, 0, 0]}>
                <MeshDistortMaterial
                    color="#60a5fa"
                    attach="material"
                    distort={0.2}
                    speed={1.5}
                    wireframe
                    transparent
                    opacity={0.25}
                />
            </Sphere>
        </group>
    )
}

export default GlobeScene
