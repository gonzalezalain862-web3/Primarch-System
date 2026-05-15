"use client";
import { useState } from "react";
import { ConnectButton, TransactionButton } from "thirdweb/react";
import { prepareContractCall, toWei } from "thirdweb";
import { client } from "@/lib/client";
import { getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;
const contract = getContract({
  client,
  chain: sepolia,
  address: contractAddress,
});

export default function PagoPage() {
  const [launchId, setLaunchId] = useState("");
  const [amountEth, setAmountEth] = useState("");

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-center">Forma de Pago</h2>
      <div className="flex justify-center">
        <ConnectButton client={client} />
      </div>
      <div className="space-y-4 max-w-md mx-auto">
        <input
          type="number"
          placeholder="ID de la venta (Launch ID)"
          value={launchId}
          onChange={(e) => setLaunchId(e.target.value)}
          className="w-full p-3 rounded bg-black/30 border border-white/20 text-white"
        />
        <input
          type="number"
          step="any"
          placeholder="Cantidad en ETH"
          value={amountEth}
          onChange={(e) => setAmountEth(e.target.value)}
          className="w-full p-3 rounded bg-black/30 border border-white/20 text-white"
        />
        <TransactionButton
          transaction={() =>
            prepareContractCall({
              contract,
              method: "buyTokens",
              params: [BigInt(launchId)],
              value: toWei(amountEth),
            })
          }
          onTransactionConfirmed={() => alert("✅ Compra exitosa")}
          onError={(error) => alert(`❌ Error: ${error.message}`)}
          className="btn-primary w-full"
        >
          Pagar
        </TransactionButton>
      </div>
    </div>
  );
}
