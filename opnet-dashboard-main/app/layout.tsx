import "./../styles/globals.css";
import type { ReactNode } from "react";
import Nav from "../components/Nav";

export const metadata = {
  title: "OP_NET Dashboard",
  description: "Unified dashboard for the OP_NET protocol stack"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
