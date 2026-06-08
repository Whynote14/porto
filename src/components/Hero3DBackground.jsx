import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function createSeededRandom(seed) {
  let value = seed;

  return () => {
    value += 0x6D2B79F5;
    let t = value;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function FloatingParticles({ count = 300 }) {
  const mesh = useRef();

  const particles = useMemo(() => {
    const random = createSeededRandom(1406 + count);
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const speeds = new Float32Array(count);
    const offsets = new Float32Array(count);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (random() - 0.5) * 25;
      positions[i * 3 + 1] = (random() - 0.5) * 25;
      positions[i * 3 + 2] = (random() - 0.5) * 18;
      scales[i] = random() * 0.8 + 0.1;
      speeds[i] = random() * 0.5 + 0.05;
      offsets[i] = random() * Math.PI * 2;

      const color = new THREE.Color();
      if (random() > 0.5) {
        color.setHSL(0.5, 0.8, 0.6);
      } else {
        color.setHSL(0.7, 0.6, 0.7);
      }
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return { positions, scales, speeds, offsets, colors };
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const positions = mesh.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const speed = particles.speeds[i];
      const offset = particles.offsets[i];

      positions[i3 + 1] += Math.sin(time * speed + offset) * 0.004;
      positions[i3] += Math.cos(time * speed * 0.5 + offset) * 0.003;
      positions[i3 + 2] += Math.sin(time * speed * 0.3 + offset) * 0.0015;
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.rotation.y = time * 0.015;
    mesh.current.rotation.x = Math.sin(time * 0.04) * 0.08;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function GlowingSphere() {
  const mesh = useRef();
  const light = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.scale.setScalar(1 + Math.sin(time * 0.5) * 0.08);
    mesh.current.rotation.x = time * 0.12;
    mesh.current.rotation.z = time * 0.08;
    
    if (light.current) {
      light.current.intensity = 0.5 + Math.sin(time * 0.5) * 0.3;
    }
  });

  return (
    <>
      <pointLight
        ref={light}
        position={[3, 0, -5]}
        color="#38bdf8"
        intensity={0.6}
        distance={20}
      />
      <mesh ref={mesh} position={[3, 0, -5]}>
        <icosahedronGeometry args={[2.5, 2]} />
        <meshBasicMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>
    </>
  );
}

function GlowingSphere2() {
  const mesh = useRef();
  const light = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.scale.setScalar(1 + Math.cos(time * 0.4) * 0.12);
    mesh.current.rotation.y = time * 0.1;
    mesh.current.rotation.z = time * -0.04;
    
    if (light.current) {
      light.current.intensity = 0.4 + Math.cos(time * 0.4) * 0.25;
    }
  });

  return (
    <>
      <pointLight
        ref={light}
        position={[-4, -1, -6]}
        color="#8b5cf6"
        intensity={0.5}
        distance={18}
      />
      <mesh ref={mesh} position={[-4, -1, -6]}>
        <icosahedronGeometry args={[2, 1]} />
        <meshBasicMaterial
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>
    </>
  );
}

function GlowingSphere3() {
  const mesh = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.scale.setScalar(1 + Math.sin(time * 0.6 + Math.PI) * 0.06);
    mesh.current.rotation.x = time * 0.08;
    mesh.current.rotation.y = time * -0.06;
  });

  return (
    <mesh ref={mesh} position={[2, -3, -8]}>
      <octahedronGeometry args={[1.2, 1]} />
      <meshBasicMaterial
        color="#0ea5e9"
        wireframe
        transparent
        opacity={0.08}
      />
    </mesh>
  );
}

function ConnectingLines({ count = 50 }) {
  const linesRef = useRef();

  const linePositions = useMemo(() => {
    const random = createSeededRandom(2525 + count);
    const positions = new Float32Array(count * 6);
    for (let i = 0; i < count; i++) {
      const i6 = i * 6;
      positions[i6] = (random() - 0.5) * 20;
      positions[i6 + 1] = (random() - 0.5) * 20;
      positions[i6 + 2] = (random() - 0.5) * 12;
      positions[i6 + 3] = positions[i6] + (random() - 0.5) * 4;
      positions[i6 + 4] = positions[i6 + 1] + (random() - 0.5) * 4;
      positions[i6 + 5] = positions[i6 + 2] + (random() - 0.5) * 3;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    linesRef.current.rotation.y = time * 0.008;
    linesRef.current.rotation.x = Math.sin(time * 0.03) * 0.03;
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count * 2}
          array={linePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#0ea5e9"
        transparent
        opacity={0.08}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

export default function Hero3DBackground() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
    }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 55 }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: 'high-performance',
        }}
      >
        <ambientLight intensity={0.3} color="#ffffff" />
        <pointLight position={[10, 10, 10]} intensity={0.4} color="#ffffff" />
        <FloatingParticles count={300} />
        <GlowingSphere />
        <GlowingSphere2 />
        <GlowingSphere3 />
        <ConnectingLines count={50} />
      </Canvas>
    </div>
  );
}
