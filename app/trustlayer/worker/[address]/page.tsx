import data from "../../../../data/trustlayer.json";

export default function WorkerDetail({ params }: any) {
  const worker = data.workers.find((w) => w.address === params.address);

  if (!worker) return <h1>Worker not found</h1>;

  return (
    <>
      <h1>Worker {worker.address}</h1>
      <p>Reputation: {worker.reputation}</p>
      <p>Tags: {worker.tags.join(", ")}</p>
      <p>Slashed: {worker.slashed ? "Yes" : "No"}</p>
    </>
  );
}
