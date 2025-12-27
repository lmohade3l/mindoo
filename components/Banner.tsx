import { games } from "@/data/games";
import Image from "next/image";

export default function Banner({ game }: { game: 'chiVazhe' }) {
    return (
        <div className="rounded-[16px] p-[16px] flex flex-col gap-4 cursor-pointer" style={{
            backgroundColor: games[game as keyof typeof games]?.bgColor
        }}>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <p
                        className="text-[18px] font-[600]"
                        style={{
                            color: games[game as keyof typeof games]?.titleColor
                        }}
                    >
                        {games[game as keyof typeof games]?.title}
                    </p>
                    <p className="text-[12px]"
                        style={{
                            color: games[game as keyof typeof games]?.descColor
                        }}
                    >
                        {games[game as keyof typeof games]?.description}
                    </p>
                </div>

                <Image src={games[game as keyof typeof games]?.icon} alt={games[game as keyof typeof games]?.title} />
            </div>
            <p
                style={{
                    color: games[game as keyof typeof games]?.titleColor
                }}
                className="text-[12px] font-[500]"
            >
                {new Date().toLocaleDateString('fa-IR', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long'
                })}
            </p>
        </div>
    )
}