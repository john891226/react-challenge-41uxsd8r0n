import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import English from "../../intl/en.json";
import Spanish from "../../intl/es.json";

export const IntlContext = React.createContext({
  locale: "en",
  selectLanguage: (e: string) => {
    console.log(e);
  },
});

let local = "en";
if (typeof navigator != "undefined" && navigator.language) {
  local = navigator.language;
}

let lang: Record<string, any>;

if (local.startsWith("en")) {
  lang = English;
} else {
  lang = Spanish;
}

const IntlWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);
  function selectLanguage(e: string) {
    setLocale(e);
    if (e === "en") {
      setMessages(English);
    } else {
      setMessages(Spanish);
    }
  }
  return (
    <IntlContext.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {children}
      </IntlProvider>
    </IntlContext.Provider>
  );
};
export default IntlWrapper;

export enum Langs {
  es = "es",
  en = "en",
}

export type IntlLabel<T = string> = Record<Langs, T>;

type Lang = {
  id: Langs;
  labels: IntlLabel;
};

export const LangsList: Lang[] = [
  {
    id: Langs.en,
    labels: {
      es: "Inglés",
      en: "English",
    },
  },
  {
    id: Langs.es,
    labels: {
      es: "Español",
      en: "Spanish",
    },
  },
];
