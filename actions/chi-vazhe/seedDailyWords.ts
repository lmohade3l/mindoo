// scripts/seedDailyWords.ts
import fs from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";
import normalization  from "../../lib/normalization";
import shuffle from '../../lib/shuffle'

const supabase = createClient(
    'https://rnrrejjhwkahyxxmkmoo.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJucnJlampod2thaHl4eG1rbW9vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NzE2MTk3MCwiZXhwIjoyMDgyNzM3OTcwfQ.e_CbLto8ArscK235RMdIQ7Mv2nBNPhCACyaazY92B0g'
);

// ✅ manually load JSON (Node-safe)
const wordsPath = path.join(
    process.cwd(),
    "node_modules/an-array-of-persian-words/words.json"
);

const rawWords: string[] = JSON.parse(
    fs.readFileSync(wordsPath, "utf-8")
);

const fiveLetterWords = shuffle(
    Array.from(
        new Set(
            rawWords
                .map(normalization)
                .filter(w => w.length === 5)
        )
    )
);

const START_DATE = new Date("2026-01-01");
const DAYS = 365 * 5;

async function seed() {
    const { data } = await supabase
        .from("app_meta")
        .select("value")
        .eq("key", "daily_words_seeded")
        .single();

    if (data?.value === "true") {
        console.log("⛔ Already seeded");
        return;
    }

    for (let i = 0; i < DAYS; i++) {
        const date = new Date(START_DATE);
        date.setDate(date.getDate() + i);

        console.log("Inserting index", i);

        const error = await supabase.from("daily_words").upsert(
            {
                date: date.toISOString().split("T")[0],
                word: fiveLetterWords[i]
            },
            { onConflict: "date" }
        );

        console.log('hey', error);
    }

    await supabase.from("app_meta").upsert({
        key: "daily_words_seeded",
        value: "true"
    });

    console.log("✅ Seeding complete");
}

seed();
