import { NextResponse } from "next/server";
import { INDEXER_BASE_URL } from "@/lib/config";
import type { Op20Balance } from "@/lib/types";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const address = searchParams.get("address");

  if (!address) {
    return NextResponse.json(
      { error: "Missing address parameter" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(
      `${INDEXER_BASE_URL}/op20/balances?address=${encodeURIComponent(
        address
      )}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch OP20 balances" },
        { status: 502 }
      );
    }

    const data = (await res.json()) as Op20Balance[];
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Internal error fetching OP20 balances" },
      { status: 500 }
    );
  }
}
