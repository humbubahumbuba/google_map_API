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

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: 'Kiev',
  });

  const tourStops = [
    [{ lat: 50.429147, lng: 30.560207 }, 'Музей локальних конфліктів'],
    [{ lat: 50.43069108952137, lng: 30.563733170781173 }, 'Airport Mesa'],
    [
      { lat: 50.432433268220905, lng: 30.55782523788433 },
      'Chapel of the Holy Cross',
    ],
  ];
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  tourStops.forEach(([position, title], i) => {
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
