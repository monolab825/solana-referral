import { useEffect, useState } from "react";
import { Box, Grid } from "@chakra-ui/react";
import Sidebar from "../../core/sidebar/Sidebar";
import TotalReferredSection from "./TotalReferredSection";
import HomeReuseCard from "./HomeReuseCard";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';
import NETWORK from "@/constants/networkConfig.json";
import { getUser } from "@/src/helpers/apis";

const HomeIndex = ({onLogInOpen, setPathname, user, setUser}: any) => {
  const wallet = useWallet();
  const [balance, setBalance] = useState<number | null>(0);
  const [userPackage, setUserPackage] = useState("No package");
  const connection = new Connection(
    NETWORK.network,
    "confirmed"
  );

  const fetchUserDetails = async (walletAddress: any) => {
    const userData = await getUser(walletAddress);
    
    if(userData?.error == "User not found") {
      onLogInOpen();
    }

    console.log(userData);
    setUser(userData);  
    localStorage.setItem("access_token", userData.accessToken);


    if(userData.package_id !== 0) {
      switch(userData.package_id) {
        case 1:
          setUserPackage("ESPRESSO MARTINI");
          break;
        case 2:
          setUserPackage("SPRITZ MARTINI");
          break;
        case 3:
          setUserPackage("MOJITO");
          break;
        case 4:
          setUserPackage("MOSCOW MULE");
          break;
        case 5:
          setUserPackage("PINA COLADA");
          break;
        case 6:
          setUserPackage("VODKA MARTINI");
          break;
        case 7:
          setUserPackage("COSMOPOLITAN");
          break;
        case 8:
          setUserPackage("MANHATTAN");
          break;
      }
    }
  }

  const fetchBalance = async () => {
    if (!wallet?.publicKey) {
      console.error("Wallet is not connected");
      return;
    }

    try {
      const balance = await connection.getBalance(wallet.publicKey);
      console.log(balance);
      setBalance(balance / LAMPORTS_PER_SOL); // Convert lamports to SOL
      console.log("wallet address: ", wallet.publicKey.toString());
      fetchUserDetails(wallet.publicKey.toString());
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  const requestAirdrop = async () => {
    console.log("called");
    if (!wallet?.publicKey) {
      console.error('Wallet is not connected');
      return;
    }

    try {
      console.log('Requesting airdrop...');
      const airdropSignature = await connection.requestAirdrop(
        wallet.publicKey,
        5 * LAMPORTS_PER_SOL // This will request 1 SOL. Adjust the amount as needed.
      );

      await connection.confirmTransaction(airdropSignature);
      console.log('Airdrop successful');
    } catch (error) {
      console.error('Airdrop failed:', error);
    }
  };

  useEffect(() => {
    if(wallet.connected) {
      fetchBalance();
      // requestAirdrop();
    }
  }, [wallet])

  return (
    <Box
      display={{ base: "block", md: "flex" }}
      gap={{ base: "15px", xl: "30px" }}
    >
      <TotalReferredSection referralCode={user.referralCode} />
      <Box w="100%">
        <HomeReuseCard cardTitle="SOL Balance" amount={`${balance?.toFixed(2)}`} rate="~$0.00" />
        <HomeReuseCard cardTitle="My Package" amount={userPackage} showButton buttonAction={() => {setPathname("/packages")}} />
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
