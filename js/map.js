var mymap = L.map('mapid').setView([-29.712959, -52.430116], 14);
var marker = L.marker([-29.712959, -52.430116]).addTo(mymap);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>,© <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:'pk.eyJ1IjoiZGFuYXJhdWoiLCJhIjoiY2s3bWh5M3NpMDFtcDNtbnYzeHVzOWQ2byJ9.Qa9tMdHD0x32ks5h1oI_gQ' 
}).addTo(mymap);
marker.bindPopup("BIRD WORLD<br>Agência de viagens</br>").openPopup();
var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Oi! Tudo bem?")
        .openOn(mymap);
}
mymap.on('click', onMapClick);