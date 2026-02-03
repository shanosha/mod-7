import { key } from "../../secret.js";
import { ApiError, handleError } from "../utils/errorHandler.js";
import mockData from "../utils/mockData.js";

async function getPublicIP() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    
    const data = await response.json();
    const ipAddress = data.ip;

    console.log("My public IP address is: " + ipAddress);
    // You can display the IP in your HTML, e.g.:
    // document.getElementById("ip-address").textContent = ipAddress;
    return ipAddress;
  } catch (error) {
    console.error("Error fetching IP address:", error);
  }
}

async function fetchGeoLocation() {
  try {
    const ipAddress = await getPublicIP() || "8.8.8.8";
    const apiKey = key; // Set this value to your API key
    // const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`;
    // const response = await fetch(url); //?limit=10
    // if (!response.ok) {
    //   throw new ApiError("API request failed", response.status);
    // }
    // const data = await response.json();
    const data = mockData;
    return data;
  } catch (e) {
    handleError(e);
  }
}

export { fetchGeoLocation };
