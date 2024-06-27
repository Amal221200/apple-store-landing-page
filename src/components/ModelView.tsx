import {  OrbitControls, OrbitControlsProps, PerspectiveCamera, View } from "@react-three/drei"
import { Dispatch, MutableRefObject, SetStateAction, Suspense } from "react"
import * as THREE from "three"
import Lights from "./Lights"
import IPhone from "./IPhone"
import Loader from "./Loader"

interface ModelViewProps {
  index: number,
  groupRef: MutableRefObject<THREE.Group<THREE.Object3DEventMap>>,
  gsapType: "view1" | "view2",
  controllRef: MutableRefObject<OrbitControlsProps | undefined>,
  setRotationState: Dispatch<SetStateAction<number>>,
  item: {
    title: string,
    color: Array<string>,
    img: string,
  },
  size: string
}

const ModelView = ({ index, groupRef, gsapType, controllRef, setRotationState, item, size }: ModelViewProps) => {
  return (
    <View index={index} id={gsapType} className={`h-full w-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}>
      {/* Ambient light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />
      <OrbitControls makeDefault ref={controllRef as never} enableZoom={false} enablePan={false} rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)} onEnd={() => {
          if (!controllRef.current) {
            return
          }

          if (controllRef.current.getAzimuthalAngle !== undefined) {
            setRotationState(controllRef.current.getAzimuthalAngle())
          }

        }} />
      <group ref={groupRef} name={index === 0 ? 'small' : 'large'} position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>
          <IPhone scale={index === 1 ? [15, 15, 15] : [17, 17, 17]} item={item} size={size} />
        </Suspense>
      </group>
    </View>
  )
}

export default ModelView