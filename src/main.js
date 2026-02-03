import L from "leaflet";
import "leaflet/dist/leaflet.css";
// import { ApiError, handleError } from "./utils/errorHandler.js";
import { fetchGeoLocation } from "./services/geoApiService.js";


const geoLocationData = await fetchGeoLocation();
console.log(geoLocationData);
const lat = geoLocationData.location.lat;// 40.57927
const lng = geoLocationData.location.lng;// -74.41154

const map = L.map("map").setView([lat, lng], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([lat, lng]).addTo(map);
marker.bindPopup("<b>Current Location</b><br>This is where you are.");//.openPopup()