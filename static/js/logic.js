d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then( data => {
    console.log(data);   
   
   // Create a map object.
    var myMap = L.map("map", {
        center: [15.5994, -28.6731],
        zoom: 3
    });
    
    // Add a tile layer.
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);
    

      // Loop through the cities array, and create one marker for each city object.
    for (var i = 0; i < data.features.length; i++) {
      // console.log(data.features[i].geometry.coordinates[2]);
        // Add circles to the map.
        L.circleMarker(data.features[i].geometry.coordinates, {
        fillOpacity: 1,
        weight: 0.5,
        color: chooseColor(data.features[i].geometry.coordinates[2]),
        // Adjust the radius.
        radius: (data.features[i].properties.mag*5)
        }).bindPopup(`<h4> Magnitude : ${data.features[i].properties.mag}</h4> <hr> 
        <h4> Location: ${data.features[i].properties.place}</h4> <hr> 
        <h4> Depth: ${data.features[i].geometry.coordinates[2]}</h4>`).addTo(myMap);
        
    }
    function chooseColor(depth) {
        switch(true) {
            case (depth <= 5):
              return "#DAF7A6";
            case (5 <= depth && depth <= 10):
              return "#FFC300";
            case (10 <= depth && depth <= 15):
              return "#FF5733";
            case (15 <= depth && depth <= 20):
              return "#C70039";
            case (20 <= depth && depth <= 30):
              return "#900C3F";
            default:
              return "#581845";
        }
    }
    var legend = L.control({ position: 'bottomright' })
    legend.onAdd = function (map) {
      let div = L.DomUtil.create('div', 'info legend'),
          grades = [-5,5, 10, 15, 20, 30],
          labels = [];
      div.innerHTML += "<h3>Depth</h3>"
      // loop through density intervals
      for (let i = 0; i < grades.length; i++) {
          div.innerHTML +=
              '<li style="background-color:' + chooseColor(grades[i] + 1) + '"></li> ' +
              grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
      }
      return div;
  };
  legend.addTo(myMap)
    

})
  
  

  

// .bindPopup(`<h1>${data.features[i].id}</h1> <hr> <h3>GDP Per Capita (USD): ${countries[i].gdp_pc}</h3>`)