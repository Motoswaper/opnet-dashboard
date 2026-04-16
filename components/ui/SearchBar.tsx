"use client";

import { useState } from "react";

export function SearchBar({ onSearch }: { onSearch: (value: string) => void }) {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        onSearch(e.target.value);
      }}
      className="w-full p-2 mb-4 rounded-md bg-[#111] border border-[#222] text-gray-200 focus:outline-none focus:border-blue-500"
    />
  );
}
