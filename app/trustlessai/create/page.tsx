"use client";

import { useState } from "react";
import { FormInput } from "../../../components/ui/FormInput";
import { Button } from "../../../components/ui/Button";

export default function CreateJobPage() {
  const [prompt, setPrompt] = useState("");
  const [payment, setPayment] = useState("");

  function submit() {
    alert(`Fake job created:\nPrompt: ${prompt}\nPayment: ${payment} OP20`);
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Create TrustlessAI Job</h1>

      <FormInput label="Prompt" value={prompt} onChange={setPrompt} />
      <FormInput label="Payment (OP20)" value={payment} onChange={setPayment} type="number" />

      <Button onClick={submit}>Create Job</Button>
    </>
  );
}
