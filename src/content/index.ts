import enStrings from "./en";

import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";

export type Content = typeof enStrings;

export interface LocalisedContent extends LocalizedStringsMethods, Content {
  score: string;
  time: string;
}

export const strings = new LocalizedStrings<Content>({
  en: enStrings,
});

export function parse(str: string, ...val: (string | number)[]): string {
  for (let index = 0; index < val.length; index++) {
    str = str.replace(`{${index}}`, String(val[index]));
  }
  return str;
}

export const getContent = (key: string): string => {
  return strings[key as keyof Content] || key;
};

export const contentOrNull = (key: string): string | null => {
  return strings[key as keyof Content] || null;
};
