import { NextResponse } from "next/server";
import { INDEXER_BASE_URL } from "@/lib/config";
import type { Op20Token } from "@/lib/types";

export async function GET() {
  try {
    const res = await fetch(`${INDEXER_BASE_URL}/op20/tokens`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch OP20 tokens" },
        { status: 502 }
      );
    }

    const data = (await res.json()) as Op20Token[];
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Internal error fetching OP20 tokens" },
      { status: 500 }
    );
  }
}
