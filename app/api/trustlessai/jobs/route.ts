import { NextResponse } from "next/server";
import { INDEXER_BASE_URL } from "@/lib/config";
import type { TrustlessAiJob } from "@/lib/types";

export async function GET() {
  try {
    const res = await fetch(`${INDEXER_BASE_URL}/trustlessai/jobs`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch TrustlessAI jobs" },
        { status: 502 }
      );
    }

    const data = (await res.json()) as TrustlessAiJob[];
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Internal error fetching TrustlessAI jobs" },
      { status: 500 }
    );
  }
}
