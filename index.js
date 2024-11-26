
// Initialize and add the map
let map;
// let service;
let infowindow;

async function initMap() {
  // The location of Kiev
  const position = { lat: 50.44437317321182, lng: 30.514200644520805 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary('maps');
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    'marker'
  );

  infowindow = new google.maps.InfoWindow();


  // The map, centered at Kiev
  map = new Map(document.getElementById('map'), {
    zoom: 7,
    center: position,
    mapId: 'DEMO_MAP_ID',
  });




  // The marker, positioned at Kiev
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: 'Kiev',
  });

// const serviceStops = require(serviceStops.json);
// console.log(serviceStops);


  const serviceStops = [
    [{ lat: 50.429147, lng: 30.560207 }, 'СТО Мастер, 0673334433,Харківське шосе 150'],
    [{ lat: 50.43069108952137, lng: 30.563733170781173 }, 'Співоче'],
    [{ lat: 50.432433268220905, lng: 30.55782523788433 }, 'Музей Ивана Гончара',],
    [{ lat: 51.49683143828274, lng: 31.287428975759237 }, 'Чернігів'],
    [{lat:50.4063125,lng:30.6773125},'Тойота центр Київ Автосамміт, 044-537-54-54, Київ, Харківське шосе, 179'],
    [{lat:50.3495625,lng:30.5538125},'Автосаміт на Столичному, 044-201-30-30, Київ, Столичне шосе  , 90'],
  ];

  // Create an info window to share between markers.
  infowindow = new google.maps.InfoWindow();

  // Create the markers.
  serviceStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: ` ${title}`,
      label: `${i + 1}`,

      optimized: false,
    });





    // Add a click listener for each marker, and set up the info window.
    marker.addListener('click', () => {
      infowindow.close();
      infowindow.setContent(marker.getTitle());
      infowindow.open(marker.getMap(), marker);
    });



    const antennasCircle = new google.maps.Circle({
      strokeColor: '#3483eb',
      strokeOpacity: 0.9,
      strokeWeight: 0.5,
      fillColor: '#42c5f5',
      fillOpacity: 0.2,
      map: map,
      center: position,
      radius: 150000,
    });


  });
}

initMap();


