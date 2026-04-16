"use client";

import { useState, useEffect } from "react";
import data from "../data/trustlayer.json";

export function useTrustLayerStore() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("trustlayer_workers");
    if (saved) setWorkers(JSON.parse(saved));
    else setWorkers(data.workers);
  }, []);

  function addWorker(worker: any) {
    const updated = [...workers, worker];
    setWorkers(updated);
    localStorage.setItem("trustlayer_workers", JSON.stringify(updated));
  }

  return { workers, addWorker };
}
