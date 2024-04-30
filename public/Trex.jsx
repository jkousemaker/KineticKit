/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 trex.gltf 
Author: Andrius Beconis (https://sketchfab.com/abeconis)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/steampunk-underwater-explorer-127471a23e0f4790914b13b9052c4912
Title: Steampunk underwater explorer
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/trex.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={3.75}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Body} />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.Body_NONE}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.Body_NONE}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.LightBbulb_b}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.LightBulb_a}
        />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Window} />
      </group>
    </group>
  );
}

useGLTF.preload("/trex.gltf");