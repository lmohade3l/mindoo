import { StatusTypes } from "@/data/types/chi-vazhe";

export default function InputBox({ value='', status='empty' }: { value?: string; status?: StatusTypes; }) {
    return (
        <div
            className="w-[62px] h-[62px] p-2 focus:outline-none focus:cursor-none flex items-center justify-center text-[34px] font-[600] text-[black] bg-[white]"
            style={{
                width: window.innerWidth < 390 ? '50px' : '62px',
                height: window.innerWidth < 390 ? '50px' : '62px',
                fontSize: window.innerWidth < 390 ? '28px' : '34px',
                border : status === 'empty' ? '2px solid #D3D6DA' :
                         status === 'filled' ? '2px solid #878A8C' :
                         status === 'correct' ? '2px solid #6AAA64' : 'none',
                backgroundColor : status === 'correct' ? '#6AAA63' :
                                  status === 'misplaced' ? '#C9B458' :
                                  status === 'incorrect' ? '#787C7E' : 'white',
                color : status === 'filled' || status === 'empty' ? 'black' : 'white',
                transition: 'border 0.1s ease, background-color 0.3s ease',
                animation: value && status === 'filled' ? 'jump 0.2s ease' : 'none',
            }}
        >
            <p>{value}</p>
            <style>{`
                @keyframes jump {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                }
            `}</style>
        </div>
    );
}