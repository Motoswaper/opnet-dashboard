"use client";

import { useState } from "react";
import { useTrustLayerStore } from "../../store/trustlayerStore";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Grid } from "../../components/ui/Grid";
import { SearchBar } from "../../components/ui/SearchBar";

export default function TrustLayerPage() {
  const { workers } = useTrustLayerStore();   // ✅ THIS GOES HERE
  const [query, setQuery] = useState("");

  const filtered = workers.filter((w) =>
    w.address.toLowerCase().includes(query.toLowerCase()) ||
    w.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <>
      <h1 className="text-2xl font-bold">TrustLayer Explorer</h1>

      <SearchBar onSearch={setQuery} />

      <Grid>
        {filtered.map((w) => (
          <a key={w.address} href={`/trustlayer/worker/${w.address}`}>
            <Card>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono">{w.address}</span>
                <Badge color={w.slashed ? "red" : "green"}>
                  {w.slashed ? "SLASHED" : "ACTIVE"}
                </Badge>
              </div>

              <p className="text-sm text-gray-400">
                Reputation: {w.reputation}
              </p>

              <div className="flex gap-2 mt-3">
                {w.tags.map((tag) => (
                  <Badge key={tag} color="blue">{tag}</Badge>
                ))}
              </div>
            </Card>
          </a>
        ))}
      </Grid>
    </>
  );
}
