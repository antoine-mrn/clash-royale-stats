export const splitString = (str: string): string => {
    const string = (str.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g) ?? []).join(
        " "
    );
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const sanitizeTag = (tag: string): string => tag.replace("#", "");
