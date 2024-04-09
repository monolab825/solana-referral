import { useEffect, useState } from "react";
import { Box, Grid } from "@chakra-ui/react";
import Sidebar from "../../core/sidebar/Sidebar";
import TotalReferredSection from "./TotalReferredSection";
import HomeReuseCard from "./HomeReuseCard";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';

const HomeIndex = () => {
  const wallet = useWallet();
  const [balance, setBalance] = useState<number | null>(0);
  const connection = new Connection(
    "https://api.devnet.solana.com",
    "confirmed"
  );

  const fetchBalance = async () => {
    if (!wallet?.publicKey) {
      console.error("Wallet is not connected");
      return;
    }

    try {
      const balance = await connection.getBalance(wallet.publicKey);
      console.log(balance);
      setBalance(balance / LAMPORTS_PER_SOL); // Convert lamports to SOL
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  const requestAirdrop = async () => {
    if (!wallet?.publicKey) {
      console.error('Wallet is not connected');
      return;
    }

    try {
      console.log('Requesting airdrop...');
      const airdropSignature = await connection.requestAirdrop(
        wallet.publicKey,
        LAMPORTS_PER_SOL // This will request 1 SOL. Adjust the amount as needed.
      );

      await connection.confirmTransaction(airdropSignature);
      console.log('Airdrop successful');
    } catch (error) {
      console.error('Airdrop failed:', error);
    }
  };

  useEffect(() => {
    fetchBalance();
    // requestAirdrop();
  }, [wallet])

  return (
    <Box
      display={{ base: "block", md: "flex" }}
      gap={{ base: "15px", xl: "30px" }}
    >
      <TotalReferredSection />
      <Box w="100%">
        <HomeReuseCard cardTitle="SOL Balance" amount={`${balance?.toFixed(2)}`} rate="~$0.00" />
        <HomeReuseCard cardTitle="My Package" amount="Unavailable" showButton />
        <HomeReuseCard
          cardTitle="Total Referral Commission"
          amount="$0.00"
          showButton
        />
        <HomeReuseCard cardTitle="My Credits" amount="0" showButton />
      </Box>
    </Box>
  );
};

export default HomeIndex;
