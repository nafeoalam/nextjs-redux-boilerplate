
export const removeHtmlTag = (content) => {

    let strippedString = content?.replace(/(<([^>]+)>)/gi, "");

    return strippedString
}