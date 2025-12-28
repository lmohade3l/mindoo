export default function InputBox({ value='ب', onSubmit }: { value?: string; onSubmit?: (value: string) => void }) {
    return (
        <div
            className="w-[62px] h-[62px] p-2 border border-2 border-[#D3D6DA] focus:outline-none focus:cursor-none flex items-center justify-center text-[34px] font-[600] text-[black] bg-[white]"
            style={{
                width: window.innerWidth < 400 ? '50px' : '62px',
                height: window.innerWidth < 400 ? '50px' : '62px',
                fontSize: window.innerWidth < 400 ? '28px' : '34px',
                
            }}
        >
            <p>{value}</p>
        </div>
    );
}