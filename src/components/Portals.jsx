import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import Dome from './Dome'
import { useContextContactCon } from "../contexts/ContactContext"; 

const store = [
    { name: 'outside', color: 'lightpink', position: [10, 0, -15], url: '/house.jpg', link: 1 },
    { name: 'inside', color: 'lightblue', position: [15, 0, 0], url: '/Outdoor.jpg', link: 0 }
    // ...
]

const Portals = () => {
    const { which } = useContextContactCon();
    const { link, ...props } = store[which]
    const maps = useLoader(THREE.TextureLoader, store.map((entry) => entry.url)) // prettier-ignore
    return <Dome {...props} texture={maps[which]} />
}

export default Portals