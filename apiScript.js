//Getting the ip address location and using it to showcase the weather 
//This api is not 100% accurate, it does get close though

function ipAddress(data) {
    $.get('http://ip-api.com/json', function (data) {
        ipAddress = data.query
    $(".ipAddress").html(ipAddress).hide().show(600)
console.log(data)
        $.ajax({
            url: "http://ip-api.com/json",
                success: function(data){ 
                    city = data.city;
                       region = data.regionName 
                     getWeather(city,region)
                    
               }
        })
        
    })
    
}
ipAddress()



// The weather part gets the city from the IP address finder and that gives you weather data 
// then passes it's data to the map feature

const apiKey = "505eb63b691b40d9b5f150200181311";
    function getWeather(city,region) {
        const weatherURL = "https://api.apixu.com/v1/current.json?key=" + apiKey + "&q="+ city + "," + region;
            
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
            locate()
            // let pos={
            //     lat: data.location.lat,
            //         lng: data.location.lon
            // };
            // initMap(pos)
        }
    })
    
}
function locate() {

    let key = "AIzaSyAvJXppOn7Qu0Waom3aJRK1sigS0KKyVDY"
    $.post(('https://www.googleapis.com/geolocation/v1/geolocate?key=' + key), function (data) {


        console.log(data)
            //  $.ajax({
            //      url: "https://www.googleapis.com/geolocation/v1/geolocate?key="+key,
            //      success: function (data) {
            //          showWeather(data)
                     let pos = data.location
                     console.log(pos)
                     initMap(pos)
            //      }
            //  })



    })

}





//Making the map and putting it on the page. I tried jquery but I could not get the map to work right.
    let map;
    function initMap(pos) {
     
    map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 17
    });
    
    // Create a marker and set its position.
     marker = new google.maps.Marker({
        map: map,
        position: pos,
        title: 'Hello World!'
    });
}