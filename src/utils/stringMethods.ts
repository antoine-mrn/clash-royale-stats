const TAG_CHARS = "0289PYLQGRJCUV";
const TAG_REGEX = new RegExp(`^[${TAG_CHARS}]{3,14}$`, "i");

export const splitString = (str: string): string => {
    const string = (str.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g) ?? []).join(
        " "
    );
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const sanitizeTag = (tag: string): string =>
    tag.replace(/^#/, "").toUpperCase();

export const isValidTag = (tag: string): boolean => TAG_REGEX.test(tag);
