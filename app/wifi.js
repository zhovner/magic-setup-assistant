var WiFiControl = require('wifi-control');
WiFiControl.init({});

const scan = () => {
  WiFiControl.scanForWiFi((err, response) => {
    if (err) {
      console.log(err);
      return false;
    } 
    const list = document.querySelector('#wifi_networks');
    list.innerHTML = response.networks.map(network => `<option>${network.ssid}</option>`).join('');
  });
}

scan();