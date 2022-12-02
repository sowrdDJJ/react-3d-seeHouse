import { Html } from '@react-three/drei'
import { useContextContactCon } from "../contexts/ContactContext";


const Contact = () => {
    const { setOpened, setContent } = useContextContactCon();
    const contactClick = (content) => {
        setOpened(true);
        setContent(content);
    }
    return (
        <>
            <mesh position={[10, 0, -15]}>
                <Html distanceFactor={10}>
                    <div class="content" onClick={() => contactClick('电视')}>
                        触点1
                    </div>
                </Html>
            </mesh>
            <mesh position={[-10, -10, -20]}>
                <Html distanceFactor={10}>
                    <div class="content" onClick={() => contactClick('沙发')}>
                        触点2
                    </div>
                </Html>
            </mesh>
        </>
    )
}

export default Contact