import data from "../../../../data/motosettle.json";

export default function EscrowDetail({ params }: any) {
  const escrow = data.escrows.find((e) => e.id.toString() === params.id);

  if (!escrow) return <h1>Escrow not found</h1>;

  return (
    <>
      <h1>Escrow #{escrow.id}</h1>
      <p>Buyer: {escrow.buyer}</p>
      <p>Seller: {escrow.seller}</p>
      <p>Amount: {escrow.amount} OP20</p>
      <p>Status: {escrow.status}</p>
    </>
  );
}
