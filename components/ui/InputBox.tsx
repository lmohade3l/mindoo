export default function InputBox({ value='ب', onSubmit }: { value?: string; onSubmit?: (value: string) => void }) {
    return (
        <div
            className="w-[62px] h-[62px] p-2 border border-2 border-[#D3D6DA] focus:outline-none focus:cursor-none flex items-center justify-center text-[34px] font-[600] text-[black] bg-[white]"
        >
            <p>{value}</p>
        </div>
    );
}