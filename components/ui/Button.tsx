"use client";

export function Button({ children, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="w-full p-2 mt-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition"
    >
      {children}
    </button>
  );
}
