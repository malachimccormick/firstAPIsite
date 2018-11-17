//Getting the ip address location and using it to showcase the weather

// function ipAddress(data) {
//     $.get('https://ipapi.co/json/', function (data) {


// console.log(data)
//         $.ajax({
//             url: "https://ipapi.co/json/",
//                 success: function(data){ 
//                     city = data.city;
//                     locationCity = city;
//                     region=data.region;
//                     locationRegion=region;

//                     latitude = data.latitude;
//                     longitude = data.longitude;
//                     console.log(latitude)
//                     getWeather(city,region)
//                     initMap(latitude, longitude)
//                 }
//         })
        
//     })
    
// }
// ipAddress()



// The weather part gets the city from the IP address finder and that gives you weather data 
// then passes it's data to the map feature

const apiKey = "505eb63b691b40d9b5f150200181311";
    function getWeather() {
        const weatherURL = "https://api.apixu.com/v1/current.json?key=" + apiKey + "&q=killeen,texas";
            
    function showWeather(data) {
        console.log(data)
            const condition = data.current.condition.text;
                const conditionPic = "http://" + data.current.condition.icon;
                    const temp = data.current.temp_f;
                        const locationCity = data.location.name
                            const locationRegion = data.location.region
    
                $("#location").html("Your current location is " + locationCity + ", " + locationRegion)
                    $("#weather").html(condition)
                        $("#conditionPicture").attr('src', conditionPic)
                            $("#temp").html("The current teperature is " + temp + " degrees fahrenheit")
        
    }
    $.ajax({
        url: weatherURL,
        success: function(data){
            showWeather(data)
            let pos={
                lat: data.location.lat,
                    lng: data.location.lon
            };
            initMap(pos)
        }
    })
    
}
getWeather()
    let map;
    function initMap(pos) {
     
    map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 9
    });
    
    // Create a marker and set its position.
     marker = new google.maps.Marker({
        map: map,
        position: pos,
        title: 'Hello World!'
    });
}