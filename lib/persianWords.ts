// lib/persianWords.ts
import rawWords from "an-array-of-persian-words";
import normalization from "./normalization";

export const fiveLetterWords = new Set(
        rawWords
            .map(normalization)
            .filter(w => w.length === 5)
    )
