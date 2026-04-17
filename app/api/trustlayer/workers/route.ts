import { NextResponse } from "next/server";
import { INDEXER_BASE_URL } from "@/lib/config";
import type { TrustLayerWorker } from "@/lib/types";

export async function GET() {
  try {
    const res = await fetch(`${INDEXER_BASE_URL}/trustlayer/workers`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch TrustLayer workers" },
        { status: 502 }
      );
    }

    const data = (await res.json()) as TrustLayerWorker[];
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Internal error fetching TrustLayer workers" },
      { status: 500 }
    );
  }
}
