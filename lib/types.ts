export type Op20Token = {
  id: string;
  symbol: string;
  name: string;
  totalSupply: string;
  holders: number;
};

export type Op20Balance = {
  address: string;
  tokenId: string;
  balance: string;
};

export type OpshopListing = {
  id: string;
  seller: string;
  tokenId: string;
  price: string;
  status: "active" | "sold" | "cancelled";
};

export type TrustLayerWorker = {
  id: string;
  address: string;
  role: string;
  reputation: number;
  active: boolean;
};

export type MotoSettleEscrow = {
  id: string;
  buyer: string;
  seller: string;
  amount: string;
  status: "open" | "released" | "disputed" | "resolved";
};

export type TrustlessAiJob = {
  id: string;
  requester: string;
  worker: string | null;
  status: "pending" | "assigned" | "completed" | "failed";
  createdAt: string;
};
