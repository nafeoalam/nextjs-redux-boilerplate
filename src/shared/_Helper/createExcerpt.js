export const createExcerpt = (content) => {
    let strippedString = content?.replace(/(<([^>]+)>)/gi, "");
    if (strippedString.length > 30) strippedString = strippedString.substring(0, 100);
    return strippedString
}