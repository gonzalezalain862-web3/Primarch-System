"use client";
import { useState } from "react";
import { TransactionButton } from "thirdweb/react";
import { prepareContractCall } from "thirdweb";
import { client } from "@/lib/client";
import { getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;
const contract = getContract({
  client,
  chain: sepolia,
  address: contractAddress,
});

export default function RegistroPage() {
  const [tokenAddress, setTokenAddress] = useState("");
  const [supply, setSupply] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Registrar Nueva Memecoin</h2>
      <div className="space-y-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Dirección del token ERC20 (0x...)"
          value={tokenAddress}
          onChange={(e) => setTokenAddress(e.target.value)}
          className="w-full p-3 rounded bg-black/30 border border-white/20 text-white"
        />
        <input
          type="number"
          placeholder="Supply (en wei)"
          value={supply}
          onChange={(e) => setSupply(e.target.value)}
          className="w-full p-3 rounded bg-black/30 border border-white/20 text-white"
        />
        <input
          type="number"
          placeholder="Precio por token (en wei)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-3 rounded bg-black/30 border border-white/20 text-white"
        />
        <TransactionButton
          transaction={() =>
            prepareContractCall({
              contract,
              method: "createLaunch",
              params: [tokenAddress, BigInt(supply), BigInt(price)],
            })
          }
          onTransactionConfirmed={() => alert("✅ Memecoin registrada exitosamente")}
          onError={(error) => alert(`❌ Error: ${error.message}`)}
          className="btn-primary w-full"
        >
          Registrar
        </TransactionButton>
      </div>
    </div>
  );
}
