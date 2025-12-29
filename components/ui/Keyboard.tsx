import BackSpace from "@/assets/icons/backspace.svg"
import Image from "next/image";

export default function Keyboard({onKeyPress} : {onKeyPress: (key: string) => void}) {
    return (
        <div className="flex flex-col gap-1 w-[100vw]">
            {/* first row */}
            <div className="grid grid-cols-12 justify-center gap-1 px-2">
                {["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "چ"].reverse().map((key) => (
                    <div onClick={() => onKeyPress(key)} style={{
                        height: window?.innerWidth < 390 ? '48px' : '58px'
                    }} key={key} className=" h-[58px] bg-[#D3D6DA] rounded-[8px] flex items-center justify-center text-[20px] font-[600] text-[black] cursor-pointer">
                        {key}
                    </div>
                ))}
            </div>

            {/* second row */}
            <div  className="grid grid-cols-11 justify-center gap-1 px-4">
                {["ش", "س", "ی", "ب", "ل", "ا", "ت", "ن", "م", "ک", "گ"].reverse().map((key) => (
                    <div onClick={() => onKeyPress(key)} style={{
                        height: window?.innerWidth < 390 ? '48px' : '58px'
                    }} key={key} className=" h-[58px] bg-[#D3D6DA] rounded-[8px] flex items-center justify-center text-[20px] font-[600] text-[black] cursor-pointer">
                        {key}
                    </div>
                ))}
            </div>

            {/* third row */}
            <div className="grid grid-cols-11 justify-center gap-1 px-2">
                <div onClick={() => onKeyPress('backspace')} style={{
                    height: window?.innerWidth < 390 ? '48px' : '58px'
                }} className="flex items-center justify-center bg-[#D3D6DA] rounded-[8px] h-[58px] cursor-pointer">
                    <Image src={BackSpace} alt="backspace" className="w-[20px] cursor-pointer" />
                </div>
                {["ظ", "ط", "ز", "ر", "ذ", "د", "پ", "و", "ی"].reverse().map((key) => (
                    <div onClick={() => onKeyPress(key)} style={{
                        height: window?.innerWidth < 390 ? '48px' : '58px'
                    }} key={key} className=" h-[58px] bg-[#D3D6DA] rounded-[8px] flex items-center justify-center text-[20px] font-[600] text-[black] cursor-pointer">
                        {key}
                    </div>
                ))}
                <div
                    onClick={() => onKeyPress('enter')}
                    style={{
                        height: window?.innerWidth < 390 ? '48px' : '58px'
                    }}
                    className="flex items-center justify-center bg-[#D3D6DA] rounded-[8px] h-[58px] cursor-pointer font-[600]">ثبت</div>
            </div>

        </div>
    )
}