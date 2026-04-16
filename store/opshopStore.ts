"use client";

import { useState, useEffect } from "react";
import data from "../data/opshop.json";

export function useOPShopStore() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("opshop_listings");
    if (saved) setListings(JSON.parse(saved));
    else setListings(data.listings);
  }, []);

  function addListing(listing: any) {
    const updated = [...listings, listing];
    setListings(updated);
    localStorage.setItem("opshop_listings", JSON.stringify(updated));
  }

  return { listings, addListing };
}
