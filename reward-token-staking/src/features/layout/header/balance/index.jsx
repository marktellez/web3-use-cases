import { useEffect, useState } from "react";
import useWeb3 from "@/features/web3/hooks/use-web3";
import { ethers } from "ethers";

export default function Balance() {
  const { balance } = useWeb3();

  return (
    <div>
      {balance > 0 &&
        parseFloat(ethers.utils.formatEther(balance || 0.0)).toFixed(4) +
          " MATIC"}
    </div>
  );
}
