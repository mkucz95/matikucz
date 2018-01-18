function initMap() {
  console.log('initMap');

        var poznan = {lat: 52.4064, lng: 16.925};
        var tavistock = {lat: 50.5456, lng: -4.1444};
        var starnberg = {lat: 47.9904, lng: 11.3463};
        var prague = {lat:50.11120, lng:14.327562};
        var sg= {lat:1.310373, lng:103.8351};
        var sd = {lat:32.85894, lng:-117.2278};


        var map = new google.maps.Map(document.getElementById('myMap'), {
          zoom: 4,
          center: poznan,
          minZoom: 1
        });


        var marker = new google.maps.Marker({
          position: poznan,
          map: map,
          title: "Poznan",
          snippet:"Hometown"
        });

        var marker1 = new google.maps.Marker({
          position: tavistock,
          map: map,
          icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
        });

        var marker2 = new google.maps.Marker({
          position: starnberg,
          map: map,
          icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"

        });

        var marker3 = new google.maps.Marker({
          position: prague,
          map: map,
          icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"

        });

        var marker4 = new google.maps.Marker({
          position: sg,
          map: map,
          title: "Favourite place",
          icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        });

        var marker5 = new google.maps.Marker({
          position: sd,
          map: map,
          title: "current location",
          icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
        });
console.log(map);
      }