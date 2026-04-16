"use client";

import { useState } from "react";
import { useOPShopStore } from "../../store/opshopStore";

import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Grid } from "../../components/ui/Grid";
import { SearchBar } from "../../components/ui/SearchBar";

export default function OPSHOPPage() {
  const { listings } = useOPShopStore();   // ✅ FIXED — now inside component
  const [query, setQuery] = useState("");

  const filtered = listings.filter((l) =>
    l.description.toLowerCase().includes(query.toLowerCase()) ||
    l.seller.toLowerCase().includes(query.toLowerCase()) ||
    l.token.toLowerCase().includes(query.toLowerCase()) ||
    l.id.toString().includes(query)
  );

  return (
    <>
      <h1 className="text-2xl font-bold">OPSHOP Marketplace</h1>

      <SearchBar onSearch={setQuery} />

      <a href="/opshop/create" className="text-blue-400 underline">
        + Create Listing
      </a>

      <Grid>
        {filtered.map((l) => (
          <a key={l.id} href={`/opshop/listing/${l.id}`}>
            <Card>
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">Listing #{l.id}</span>
                <Badge color="blue">{l.token}</Badge>
              </div>

              <p className="text-gray-300">{l.description}</p>

              <p className="mt-3 text-sm text-gray-400">
                Seller: {l.seller}
              </p>

              <p className="mt-3 text-sm text-gray-300">
                Price: {l.price} {l.token}
              </p>
            </Card>
          </a>
        ))}
      </Grid>
    </>
  );
}
