'use client';

import { useEffect, useState } from "react";

interface PageLoadingProps {
    children: React.ReactNode;
    duration?: number;
    backgroundColor?: string;
}

export const PageLoading = ({
    children,
    duration = 1000,
    backgroundColor
}: PageLoadingProps) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, duration);
        return () => clearTimeout(timer);
    }, [duration]);

    return (
        <>
            {loading ? (
                <div style={{ backgroundColor: backgroundColor ?? 'red' }} className={`min-h-screen flex items-center justify-center`}>
                    <div className="flex flex-col gap-3">
                        <div>
                            <p className="text-[black] text-[32px] font-[500]">مایندو</p>
                        </div>
                    </div>
                </div>
            ) :
                children
            }
        </>
    );
}