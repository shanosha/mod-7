// Update the location data displayed to the user
function renderLocationData(data){

    const ipElement = document.getElementById("ip");
    const locationElement = document.getElementById("location");
    const timezoneElement = document.getElementById("timezone");
    const ispElement = document.getElementById("isp");
    
    ipElement.textContent = data.ip;
    locationElement.textContent = data.location.city;
    timezoneElement.textContent = data.location.timezone + " UTC";
    ispElement.textContent = data.isp;

    // const formContainer = document.getElementById('form');
    // const ul = document.querySelector('ul');
    // const halfHeight = ul.clientHeight / 2;
    // ul.style.setProperty('bottom', `-${ul.clientHeight / 2}px`);
    // formContainer.style.setProperty('padding-bottom', `${ul.clientHeight / 2}px`);

}

// Check input to see if the pattern matches a URL or domain format
function getHostType(input) {

  const value = input.trim();

  const ipRegex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
  const domainRegex = /^(?!-)(?:[a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,}$/;

  if (ipRegex.test(value)) return "ip";
  if (domainRegex.test(value)) return "domain";
  
  return "invalid";

}

export { renderLocationData, getHostType}