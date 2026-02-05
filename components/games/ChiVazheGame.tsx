"use client";

import Image from "next/image";
import LeftChevron from "@/assets/icons/left-chevron.svg"
import { useRouter } from "next/navigation";
import Word from "../ui/Word";
import Keyboard from "../ui/Keyboard";
import { useState } from "react";
import { StatusTypes } from "@/data/types/chi-vazhe";
import { isValidWord } from "@/lib/isValidWord";

export default function ChiVazheGame() {
    const router = useRouter();
    const [guessNumber, setGuessNumber] = useState(0);
    const [message, setMessage] = useState("");
    const [guesses, setGuesses] = useState(() => {
        const initialGuesses: Record<number, { status: StatusTypes; value: string }[]> = {};
        for (let i = 0; i < 6; i++) {
            initialGuesses[i] = Array(5).fill({ status: 'empty', value: '' });
        }
        return initialGuesses;
    });

    const TARGET = 'کتابت'

    const handleKeyPress = async (key: string) => {
        // submit
        if (key === 'enter') {
            const enteredWord = guesses[guessNumber]?.map(l => l?.value)?.join("")

            const isValid = await isValidWord(enteredWord)
            if (isValid) {
                const updatesGuesses = { ...guesses };
                for (let i = 0; i < 5; i++) {
                    const enteredLetter = updatesGuesses[guessNumber][i].value;
                    if (enteredLetter === TARGET[i]) {
                        updatesGuesses[guessNumber][i].status = 'correct';
                    } else if (TARGET.includes(enteredLetter)) {
                        updatesGuesses[guessNumber][i].status = 'misplaced';
                    } else {
                        updatesGuesses[guessNumber][i].status = 'incorrect';
                    }
                }
                setGuesses(updatesGuesses);
                setGuessNumber(guessNumber + 1);
                return;
            } else {
                setMessage("کلمه نامعتبر است!");
                return;
            }
        }

        // backspace
        else if (key === 'backspace') {
            setMessage('')
            const newGuesses = { ...guesses };
            let emptyIndex = newGuesses[guessNumber].findIndex(letter => letter.status === 'empty');
            if (emptyIndex === -1) emptyIndex = 5;
            newGuesses[guessNumber][emptyIndex - 1] = { status: 'empty', value: '' };
            setGuesses(newGuesses);
            return;
        }

        // add letter
        else {
            console.log(key)
            const newGuesses = { ...guesses };
            const emptyIndex = newGuesses[guessNumber].findIndex(letter => letter.status === 'empty');
            if (emptyIndex !== -1) setMessage('')
            newGuesses[guessNumber][emptyIndex] = { status: 'filled', value: key };
            setGuesses(newGuesses);
            return;
        }
    }

    console.log(guesses)

    return (
        <div className="w-full min-h-screen flex flex-col bg-[white] text-[black]">
            <div className="w-full h-[48px] border-b border-[#DFDFDF]">
                <div onClick={() => router.back()} className="flex justify-end">
                    <Image src={LeftChevron} alt="left" />
                </div>
            </div>

            <div className="w-full h-[calc(100vh-48px)] flex flex-col items-center justify-between p-[16px]">
                <div className="w-full flex flex-col items-center gap-[10px]">
                    {/* message */}
                    <div style={{
                        height: window?.innerWidth < 400 ? '30px' : '48px'
                    }} className="h-[48px] bg-[black] flex justifuy-center items-center">
                        <p className="text-[white] text-[14px]">{message}</p>
                    </div>

                    {/* grid */}
                    <div className="flex flex-col gap-2">
                        {[...Array(6)].map((_, index) => (
                            <Word key={index} value={guesses[index]} />
                        ))}
                    </div>
                </div>

                {/* keyboard */}
                <Keyboard onKeyPress={handleKeyPress} />
            </div>
        </div>
    );
}