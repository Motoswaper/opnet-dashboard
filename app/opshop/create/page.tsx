"use client";

import { useState } from "react";
import { FormInput } from "../../../components/ui/FormInput";
import { Button } from "../../../components/ui/Button";

export default function CreateListingPage() {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [token, setToken] = useState("OP20");

  function submit() {
    alert(`Fake listing created:\n${description}\nPrice: ${price} ${token}`);
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Create OPSHOP Listing</h1>

      <FormInput label="Description" value={description} onChange={setDescription} />
      <FormInput label="Price" value={price} onChange={setPrice} type="number" />
      <FormInput label="Token" value={token} onChange={setToken} />

      <Button onClick={submit}>Create Listing</Button>
    </>
  );
}
