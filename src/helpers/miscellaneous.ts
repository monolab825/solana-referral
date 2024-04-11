import axios from "axios";

export async function fetchSolPrice() {
    try {
      const response: any = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
      if (response.status !== 200) {
        throw new Error(`Error fetching SOL price: ${response.statusText}`);
      }
      console.log(response);
      const data = response.data;
      console.log(`The current price of SOL in USD is: $${data.solana.usd}`);
      return data.solana.usd;
    } catch (error: any) {
      console.error(`An error occurred: ${error.message}`);
      return null;
    }
}