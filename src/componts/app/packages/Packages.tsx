import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  Connection,
  PublicKey,
  Transaction,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import { Program, AnchorProvider, web3, BN } from "@project-serum/anchor";
import IDL from "@/constants/idl_4.json"; // Adjust the path to your IDL file
import NETWORK from "@/constants/networkConfig.json";
import { fetchPurchaseEvent, getReferralUplinks, purchasePackage } from "@/src/helpers/apis";
import { fetchSolPrice } from "@/src/helpers/miscellaneous";

const programID = new PublicKey(NETWORK.smart_contract);
const network = NETWORK.network;

const Packages = ({ setPathname, setDisplayPackage, setShowReferralTab, setUser }: any) => {
  const wallet: any = useWallet();
  const idl: any = IDL;
  const [activePlan, setActivePlan] = useState(false);
  const packageCards = [
    {
      id: 1,
      price: 0.5,
      packageName: "ESPRESSO MARTINI",
      packageImage: "package_1.png",
      description: `Espresso Martini (The "Holy Toledo, Did I Invest in WHAT?")  - This potent potion jumpstarts your investment journey (or your heart attack). Free refills, but remember, double vision might make you see double the investment opportunities... or just see Pepe twice (which might be worse).`,
    },
    {
      id: 2,
      price: 2,
      packageName: "SPRITZ MARTINI",
      packageImage: "package_2.png",
      description: `Aperol Spritz (The "Tiny Win, Tiny Mimosa") - Celebrate those small financial victories (or forget your equally tiny losses) with a taste of sunshine. Dollar signs not guaranteed (but might appear on Pepe's questionable taxidermy... those beady eyes are judging your portfolio).`,
    },
    {
      id: 3,
      price: 5,
      packageName: "MOJITO",
      packageImage: "package_3.png",
      description: `Mojito (The "Confident Frog, Questionable Strategy") - Refreshing as your newfound investment confidence. 20% off, but beware: mojitos and laser beam theories about the stock market might get mixed up. (Use your newfound charisma wisely. Don't accidentally convince the barflies to invest their life savings in PepeCoin.)`,
    },
    {
      id: 4,
      price: 10,
      packageName: "MOSCOW MULE",
      packageImage: "package_4.png",
      description: `Moscow Mule (The "High Roller, Potential Ramen Noodle Eater") - Toast your high-risk, high-reward choices with this icy drink. Just don't be surprised by rubber duckie cravings (or a Pepe-induced headache) tomorrow. (Remember, that yacht you dreamt of might turn into a cardboard box by morning.)`,
    },
    {
      id: 5,
      price: 15,
      packageName: "PINA COLADA",
      packageImage: "package_5.png",
      description: `Pina Colada (The "Escape to a Beach of Benjamins... Maybe") - Escape to a tropical paradise (or at least a comfy bar stool that suspiciously smells like swamp water) with this creamy drink. Dream of financial beaches (not included, but a frog can dream, even if those dreams involve hypnotized sheep and laser beams). Just remember, with great financial success comes great responsibility... like explaining to Pepe why you can't afford to fund his fly-powered hoverboard.`,
    },
    {
      id: 6,
      price: 25,
      packageName: "VODKA MARTINI",
      packageImage: "package_6.png",
      description: `Vodka Martini (The "Forgetful Investor, Hopeful Returns") - Shaken, not stirred (because Pepe can't stir, and frankly, neither can you after dealing with Pepe's "investment advice"). This classic martini is perfect for contemplating the meaning of life, the universe, and everything, or at least forgetting about that embarrassing email you sent to your boss about "investment opportunities" involving Pepe-themed merchandise (and a suspicious amount of glitter).`,
    },
    {
      id: 7,
      price: 75,
      packageName: "COSMOPOLITAN",
      packageImage: "package_7.png",
      description: `Cosmopolitan (The "Pinky Promise Your Portfolio Isn't Crying") - A suspiciously pink drink for the discerning investor (or at least someone who can afford to ignore the suspicious pink color). Just remember, with great taste comes great responsibility... like finishing the entire drink, no matter how suspicious that decorative fly looks (it might be winking at you... or plotting your financial doom with Pepe).`,
    },
    {
      id: 8,
      price: 100,
      packageName: "MANHATTAN",
      packageImage: "package_8.png",
      description: `Manhattan (The "Big Cheese, Big Bucks (Hopefully)") - A classic cocktail for the truly brave (or foolhardy) investor. This rye whiskey masterpiece is smooth enough to make even Pepe put down his fly swatter for a moment (no promises on how long the peace will last, or what horrifying experiment he'll pick up next). Consider this a celebratory drink for reaching the top tier... or a potential bribe to keep Pepe from whispering his latest investment in your ear.`,
    },
  ];

  async function callPurchasePackage(package_id: any, package_price: any) {
    // integrate api here to call /get-referral-uplinks
    const access_token = localStorage.getItem("access_token") || null;
    const response: any = await getReferralUplinks(access_token);
    console.log("referrals", response);

    if (response.status == 200) {
      let referrals = response.data?.referrals?.map((ref: any) => ref.walletAddress);
      let commissions = response.data?.referrals?.map((ref: any) => new BN(ref.commission));
      let credits: any = [];

      console.log({referrals, commissions});
  
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



      const listener = program.addEventListener(
        "PurchaseEvent",
        async (event, slot) => {
          console.log("Purchase event:", event);
          console.log("Slot:", slot);

          if(referrals.length == 0) {
            commissions = [];
            credits = [];
            
          } else {
            // store referrals, commissions, credits coming from event or slot
            console.log(event.referrals);

            referrals = event.referrals.map((ref: any) => ref.pubkey.toString());
            commissions = event.referrals.map((ref: any) => ref.payableCommission.toNumber()/LAMPORTS_PER_SOL)
            credits = event.referrals.map((ref: any) => ref.credit.toNumber()/LAMPORTS_PER_SOL); // default credits multiplier is 50x
          }

          let access_token = localStorage.getItem("access_token") || null;
          purchasePackage(access_token, package_id, package_price, referrals, commissions, credits).then((res: any) => {
            console.log(res)
            setShowReferralTab(true);
            // setUser((prev: any) => ({...prev, referralCode: res.data.referralCode}))
          }).catch((err: any) => {console.log(err)})

        }
      );

      try {
        const response = await program.methods
          .purchasePackage(
            new BN(package_price * LAMPORTS_PER_SOL),
            commissions
          )
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

        console.log({ response });
        // console.log()
        console.log("purchase_package function called successfully.");
      } catch (error) {
        console.error("Error calling purchase_package:", error);
      } finally {
        // Remove listener after the transaction is confirmed
        program.removeEventListener(listener);
      }
    } else {
      console.log("request error");
      console.log(response);
    }
  }

  return (
    <Box>
      {activePlan && (
        <Box
          maxW="652px"
          w="100%"
          border="1px solid #8AABED"
          mb="20px"
          p="20px"
          boxShadow="0px 5px 0px #215ED7"
        >
          <Image
            w="100%"
            maxH="250px"
            src="https://i.ibb.co/9HM56Zb/Rectangle-66.png"
          />
          <Flex gap="30%" mt="30px">
            <Box>
              <Text fontSize="20px">Current Plan</Text>
              <Text fontSize="32px">SILVER</Text>
            </Box>
            <Box>
              <Text fontSize="20px">Price</Text>
              <Text fontSize="32px">2 SOL</Text>
            </Box>
          </Flex>
        </Box>
      )}
      <Text fontSize={{ base: "26px", sm: "32px" }} mt="25px" mb="8px">
        <span
          onClick={() => {
            setPathname("/");
          }}
          style={{ cursor: "pointer" }}
        >{`< `}</span>{" "}
        Packages
      </Text>
      <Box display="flex" flexWrap="wrap" gap="30px">
        {packageCards.map((card: any, index: any) => (
          <Box
            key={index}
            maxW="406px"
            w="100%"
            mx="auto"
            border="1px solid #8AABED"
            mb="20px"
            px={{ base: "10px", sm: "20px" }}
            py="15px"
            boxShadow="0px 5px 0px #215ED7"
          >
            <Image w="100%" maxH="250px" src={card.packageImage} />
            <Text fontSize={{ base: "26px", sm: "32px" }}>
              {card.packageName}
            </Text>
            <Flex gap="16px" justifyContent="end" mt="30px">
              <Button
                variant="outline"
                borderColor="black"
                fontSize="16px"
                fontWeight="normal"
                borderRadius="30px"
                onClick={() => {
                  setPathname("/packages-details");
                  setDisplayPackage({
                    id: card.id,
                    name: card.packageName,
                    price: card.price,
                    description: card.description,
                    image: card.packageImage,
                  });
                }}
              >
                Details
              </Button>
              <Button
                border="none"
                color="white"
                bg="#05A41F"
                fontSize="16px"
                fontWeight="normal"
                borderRadius="30px"
                onClick={async () => {
                  await callPurchasePackage(card.id, card.price);
                }}
              >
                BUY for {card.price} SOL
              </Button>
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Packages;
