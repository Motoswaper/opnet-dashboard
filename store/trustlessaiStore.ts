"use client";

import { useState, useEffect } from "react";
import data from "../data/trustlessai.json";

export function useTrustlessAIStore() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("trustlessai_jobs");
    if (saved) setJobs(JSON.parse(saved));
    else setJobs(data.jobs);
  }, []);

  function addJob(job: any) {
    const updated = [...jobs, job];
    setJobs(updated);
    localStorage.setItem("trustlessai_jobs", JSON.stringify(updated));
  }

  return { jobs, addJob };
}
