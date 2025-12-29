import { StatusTypes } from "@/data/types/chi-vazhe";
import InputBox from "./InputBox";

export default function Word({ value }: { value: { status: StatusTypes; value: string }[]; }) {
    return (
        <div className="grid grid-cols-5 gap-[6px]">
            {[...Array(5)].map((_, index) => (
                <InputBox 
                    key={index} 
                    value={value ? value[index].value : ""} 
                    status={value ? value[index].status : "empty"}
                    delay={index * 0.3}
                />
            ))}
        </div>
    );
}