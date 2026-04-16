"use client";

import { useState } from "react";
import { useMotoSettleStore } from "../../store/motosettleStore";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Grid } from "../../components/ui/Grid";
import { SearchBar } from "../../components/ui/SearchBar";

export default function MotoSettlePage() {
  const { escrows } = useMotoSettleStore();   // ✅ FIXED — now inside component
  const [query, setQuery] = useState("");

  const filtered = escrows.filter((e) =>
    e.id.toString().includes(query) ||
    e.buyer.toLowerCase().includes(query.toLowerCase()) ||
    e.seller.toLowerCase().includes(query.toLowerCase()) ||
    e.status.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <h1 className="text-2xl font-bold">MotoSettle Escrows</h1>

      <SearchBar onSearch={setQuery} />

      <a href="/motosettle/create" className="text-blue-400 underline">
        + Create Escrow
      </a>

      <Grid>
        {filtered.map((e) => (
          <a key={e.id} href={`/motosettle/escrow/${e.id}`}>
            <Card>
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">Escrow #{e.id}</span>
                <Badge color={e.status === "dispute" ? "red" : "green"}>
                  {e.status.toUpperCase()}
                </Badge>
              </div>

              <p className="text-sm text-gray-400">
                Buyer: {e.buyer} — Seller: {e.seller}
              </p>

              <p className="mt-3 text-sm text-gray-300">
                Amount: {e.amount} OP20
              </p>
            </Card>
          </a>
        ))}
      </Grid>
    </>
  );
}
