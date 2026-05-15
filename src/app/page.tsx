"use client";
import { ConnectButton } from "thirdweb/react";
import { client } from "@/lib/client";
import { getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { useReadContract } from "thirdweb/react";

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;
const contract = getContract({
  client,
  chain: sepolia,
  address: contractAddress,
});

export default function Home() {
  const { data: feePercent, isLoading: feeLoading } = useReadContract({
    contract,
    method: "feePercent",
  });
  const { data: totalRaised, isLoading: totalLoading } = useReadContract({
    contract,
    method: "totalRaised",
  });

  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <ConnectButton client={client} />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        MULTI-CHANNEL ACCURACY
      </h1>
      <p className="text-gray-300 text-lg">
        Unified tracking for Google and TikTok leads. Zero data entry errors.
      </p>
      <div className="pt-4 text-sm text-gray-400">
        {!feeLoading && feePercent !== undefined && <p>Comisión actual: {feePercent.toString()}%</p>}
        {!totalLoading && totalRaised !== undefined && <p>Total recaudado: {totalRaised.toString()} Wei</p>}
      </div>
    </div>
  );
}
