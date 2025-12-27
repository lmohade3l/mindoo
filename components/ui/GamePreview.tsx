'use client';

import { games } from "@/data/constants/games";
import { GameTypes } from "@/data/types/games";
import Image from "next/image";
import LeftChevron from "@/assets/icons/left-chevron.svg"
import ChiVazhe from "@/assets/icons/chi-vazhe.svg"
import { useRouter } from "next/navigation";


export default function GamePreview({ game, setPlay }: { game: GameTypes, setPlay: any }) {
    const router = useRouter();

    return (
        <div
            style={{
                backgroundColor: games[game as GameTypes]?.bgColor
            }} className="w-full h-full flex flex-col justify-between pt-2">
            <div onClick={() => router.back()} className="flex justify-end">
                <Image src={LeftChevron} alt="left" />
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center p-[16px]">
                <Image src={ChiVazhe} alt="chi vazhe " />

                <h1 style={{
                    color: games[game as GameTypes]?.titleColor
                }} className="text-[24px] font-[600]">{games[game as GameTypes]?.title}</h1>
                <p style={{
                    color: games[game as GameTypes]?.descColor
                }} className="text-[16px] mb-[24px] text-center">
                    {games[game as GameTypes]?.description}
                </p>
                <button onClick={() => setPlay((prev: boolean) => !prev)} className="bg-[#121212] text-[white] cursor-pointer h-[48px] w-[155px] rounded-[16px] font-[600] hover:bg-[#e6c500] transition">
                    شروع بازی
                </button>

                <p
                    style={{
                        color: games[game as keyof typeof games]?.titleColor
                    }}
                    className="text-[12px] font-[500] mt-5"
                >
                    {new Date().toLocaleDateString('fa-IR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    })}
                </p>
            </div>

        </div>
    );
}