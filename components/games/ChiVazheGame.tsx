import Image from "next/image";
import LeftChevron from "@/assets/icons/left-chevron.svg"
import { useRouter } from "next/navigation";

export default function ChiVazheGame() {
    const router = useRouter();

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
                    <div className="h-[48px]"></div>

                    {/* grid */}
                    <div className="grid grid-cols-5 grid-rows-5 gap-[6px]">

                    </div>
                </div>

                {/* keyboard */}
                <div></div>
            </div>
        </div>
    );
}