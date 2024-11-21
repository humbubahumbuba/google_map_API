// Initialize and add the map
let map;

async function initMap() {
  // The location of Kiev
  const position = { lat: 50.44437317321182, lng: 30.514200644520805 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary('maps');
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    'marker'
  );

  // The map, centered at Kiev
  map = new Map(document.getElementById('map'), {
    zoom: 10,
    center: position,
    mapId: 'DEMO_MAP_ID',
  });

  // The marker, positioned at Kiev
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: 'Kiev',
  });

  const serviceStops = [
    [{ lat: 50.429147, lng: 30.560207 }, 'Музей локальних конфліктів'],
    [{ lat: 50.43069108952137, lng: 30.563733170781173 }, 'Співоче'],
    [
      { lat: 50.432433268220905, lng: 30.55782523788433 },
      'Музей Ивана Гончара',
    ],
    [
      { lat: 51.49683143828274, lng: 31.287428975759237 },
      'Музей локальних конфліктів',
    ],
  ];
  // for (const service in serviceStops) {
  //   // Add the circle for this city to the map.
  //   const serviceCircle = new google.maps.Circle({
  //     strokeColor: '#FF0000',
  //     strokeOpacity: 0.8,
  //     strokeWeight: 2,
  //     fillColor: '#42c5f5',
  //     fillOpacity: 0.35,
  //     map,
  //     center: position,
  //     radius: 150000,
  //   });

  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();
  const antennasCircle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.4,
    strokeWeight: 2,
    fillColor: '#42c5f5',
    fillOpacity: 0.2,
    map: map,
    center: position,
    radius: 150000,
  });

  // Create the markers.
  serviceStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: ` ${title}`,
      // label: `${i + 1}`,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener('click', () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}

initMap();
