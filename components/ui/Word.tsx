import InputBox from "./InputBox";

export default function Word({ value, onChange }: { value?: string; onChange?: (value: string) => void }) {
    return (
                    <div className="grid grid-cols-5 gap-[6px]">
                        {[...Array(5)].map((_, index) => (
                            <InputBox />
                        ))}
                    </div>
    );
}