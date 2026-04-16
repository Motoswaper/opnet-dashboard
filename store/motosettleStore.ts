"use client";

import { useState, useEffect } from "react";
import data from "../data/motosettle.json";

export function useMotoSettleStore() {
  const [escrows, setEscrows] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("motosettle_escrows");
    if (saved) setEscrows(JSON.parse(saved));
    else setEscrows(data.escrows);
  }, []);

  function addEscrow(escrow: any) {
    const updated = [...escrows, escrow];
    setEscrows(updated);
    localStorage.setItem("motosettle_escrows", JSON.stringify(updated));
  }

  return { escrows, addEscrow };
}
