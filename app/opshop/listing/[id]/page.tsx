import data from "../../../../data/opshop.json";

export default function ListingDetail({ params }: any) {
  const listing = data.listings.find((l) => l.id.toString() === params.id);

  if (!listing) return <h1>Listing not found</h1>;

  return (
    <>
      <h1>Listing #{listing.id}</h1>
      <p>Description: {listing.description}</p>
      <p>Seller: {listing.seller}</p>
      <p>Price: {listing.price} {listing.token}</p>
    </>
  );
}
