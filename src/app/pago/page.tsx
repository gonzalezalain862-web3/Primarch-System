"use client";
import { useState } from "react";
import { ConnectButton, TransactionButton } from "thirdweb/react";
import { prepareContractCall, toWei } from "thirdweb";
import { client } from "@/lib/client";
import { getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;
const contract = getContract({ client, chain: sepolia, address: contractAddress });

export default function Pago() {
  const [launchId, setLaunchId] = useState("");
  const [amountEth, setAmountEth] = useState("");
  return (
    <div className="glass-card">
      <h2>Forma de Pago</h2>
      <div style={{ marginBottom: '1rem' }}><ConnectButton client={client} /></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
        <input type="number" placeholder="ID de la venta (Launch ID)" value={launchId} onChange={e => setLaunchId(e.target.value)} />
        <input type="number" step="any" placeholder="Cantidad en ETH" value={amountEth} onChange={e => setAmountEth(e.target.value)} />
        <TransactionButton
          transaction={() => prepareContractCall({ contract, method: "buyTokens", params: [BigInt(launchId)], value: toWei(amountEth) })}
          onTransactionConfirmed={() => alert("Compra exitosa")}
          onError={(err) => alert(`Error: ${err.message}`)}
          className="btn-primary"
        >
          Pagar
        </TransactionButton>
      </div>
    </div>
  );
}
