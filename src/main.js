import L from "leaflet";
import "leaflet/dist/leaflet.css";
import './style/style.scss';
import { fetchGeoLocation, getPublicIP } from "./services/geoApiService.js";
import { renderLocationData, getHostType} from "./utils/updateDom.js";

const form = document.getElementById("searchForm");
const searchInput = document.getElementById("search");

// Get the user's IP, and load geolocation data
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
const myIcon = L.icon({
    iconUrl: '../images/icon-location.svg',
    iconSize: [46, 56],
    popupAnchor: [0, -56/2] ,
});
const marker = L.marker([lat, lng], {icon: myIcon}).addTo(map);
marker.bindPopup("<b>Current Location</b><br>This is where you are.");

// Event listeners
searchInput.addEventListener("blur",async (e)=>{
    if(searchInput.value == ""){
        searchInput.setCustomValidity("Please enter an IP address or domain");
    }
    else if (getHostType(searchInput.value) == "invalid") {
        searchInput.setCustomValidity("Invalid IP address or domain");
    } else {
        searchInput.setCustomValidity("");
    }
});
form.addEventListener("submit", async (e)=>{
    e.preventDefault();

    if (searchInput.value == "") {
        searchInput.setCustomValidity("Please enter an IP address or domain");
    }
    else if (searchInput.value != "" && getHostType(searchInput.value) != "invalid") {

        searchInput.setCustomValidity("");
        
        try{

            ipAddress = searchInput.value;
            data = await fetchGeoLocation(ipAddress,getHostType(searchInput.value)=="domain");
            if(data===undefined){
                throw new Error("Could not retreive data for the given IP or domain.")
            }
            console.log("New Data:", data);

            lat = data.location.lat;
            lng = data.location.lng;

            // Move map location
            map.setView([lat, lng], 13);
            // Move the marker
            marker.setLatLng([lat, lng]);
            // Update popup
            marker.setPopupContent(`<b>New Location</b><br>${data.location.city}, ${data.location.country}`);
            
            // Update the location data displayed to the user
            renderLocationData(data);

        }
        catch(e){
            alert("No data for that IP or domain could be retreived.");
            console.error(e);
        }
    }
        

});