import React, { useState } from 'react'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import Dome from './Dome'

const store = [
    { name: 'outside', color: 'lightpink', position: [10, 0, -15], url: '/house.jpg', link: 1 },
    // { name: 'inside', color: 'lightblue', position: [15, 0, 0], url: '/Photosphere1.jpg', link: 0 }
    // ...
]

const Portals = () => {
    const [which, setwhich] = useState(0)
    const { link, ...props } = store[which]
    const maps = useLoader(THREE.TextureLoader, store.map((entry) => entry.url)) // prettier-ignore
    return <Dome {...props} texture={maps[which]} />
}

export default Portals