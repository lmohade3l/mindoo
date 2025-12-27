"use client"

import ChiVazheGame from "@/components/games/ChiVazheGame";
import GamePreview from "@/components/ui/GamePreview";
import { useState } from "react";

export default function ChiVazhe() {
    const [play, setPlay] = useState(false);
    return (
        <>
            {play ? (
                <ChiVazheGame />
            ) : (
                <GamePreview game="chiVazhe"/>
            )}
        </>
    );
}