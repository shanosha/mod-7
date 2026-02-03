const ipElement = document.getElementById("ip");
const locationElement = document.getElementById("location");
const timezoneElement = document.getElementById("timezone");
const ispElement = document.getElementById("isp");

// Update the location data displayed to the user
export function renderLocationData(data){
    
    ipElement.textContent = data.ip;
    locationElement.textContent = data.location.city;
    timezoneElement.textContent = data.location.timezone;
    ispElement.textContent = data.isp;

}