'use client';

import React, { useLayoutEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useGraph, useFrame } from '@react-three/fiber';
import { useGLTF, Html } from '@react-three/drei'; 
import { SkeletonUtils } from 'three-stdlib';

export function Model({ accentColor = '#00f2ff', ...props }: any) {
  const group = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Object3D>();
  
  const { scene } = useGLTF('/robot-transformed.glb');
  const clone = useMemo(() => (scene ? SkeletonUtils.clone(scene) : null), [scene]);
  const { nodes, materials } = useGraph(clone || new THREE.Group());

  useLayoutEffect(() => {
    if (nodes?.Object_365) headRef.current = nodes.Object_365;
  }, [nodes]);

  useFrame((state) => {
    if (headRef.current) {
      const { x, y } = state.mouse;
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, x * 0.5, 0.1);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -y * 0.3, 0.1);
    }
  });

  if (!clone || !nodes?.Object_363) return null;

  return (
    <group ref={group} {...props} dispose={null}>
      {/* 1. Scale is now controlled from outside for perfect sizing */}
      <group scale={0.01} rotation={[-Math.PI / 2, 0, 0]}>
          <primitive object={nodes._rootJoint} />
          <skinnedMesh geometry={(nodes.Object_363 as any).geometry} material={materials.F_MED_EmberRae_Body_5abe865} skeleton={(nodes.Object_363 as any).skeleton} />
          <skinnedMesh geometry={(nodes.Object_364 as any).geometry} material={materials.F_MED_EmberRae_eyes_745fbd62} skeleton={(nodes.Object_364 as any).skeleton} />
          <skinnedMesh geometry={(nodes.Object_365 as any).geometry} material={materials.F_MED_EmberRae_Head_5c765ff0} skeleton={(nodes.Object_365 as any).skeleton} />
          <skinnedMesh geometry={(nodes.Object_366 as any).geometry} material={materials.F_MED_EmberRae_FaceAcc_4b6d9e31} skeleton={(nodes.Object_366 as any).skeleton} />
      
      {/* --- INTERACTIVE HOTSPOTS --- */}
        {/* Hotspot 1: Armor / Education */}
        <Html position={[60, 150, 20]} center distanceFactor={1}>
          <div className="hotspot-wrapper group">
            <div className="plus-btn">+</div>
            <div className="hotspot-card">
              <h3>Academic Profile</h3>
              <p>CGPA: 8.6 | Medi-Caps University</p>
            </div>
          </div>
        </Html>

        {/* Hotspot 2: Head / OS Status */}
        <Html position={[0, 250, 30]} center distanceFactor={1}>
          <div className="hotspot-wrapper group">
            <div className="plus-btn">+</div>
            <div className="hotspot-card">
              <h3>System Status</h3>
              <p>Jeenie OS v1.0: Operational</p>
            </div>
          </div>
        </Html>
      </group>

      {/* 2. Hotspots: Locked to the robot's local space so they don't fly away */}
      <Html position={[0.6, 1.4, 0.2]} distanceFactor={8} center>
        <div className="hotspot-btn group">
          <div className="plus-icon">+</div>
          <div className="hotspot-label">REINFORCED ARMOR</div>
        </div>
      </Html>


      <Html position={[0, 2.4, 0.3]} distanceFactor={8} center>
        <div className="hotspot-btn group">
          <div className="plus-icon">+</div>
          <div className="hotspot-label">VIRTUAL OS v1.0</div>
        </div>
      </Html>
    </group>
  );
}