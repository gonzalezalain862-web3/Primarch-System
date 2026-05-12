"use client";

import { useState } from "react";
import { useAccount, useWriteContract } from "wagmi";
import { parseEther } from "viem";

const contractABI = [
  {
    "inputs": [
      { "internalType": "string", "name": "name", "type": "string" },
      { "internalType": "string", "name": "symbol", "type": "string" },
      { "internalType": "uint256", "name": "totalSupply", "type": "uint256" }
    ],
    "name": "createToken",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "payable",
    "type": "function"
  }
] as const;

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0x...";

export default function PagoPage() {
  const { isConnected } = useAccount();
  const { writeContract } = useWriteContract();
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [supply, setSupply] = useState("");

  const handleCreateToken = () => {
    if (!name || !symbol || !supply) return;
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: contractABI,
      functionName: "createToken",
      args: [name, symbol, BigInt(supply)],
      value: parseEther("0.001"),
    });
  };

  if (!isConnected) {
    return <div className="text-center text-gray-400">Conecta tu wallet para continuar.</div>;
  }

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Crear tu Memecoin</h2>
      <div className="bg-gray-800 p-4 rounded space-y-4">
        <div>
          <label className="block mb-1">Nombre del token</label>
          <input className="bg-gray-700 p-2 rounded w-full" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label className="block mb-1">Símbolo</label>
          <input className="bg-gray-700 p-2 rounded w-full" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
        </div>
        <div>
          <label className="block mb-1">Suministro total</label>
          <input className="bg-gray-700 p-2 rounded w-full" value={supply} onChange={(e) => setSupply(e.target.value)} />
        </div>
        <button
          onClick={handleCreateToken}
          className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded w-full font-semibold"
        >
          Crear Token (0.001 ETH)
        </button>
      </div>
    </div>
  );
}
