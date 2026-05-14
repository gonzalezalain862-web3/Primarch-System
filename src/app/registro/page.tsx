"use client";

// // import { useAccount, useConnect, useDisconnect } from "wagmi";

export default function RegistroPage() {
//   const { address, isConnected } = useAccount();
//   const { connect, connectors } = useConnect();
//   const { disconnect } = useDisconnect();

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Registro / Wallet</h2>
      {isConnected ? (
        <div className="bg-gray-800 p-4 rounded">
          <p className="mb-2">Conectado como:</p>
          <p className="font-mono text-purple-400">{address}</p>
          <button
            onClick={() => disconnect()}
            className="mt-4 bg-red-600 px-4 py-2 rounded"
          >
            Desconectar
          </button>
        </div>
      ) : (
        <button
          onClick={() => connect({ connector: connectors[0] })}
          className="bg-purple-600 px-4 py-2 rounded w-full"
        >
          Conectar MetaMask
        </button>
      )}
    </div>
  );
}
