"use client";

import { useState } from "react";
import { useTrustlessAIStore } from "../../store/trustlessaiStore";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Grid } from "../../components/ui/Grid";
import { SearchBar } from "../../components/ui/SearchBar";

export default function TrustlessAIPage() {
  const { jobs } = useTrustlessAIStore();   // ✅ THIS GOES HERE
  const [query, setQuery] = useState("");

  const filtered = jobs.filter((job) =>
    job.prompt.toLowerCase().includes(query.toLowerCase()) ||
    job.status.toLowerCase().includes(query.toLowerCase()) ||
    job.id.toString().includes(query)
  );

  return (
    <>
      <h1 className="text-2xl font-bold">TrustlessAI Jobs</h1>

      <SearchBar onSearch={setQuery} />

      <a href="/trustlessai/create" className="text-blue-400 underline">
        + Create Job
      </a>

      <Grid>
        {filtered.map((job) => (
          <a key={job.id} href={`/trustlessai/job/${job.id}`}>
            <Card>
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold">Job #{job.id}</span>
                <Badge color={job.status === "completed" ? "green" : "yellow"}>
                  {job.status.toUpperCase()}
                </Badge>
              </div>

              <p className="text-gray-300">{job.prompt}</p>

              <p className="mt-3 text-sm text-gray-400">
                Payment: {job.payment} OP20
              </p>
            </Card>
          </a>
        ))}
      </Grid>
    </>
  );
}
