import { useContext } from "react";
import { IntlContext } from "react-intl";
import { Langs } from "../stores/intl/IntlContext";

export const useCurrentLocale = (): Langs => {
  const intl = useContext(IntlContext);
  return (intl.locale.split("-").shift() as Langs) ?? "en";
};
