"use client";

import { ThirdwebProvider } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";

const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || ""
});

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return <ThirdwebProvider client={client}>{children}</ThirdwebProvider>;
}
