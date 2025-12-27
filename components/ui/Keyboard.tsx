export default function Keyboard() {
    return (
        <div className="flex flex-col gap-1 w-[100vw]">
            {/* first row */}
            <div className="grid grid-cols-12 justify-center gap-1">
                {["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "چ"].map((key) => (
                    <div key={key} className=" h-[58px] bg-[#D3D6DA] rounded-[8px] flex items-center justify-center text-[20px] font-[600] text-[black] cursor-pointer">
                        {key}
                    </div>
                ))}
            </div>

            {/* second row */}
            <div className="grid grid-cols-11 justify-center gap-1">
                {["ش", "س", "ی", "ب", "ل", "ا", "ت", "ن", "م", "ک", "گ"].map((key) => (
                    <div key={key} className=" h-[58px] bg-[#D3D6DA] rounded-[8px] flex items-center justify-center text-[20px] font-[600] text-[black] cursor-pointer">
                        {key}
                    </div>
                ))}
            </div>

            {/* third row */}
            <div className="grid grid-cols-9 justify-center gap-1">
                {["ظ", "ط", "ز", "ر", "ذ", "د", "پ", "و", "ی"].map((key) => (
                    <div key={key} className=" h-[58px] bg-[#D3D6DA] rounded-[8px] flex items-center justify-center text-[20px] font-[600] text-[black] cursor-pointer">
                        {key}
                    </div>
                ))}
            </div>

        </div>
    )
}