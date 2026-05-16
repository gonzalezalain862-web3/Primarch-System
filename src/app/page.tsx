"use client";
import { ConnectButton } from "thirdweb/react";
import { client } from "@/lib/client";

export default function Home() {
  return (
    <div className="glass-card">
      <h1 style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', fontWeight: 'bold', background: 'linear-gradient(to right, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', marginBottom: '1rem' }}>
        MULTI-CHANNEL ACCURACY
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#cbd5e1', marginBottom: '2rem' }}>
        Unified tracking for Google and TikTok leads. Zero data entry errors.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ConnectButton client={client} />
      </div>
    </div>
  );
}
