import { createContext, useContext, useState } from "react";
const ContactContext = createContext({});


export const ContactContextProvider = (props) => {
    const [opened, setOpened] = useState(false);
    const [content, setContent] = useState('');
    const [which, setwhich] = useState(0)
    return (
        <ContactContext.Provider value={{
            opened,
            setOpened,
            content,
            setContent,
            which,
            setwhich
        }}>
            {props.children}
        </ContactContext.Provider>
    );
};

export const useContextContactCon = () => {
    return useContext(ContactContext);
};