export default function normalization(word: string) {
    return word
        .replace(/ي/g, "ی")
        .replace(/ك/g, "ک")
        .replace(/\u200c/g, "") // half-space
        .trim();
}