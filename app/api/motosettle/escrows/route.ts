import { NextResponse } from "next/server";
import { INDEXER_BASE_URL } from "@/lib/config";
import type { MotoSettleEscrow } from "@/lib/types";

export async function GET() {
  try {
    const res = await fetch(`${INDEXER_BASE_URL}/motosettle/escrows`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch MotoSettle escrows" },
        { status: 502 }
      );
    }

    const data = (await res.json()) as MotoSettleEscrow[];
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Internal error fetching MotoSettle escrows" },
      { status: 500 }
    );
  }
}
