import { createContext, useContext, useState } from "react";
const ContactContext = createContext({});


export const ContactContextProvider = (props) => {
    const [opened, setOpened] = useState(false);
    const [content, setContent] = useState('');
    return (
        <ContactContext.Provider value={{
            opened,
            setOpened,
            content,
            setContent
        }}>
            {props.children}
        </ContactContext.Provider>
    );
};

export const useContextContactCon = () => {
    return useContext(ContactContext);
};