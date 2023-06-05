let basmap = L.tileLayer(
    "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",{
    attribution:'Map data: &copy; <a href="https://www.openstreetmap.org">OpenTopoMap</a> (<a href="https:creativecommons.org/licenses/by-sa/3.0/"CC-BY-SA</a>)'

    });

let map = L.map("map",{
    center:[40.7, -94.5],
    zoom: 3
})

basmap.addTo(map);
function getColor(depth) {
   if (depth > 90) {
        return "#ea2c2"
   } else if (depth > 70){
        return "#ea822c"
   } else if(depth > 50){
        return "#a9c00"
   } else if(depth > 30){
        return "#eecc00"
   }else if (depth > 10){
        return "#d4ee00"
   }else{
        return "#98ee00"

   }

    
}
function getRadius(magnitude){
    if(magnitude === 0){
            return 1
    }
    return magnitude * 4

}
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
    console.log(data);
    function styleInfo(feature){
        return{
            opacity: 1,
            fillOpacity: 1,
            fillColor: getColor(feature.geometry.coordinates[2]),
            color:"#00000",
            radius: getRadius(feature.properties.mag),
            stroke: true,
            weight: 0.6
        }
    }

    L.geoJSON(data, {
        pointToLayer: function(feature, latlng) {
           return L.circleMarker(latlng);
    },
    style: styleInfo,
    onEachFeature:  function(feature, layer){
            layer.bindPopup(`
                Magnitude: ${feature.properties.mag} <br>
                Depth: ${feature.geometry.coordinates[2]} <br>
                Location: ${feature.properties.place}
            `);
            
    }
    }).addTo(map);
    let legend=L.Control({
        position: "bottomright"
    });

    legend.onAdd = function(){
     let container =   L.Domutil.create("div","info legend");
     let grades = [-10, 10, 30, 50, 70, 90];
     let colors = ['#983300', '#d4ee00', '#eecc00', '#ee9c00', '#ea822c', '#ea2c2c'];
     for(let index = 0; i< grades.length; index++){
            container.innerHTML += `<i style="background: ${colors[index]}"></i> ${grades[index]}+ <br>`
     }
     return container;
    }
    legend.addTo(Map);

})
