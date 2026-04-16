import data from "../../../../data/trustlessai.json";

export default function JobDetail({ params }: any) {
  const job = data.jobs.find((j) => j.id.toString() === params.id);

  if (!job) return <h1>Job not found</h1>;

  return (
    <>
      <h1>Job #{job.id}</h1>
      <p>Prompt: {job.prompt}</p>
      <p>Status: {job.status}</p>
      <p>Worker: {job.worker || "None"}</p>
      <p>Payment: {job.payment} OP20</p>
    </>
  );
}
