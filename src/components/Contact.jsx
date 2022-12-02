import { Html } from "@react-three/drei";
import { useContextContactCon } from "../contexts/ContactContext";

const Contact = () => {
  const { setOpened, setContent, setwhich, which } = useContextContactCon();
  const contactClick = (content) => {
    setOpened(true);
    setContent(content);
  };
  return (
    <>
      {which === 0 ? (
        <>
          <mesh position={[10, 0, -15]}>
            <Html distanceFactor={10}>
              <div className="content" onClick={() => contactClick("电视")}>
                触点1
              </div>
            </Html>
          </mesh>
          <mesh position={[-10, -10, -20]}>
            <Html distanceFactor={10}>
              <div className="content" onClick={() => contactClick("沙发")}>
                触点2
              </div>
            </Html>
          </mesh>
          <mesh position={[5, 0, 20]}>
            <Html distanceFactor={10}>
              <div className="content" onClick={() => setwhich(1)}>
                触点3
              </div>
            </Html>
          </mesh>
        </>
      ) : (
        <mesh position={[14, -10, -5]}>
          <Html distanceFactor={10}>
            <div className="content" onClick={() => setwhich(0)}>
              触点3
            </div>
          </Html>
        </mesh>
      )}
    </>
  );
};

export default Contact;
