import Link from "next/link";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-brand">OP_NET</div>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/trustlayer">TrustLayer</Link>
        <Link href="/trustlessai">TrustlessAI</Link>
        <Link href="/motosettle">MotoSettle</Link>
        <Link href="/opshop">OPSHOP</Link>
        <Link href="/ecosystem">Ecosystem</Link>
      </div>
    </nav>
  );
};

export default Nav;
