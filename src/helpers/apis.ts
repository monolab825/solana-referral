import NETWORK from "@/constants/networkConfig.json";
import axios from "axios";

export async function getUser(walletAddress: any) {
  try {
    const response = await axios.get(`${NETWORK.backend_endpoint}/get-user`, {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        walletAddress,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error making GET request:", error);
    return error;
    throw error;
  }
}

export async function registerUser(
  name: any,
  email: any,
  referralCode: any,
  walletAddress: any
) {
  try {
    const response = await axios.post(
      `${NETWORK.backend_endpoint}/register-user`,
      {
        name,
        email,
        referralCode,
        walletAddress,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log("Error making register user request: ", error);
    return error;
  }
}

export async function getReferralUplinks(access_token: any) {
    try {
        const response = await axios.get(`${NETWORK.backend_endpoint}/get-referral-uplinks`, {
            headers: {
                "Authorization": access_token
            }
        })
        return response;
    } catch (error) {

        return error;
    }
}

export async function purchasePackage(access_token: any, package_id: any, package_price: any, referrals: any, commissions: any, credits: any) {
    try {
        const response = await axios.post(
          `${NETWORK.backend_endpoint}/purchase-package`,
          {
            package_id,
            package_price,
            referrals,
            commissions,
            credits
          },
          {
            headers: {
              "Content-Type": "application/json",
              "Authorization": access_token
            },
          }
        );
        console.log(response);
        return response;
      } catch (error) {
        console.log("Error making register user request: ", error);
        return error;
      }
} 

export async function fetchPurchaseEvent (txHash: any, connection: any, program: any) {
    try {
      // Fetch the transaction details
      const tx = await connection.getTransaction(txHash);
      console.log(tx);
  
      // Assuming the event is in the first log message; adjust if necessary
      const log = tx.meta.logMessages.find((message: any) => message.startsWith('Program log: '));
    
      console.log({log})
      if (!log) {
        console.log('No log found in the transaction');
        return;
      }
  
      // Extract the base-64 encoded string
      const base64Data = log.split('Program log: ')[1];
  
      // Decode the event data
      const eventData = program.coder.events.decode('PurchaseEvent', base64Data);
  
      console.log('Event data:', eventData);
    } catch (error) {
      console.error('Error fetching the event:', error);
    }
  };
  