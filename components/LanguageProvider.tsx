"use client";

import React, { createContext, useContext } from "react";

type Dictionary = Record<string, any>;

interface LanguageContextProps {
  dictionary: Dictionary;
  lang: string;
}

const LanguageContext = createContext<LanguageContextProps>({
  dictionary: {},
  lang: "en",
});

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context.dictionary;
};

export const useLang = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return context.lang;
};

interface LanguageProviderProps {
  children: React.ReactNode;
  dictionary: Dictionary;
  lang: string;
}

export const LanguageProvider = ({ children, dictionary, lang }: LanguageProviderProps) => {
  return (
    <LanguageContext.Provider value={{ dictionary, lang }}>
      {children}
    </LanguageContext.Provider>
  );
};
