import { createContext, useState } from "react";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("English");
  return (
    <>
      <LangProvider value={lang}>{children}</LangProvider>;
    </>
  );
};
