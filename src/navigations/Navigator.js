import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostAuthNav from "./post-auth";
import PreauthNav from "./pre-auth";

export const LoginPro = createContext();

function Navigator() {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    // debugger
    setLogin(true);
  };
  return (
    <LoginPro.Provider value={{login,handleLogin}}>
      <BrowserRouter>{login ? <PostAuthNav /> : <PreauthNav />}</BrowserRouter>
    </LoginPro.Provider>
  );
}

export default Navigator;
