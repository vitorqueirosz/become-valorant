import React, { useState, createContext } from 'react';


const Context = createContext();

function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);


  return (
    <Context.Provider value={{ authenticated }}>
        {children}
    </Context.Provider>
  );
}

export {Context, AuthProvider};