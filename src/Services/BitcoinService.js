import axios from "axios";
import { storageService } from "./storageService";
const tradeVolumeKEY ='trade-volume'
 export async function getBitcoin(){
    const {data} = await axios.get("https://blockchain.info/tobtc?currency=USD&value=1")
    return data
}
//  export async function getMarketPrice(){
//     const {data} = await axios.get("https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true")
//     return data
// }

export async function getConfirmedTransactions() {
    let data = storageService.load('market-price');
 
    if (!data.length) {
      const chartData = await axios.get(
        `https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true`
      );
      console.log('from API');
      data = chartData.data;
      storageService.store('market-price', data);
    }
   else data = JSON.parse(data)
   
    console.log('from STORE', data);
    return data;
  }

export async function getMarketPrice() {
    let data = storageService.load(tradeVolumeKEY);
 
    if (!data.length) {
      const chartData = await axios.get(
        `https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`
      );
      console.log('from API');
      data = chartData.data;
      storageService.store(tradeVolumeKEY, data);
    }
   else data = JSON.parse(data)
   
    console.log('from STORE', data);
    return data;
  }
