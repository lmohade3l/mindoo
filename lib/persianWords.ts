// lib/persianWords.ts
import rawWords from "an-array-of-persian-words";
import normalization from "@/lib/normalization";

export const fiveLetterWords = Array.from(
    new Set(
        rawWords
            .map(normalization)
            .filter(w => w.length === 5)
    )
);