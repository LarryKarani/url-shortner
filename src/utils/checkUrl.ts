export const isValidHttpUrl = (input: string): boolean => {
    let url
    try {
        url = new URL(input);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}