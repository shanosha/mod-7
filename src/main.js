import L from "leaflet";
import "leaflet/dist/leaflet.css";
// import { ApiError, handleError } from "./utils/errorHandler.js";
import { fetchGeoLocation, getPublicIP } from "./services/geoApiService.js";
import { renderLocationData } from "./utils/updateDom.js";

const form = document.getElementById("searchForm");
const searchInput = document.getElementById("search");

let ipAddress = await getPublicIP();
let data = await fetchGeoLocation(ipAddress);
console.log("User Data:",data);

// Update the location data displayed to the user on page load
renderLocationData(data);

// Update the leaflet map location and marker
let lat = data.location.lat;
let lng = data.location.lng;
const map = L.map("map").setView([lat, lng], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
let marker = L.marker([lat, lng]).addTo(map);
marker.bindPopup("<b>Current Location</b><br>This is where you are.");//.openPopup()

// Event listeners
form.addEventListener("submit",async (e)=>{
    e.preventDefault();

    if(searchInput.value != ""){
        
        ipAddress = searchInput.value;
        data = await fetchGeoLocation(ipAddress);
        console.log("New Data:", data);

        lat = data.location.lat;
        lng = data.location.lng;

        // Move map location
        map.setView([lat, lng], 13);
        // Move the marker
        marker.setLatLng([lat, lng]);
        // Optional: update popup
        marker.setPopupContent(`<b>New Location</b><br>${lat}, ${lng}`);
        
        // Update the location data displayed to the user
        renderLocationData(data);

    }
});