import React, { createContext, useState } from 'react';


export const AppContext = createContext();

export const AppProvider = (props) => {
    const [people, setPeople] = useState([
    ])
    return (
        <AppContext.Provider value={[people, setPeople]}>
            {props.children}
        </AppContext.Provider>
    );
}


