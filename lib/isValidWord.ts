'use server';

import { fiveLetterWords } from "./persianWords";
import  normalization  from "./normalization";

export async function isValidWord(input: string) {
    const word = normalization(input);

    if (word.length !== 5) return false;
    return fiveLetterWords.has(word);
}
