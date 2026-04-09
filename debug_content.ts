import { getEntry } from "astro:content";

async function debug() {
  const entry = await getEntry("pages", "pricing");
  if (entry) {
    console.log("Data keys:", Object.keys(entry.data));
    console.log("Pricing data:", JSON.stringify(entry.data.pricing, null, 2));
  } else {
    console.log("Entry not found");
  }
}

debug();
