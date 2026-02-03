import { key } from "../../secret.js";
import { ApiError, handleError } from "../utils/errorHandler.js";
import mockData1 from "../utils/mockData1.js";
import mockData2 from "../utils/mockData2.js";
import mockData3 from "../utils/mockData3.js";


async function getPublicIP() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    const ipAddress = data.ip;

    console.log("User's public IP address is: " + ipAddress);

    return ipAddress;
  } catch (error) {
    console.error("Error fetching IP address:", error);
  }
}

async function fetchGeoLocation(addressString,domainBoolean=false) {
  try {

    const useMockData = !true;

    const apiKey = key; // Set this value to your API key
    const address = addressString;
    const isDomain = domainBoolean;
    let url;
    let data;

    if(useMockData){
      const mockData = [mockData2,mockData3];
      data = (address=="24.0.24.106" ? mockData1 : mockData2);
    }
    else{
      url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&${isDomain?"domain":"ipAddress"}=${address}`;
      console.log("URL: ",url);
      const response = await fetch(url);
      console.log("Response: ",response);
      if (!response.ok) {
        throw new ApiError("API request failed", response.status);
      }
      data = await response.json();
    };

    return data;

  } catch (e) {
    handleError(e);
  }
}

export { fetchGeoLocation, getPublicIP };
