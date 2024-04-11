import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey, Transaction, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { Program, AnchorProvider, web3, BN } from "@project-serum/anchor";
import NETWORK from "@/constants/networkConfig.json";
import IDL from "@/constants/idl_4.json"; // Adjust the path to your IDL file

const programID = new PublicKey(NETWORK.smart_contract);
const network = NETWORK.network;

const PackageDetails = ({ displayPackage }: any) => {
  const wallet: any = useWallet();
  const idl: any = IDL;

  async function callPurchasePackage( package_id: any, package_price: any) {
    // integrate api here to call /get-referral-uplinks
    const referrals = ["7h7rhCPzaFFJBJ4zScfMGXPCiNctJXejNaQSeDDbkoBa", "22gbQiUoDqcyp2jPBtrewBVT5axX4vm1PFpXfc9AzXRC"];
    const commissions: any = [new BN(10), new BN(10)];;

    if (!wallet.connected) {
      console.log("Wallet is not connected!");
      return;
    }

    const connection = new Connection(network, "confirmed");
    const provider = new AnchorProvider(connection, wallet, {
      preflightCommitment: "confirmed",
    });

    const program = new Program(idl, programID, provider);
    const lpWallet = new PublicKey(NETWORK.lp_wallet);
    const founder = new PublicKey(NETWORK.founder_wallet);

    const listener = program.addEventListener('PurchaseEvent', (event, slot) => {
        console.log('Purchase event:', event);
        console.log('Slot:', slot);
        // call purchase-package api here
    });

    try {
      const response = await program.methods
        .purchasePackage(new BN(package_price * LAMPORTS_PER_SOL), commissions)
        .accounts({
          user: provider.wallet.publicKey,
          lpWallet: lpWallet,
          founder: founder,
          systemProgram: web3.SystemProgram.programId,
        })
        .remainingAccounts(
          referrals.map((key: any) => ({
            pubkey: new PublicKey(key),
            isWritable: true,
            isSigner: false,
          }))
        )
        .signers([])
        .rpc();

      console.log({response});
      console.log("purchase_package function called successfully.");
    } catch (error) {

      console.error("Error calling purchase_package:", error);
    } finally {
        // Remove listener after the transaction is confirmed
        program.removeEventListener(listener);
    }
  }

  return (
    <Box>
      <Text fontSize="32px">Packages details</Text>
      <Flex>
        <Box p="15px" width={"50%"}>
          <Image
            w="100%"
            maxH="366px"
            src={displayPackage.image}
          />
        </Box>
        <Box width={"50%"}>
          <Text fontSize="32px" mb="20px">
            {displayPackage?.name} plan
          </Text>
          <Text fontSize="16px">{displayPackage?.description}</Text>
          <Flex gap="16px" justifyContent="space-between" alignContent={"center"} mt="30px">
          <Text fontSize="32px" mb="20px">
            Price: {displayPackage?.price} SOL
          </Text>
            <Button
              border="none"
              color="white"
              bg="#05A41F"
              fontSize="16px"
              fontWeight="normal"
              borderRadius="30px"
              onClick={async () => {
                await callPurchasePackage(displayPackage.id, displayPackage.price);
              }}
            >
              BUY
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default PackageDetails;
