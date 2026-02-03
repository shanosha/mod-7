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
    // You can display the IP in your HTML, e.g.:
    // document.getElementById("ip-address").textContent = ipAddress;
    return ipAddress;
  } catch (error) {
    console.error("Error fetching IP address:", error);
  }
}

async function fetchGeoLocation(ipAddress) {
  try {
    const ip = ipAddress;
    const apiKey = key; // Set this value to your API key

    // const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`;
    // console.log(url);
    // const response = await fetch(url); //?limit=10
    // if (!response.ok) {
    //   throw new ApiError("API request failed", response.status);
    // }
    // const data = await response.json();
    const data = (ip=="24.0.24.106" ? mockData1 : mockData2);

    return data;
  } catch (e) {
    handleError(e);
  }
}

export { fetchGeoLocation, getPublicIP };
