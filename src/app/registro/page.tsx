"use client";
import { useState } from "react";
import { TransactionButton } from "thirdweb/react";
import { prepareContractCall } from "thirdweb";
import { client } from "@/lib/client";
import { getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!;
const contract = getContract({ client, chain: sepolia, address: contractAddress });

export default function Registro() {
  const [token, setToken] = useState("");
  const [supply, setSupply] = useState("");
  const [price, setPrice] = useState("");
  return (
    <div className="glass-card">
      <h2>Registrar Nueva Memecoin</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
        <input type="text" placeholder="Dirección del token (0x...)" value={token} onChange={e => setToken(e.target.value)} />
        <input type="number" placeholder="Supply (en wei)" value={supply} onChange={e => setSupply(e.target.value)} />
        <input type="number" placeholder="Precio por token (wei)" value={price} onChange={e => setPrice(e.target.value)} />
        <TransactionButton
          transaction={() => prepareContractCall({ contract, method: "createLaunch", params: [token, BigInt(supply), BigInt(price)] })}
          onTransactionConfirmed={() => alert("Registrado exitosamente")}
          onError={(err) => alert(`Error: ${err.message}`)}
          className="btn-primary"
        >
          Registrar
        </TransactionButton>
      </div>
    </div>
  );
}
