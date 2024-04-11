import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey, Transaction } from "@solana/web3.js";
import { Program, AnchorProvider, web3 } from "@project-serum/anchor";
import idl from "@/constants/idl_3.json"; // Adjust the path to your IDL file

const programID = new PublicKey("G2ctmoDFNnYFcwdqotLTzmHBTNAcjAuTRFmhpBDAbbpT");
const network = "https://api.devnet.solana.com";

const PackageDetails = () => {
  const wallet: any = useWallet();

  async function callPurchasePackage(remainingAccounts: any) {
    if (!wallet.connected) {
      console.log("Wallet is not connected!");
      return;
    }

    const connection = new Connection(network, "confirmed");
    const provider = new AnchorProvider(connection, wallet, {
      preflightCommitment: "confirmed",
    });

    const program = new Program(idl, programID, provider);

    // Replace these with the actual public keys
    // const founder = new PublicKey("Founder_Public_Key");
    const lpWallet = new PublicKey("83gXjhETa3nDGxVZHYMrBQuiN4SRzvjnxD1DPUsb1Vnk");

    try {
      const response = await program.methods
        .purchasePackage()
        .accounts({
          user: provider.wallet.publicKey,
          lpWallet: lpWallet,
          systemProgram: web3.SystemProgram.programId,
        })
        .remainingAccounts(
          remainingAccounts.map((key: any) => ({
            pubkey: new PublicKey(key),
            isWritable: true,
            isSigner: false,
          }))
        )
        .signers([])
        .rpc();

      console.log(response);
      console.log("purchase_package function called successfully.");
    } catch (error) {

      console.error("Error calling purchase_package:", error);
    }
  }

  return (
    <Box>
      <Text fontSize="32px">Packages details</Text>
      <Box p="15px" bg="#f5f5f5">
        <Image
          w="100%"
          maxH="366px"
          src="https://i.ibb.co/9HM56Zb/Rectangle-66.png"
        />
      </Box>
      <Text fontSize="32px" mt="50px" mb="20px">
        EMERALD plan
      </Text>
      <Text fontSize="16px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <Text fontSize="16px" mt="30px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </Text>
      <Text fontSize="32px" mt="30px" mb="20px">
        Price: 10 SOL
      </Text>
      <Text fontSize="16px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <Flex gap="16px" justifyContent="end" mt="30px">
        <Button
          border="none"
          color="white"
          bg="#05A41F"
          fontSize="16px"
          fontWeight="normal"
          borderRadius="30px"
          onClick={async () => {
            await callPurchasePackage([
              "8Z9igxEnBWifbFsdmRYfBQVgpFGRLUDoHEZ8LD558ueR",
              "6ABRd6Ja9RXCMfou7xLdSq4RqvQumtqqUq5SqanDgiw",
            ]);
          }}
        >
          BUY
        </Button>
      </Flex>
    </Box>
  );
};

export default PackageDetails;
