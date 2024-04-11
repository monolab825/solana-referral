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