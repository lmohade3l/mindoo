import { StatusTypes } from "@/data/types/chi-vazhe";
import { useEffect, useState } from "react";

export default function InputBox({ value='', status='empty', delay=0 }: { value?: string; status?: StatusTypes; delay?: number; }) {
    const [displayStatus, setDisplayStatus] = useState(status);

    useEffect(() => {
        if (status === 'correct' || status === 'misplaced' || status === 'incorrect') {
            // Delay background change until halfway through flip animation
            const timeout = setTimeout(() => {
                setDisplayStatus(status);
            }, delay * 1000 + 300); // delay + half of flip duration (0.6s / 2 = 0.3s)
            
            return () => clearTimeout(timeout);
        } else {
            setDisplayStatus(status);
        }
    }, [status, delay]);

    return (
        <div
            className="w-[62px] h-[62px] p-2 focus:outline-none focus:cursor-none flex items-center justify-center text-[34px] font-[600] text-[black] bg-[white]"
            style={{
                width: window.innerWidth < 390 ? '50px' : '62px',
                height: window.innerWidth < 390 ? '50px' : '62px',
                fontSize: window.innerWidth < 390 ? '28px' : '34px',
                border : displayStatus === 'empty' ? '2px solid #D3D6DA' :
                         displayStatus === 'filled' ? '2px solid #878A8C' :
                         displayStatus === 'correct' ? '2px solid #6AAA64' : 'none',
                backgroundColor : displayStatus === 'correct' ? '#6AAA63' :
                                  displayStatus === 'misplaced' ? '#C9B458' :
                                  displayStatus === 'incorrect' ? '#787C7E' : 'white',
                color : displayStatus === 'filled' || displayStatus === 'empty' ? 'black' : 'white',
                transition: 'border 0.1s ease',
                animation: value && status === 'filled' ? 'jump 0.2s ease' : 
                          (status === 'correct' || status === 'misplaced' || status === 'incorrect') ? `flip 0.6s ease ${delay}s` : 'none',
            }}
        >
            <p>{value}</p>
            <style>{`
                @keyframes jump {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                }
                @keyframes flip {
                    0% { transform: rotateX(0deg); }
                    50% { transform: rotateX(90deg); }
                    100% { transform: rotateX(0deg); }
                }
            `}</style>
        </div>
    );
}