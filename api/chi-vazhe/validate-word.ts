import { NextResponse } from "next/server";
import { isValidWord } from "@/lib/isValidWord";

export async function POST(req: Request) {
    const { word } = await req.json();

    return NextResponse.json({
        valid: isValidWord(word),
    });
}