import L from "leaflet";
import "leaflet/dist/leaflet.css";
// import { ApiError, handleError } from "./utils/errorHandler.js";
import { fetchGeoLocation } from "./services/geoApiService.js";


const ip = document.getElementById("ip");
const location = document.getElementById("location");
const timezone = document.getElementById("timezone");
const isp = document.getElementById("isp");
const form = document.getElementById("searchForm");
const searchInput = document.getElementById("search");

const data = await fetchGeoLocation();
console.log(data);

// Update the location data displayed to the user on page load
ip.textContent = data.ip;
location.textContent = data.location.city;
timezone.textContent = data.location.timezone;
isp.textContent = data.isp;

// Update the leaflet map location and marker
const lat = data.location.lat;// 40.57927
const lng = data.location.lng;// -74.41154
const map = L.map("map").setView([lat, lng], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([lat, lng]).addTo(map);
marker.bindPopup("<b>Current Location</b><br>This is where you are.");//.openPopup()

// Event listeners
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("click");

    if(searchInput.value != ""){

    }
});