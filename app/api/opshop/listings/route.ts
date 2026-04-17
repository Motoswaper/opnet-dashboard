import { NextResponse } from "next/server";
import { INDEXER_BASE_URL } from "@/lib/config";
import type { OpshopListing } from "@/lib/types";

export async function GET() {
  try {
    const res = await fetch(`${INDEXER_BASE_URL}/opshop/listings`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch OPSHOP listings" },
        { status: 502 }
      );
    }

    const data = (await res.json()) as OpshopListing[];
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Internal error fetching OPSHOP listings" },
      { status: 500 }
    );
  }
}
