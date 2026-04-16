export function Badge({ color, children }: { color: string; children: React.ReactNode }) {
  const colors: any = {
    green: "bg-green-600/20 text-green-400 border-green-600/40",
    red: "bg-red-600/20 text-red-400 border-red-600/40",
    blue: "bg-blue-600/20 text-blue-400 border-blue-600/40",
    yellow: "bg-yellow-600/20 text-yellow-400 border-yellow-600/40",
    gray: "bg-gray-600/20 text-gray-400 border-gray-600/40",
  };

  return (
    <span className={`px-2 py-1 text-xs border rounded-md ${colors[color] || colors.gray}`}>
      {children}
    </span>
  );
}
