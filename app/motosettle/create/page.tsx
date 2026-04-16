"use client";

import { useState } from "react";
import { FormInput } from "../../../components/ui/FormInput";
import { Button } from "../../../components/ui/Button";

export default function CreateEscrowPage() {
  const [buyer, setBuyer] = useState("");
  const [seller, setSeller] = useState("");
  const [amount, setAmount] = useState("");

  function submit() {
    alert(`Fake escrow created:\nBuyer: ${buyer}\nSeller: ${seller}\nAmount: ${amount} OP20`);
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Create MotoSettle Escrow</h1>

      <FormInput label="Buyer Address" value={buyer} onChange={setBuyer} />
      <FormInput label="Seller Address" value={seller} onChange={setSeller} />
      <FormInput label="Amount (OP20)" value={amount} onChange={setAmount} type="number" />

      <Button onClick={submit}>Create Escrow</Button>
    </>
  );
}
