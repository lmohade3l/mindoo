"use client";

import Image from "next/image";
import LeftChevron from "@/assets/icons/left-chevron.svg"
import { useRouter } from "next/navigation";
import Word from "../ui/Word";
import Keyboard from "../ui/Keyboard";
import { useState } from "react";
import { StatusTypes } from "@/data/types/chi-vazhe";

export default function ChiVazheGame() {
    const router = useRouter();
    const [guessNumber, setGuessNumber] = useState(0);
    const [guesses, setGuesses] = useState(() => {
        const initialGuesses: Record<number, { status: StatusTypes; value: string }[]> = {};
        for (let i = 0; i < 6; i++) {
            initialGuesses[i] = Array(5).fill({ status: 'empty', value: '' });
        }
        return initialGuesses;
    });

    const handleKeyPress = (key: string) => {
        // submit
        if (key === 'enter') { }

        // backspace
        else if (key === 'backspace') {
            let newGuesses = { ...guesses };
            let emptyIndex = newGuesses[guessNumber].findIndex(letter => letter.status === 'empty');
            if (emptyIndex === -1) emptyIndex = 5;
            newGuesses[guessNumber][emptyIndex - 1] = { status: 'empty', value: '' };
            setGuesses(newGuesses);
        }

        // add letter
        else {
            let newGuesses = { ...guesses };
            let emptyIndex = newGuesses[guessNumber].findIndex(letter => letter.status === 'empty');
            newGuesses[guessNumber][emptyIndex] = { status: 'filled', value: key };
            setGuesses(newGuesses);
        }
    }

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
                    }} className="h-[48px]"></div>

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