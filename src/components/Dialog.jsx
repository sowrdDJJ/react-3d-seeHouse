import { Modal } from "@mantine/core";
import { useContextContactCon } from "../contexts/ContactContext";

const Dialog = () => {
    const { opened, setOpened, content } = useContextContactCon();
    console.log(opened);
    return (
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
        >
            {content}
        </Modal>
    );
};

export default Dialog;