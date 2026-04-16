"use client";

export function FormInput({ label, value, onChange, type = "text" }: any) {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm text-gray-300">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 rounded-md bg-[#111] border border-[#222] text-gray-200 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}
