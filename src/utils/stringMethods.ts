export const splitString = (str: string): string =>
    (str.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g) ?? []).join(" ");

export const sanitizeTag = (tag: string): string => tag.replace("#", "");
