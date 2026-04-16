export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#111] border border-[#222] rounded-xl p-5 shadow-sm hover:border-[#333] transition">
      {children}
    </div>
  );
}
