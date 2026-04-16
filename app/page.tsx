import Card from "../components/Card";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>OP_NET Dashboard</h1>
      <p>Unified view of the OP_NET protocol stack.</p>

      <div className="grid">
        <Card title="TrustLayer">
          <p>Reputation, trust tags, and slashing.</p>
          <Link href="/trustlayer">Open TrustLayer Explorer →</Link>
        </Card>

        <Card title="TrustlessAI">
          <p>AI job protocol with trust‑aware workers.</p>
          <Link href="/trustlessai">Open TrustlessAI Explorer →</Link>
        </Card>

        <Card title="MotoSettle">
          <p>Escrow, disputes, and arbitration.</p>
          <Link href="/motosettle">Open MotoSettle Explorer →</Link>
        </Card>

        <Card title="OPSHOP">
          <p>Marketplace built on OP20 + MotoSettle + TrustLayer.</p>
          <Link href="/opshop">Open OPSHOP Marketplace →</Link>
        </Card>

        <Card title="Ecosystem">
          <p>Architecture, links, and documentation.</p>
          <Link href="/ecosystem">View Ecosystem Overview →</Link>
        </Card>
      </div>
    </>
  );
}
