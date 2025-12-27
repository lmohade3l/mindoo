import { APP_NAME } from "@/data/constants";
import Image from "next/image";
import MindooLogo from "@/assets/icons/mindoo-logo.png"

export default function Header() {
    return (
        <header className="w-full h-[48px] flex items-center justify-center border-b border-[#DFDFDF] gap-2">
            <Image src={MindooLogo} alt="Mindoo Logo" width={32} height={32}/>
            <p className="text-[black] text-[24px] font-[500]">{APP_NAME}</p>
        </header>
    );
}