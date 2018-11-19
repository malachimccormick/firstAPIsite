//$(document.ready(function(){}) not used because the script can go ahead and run as it pleases 

//Getting the ip address location and using it to showcase the weather 
//This api is not 100% accurate when it comes to location, it does get close though

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
//This is the part that shows the weather after it is gotten.
//is it needed??? Not really but I like the practice
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
         
        }
    }) 
}

//This gets the constant lat and lng from the Google API and loads it up.
const key = "AIzaSyAvJXppOn7Qu0Waom3aJRK1sigS0KKyVDY"
function locate() {
    
        $.post(('https://www.googleapis.com/geolocation/v1/geolocate?key=' + key), function (data) {
            console.log(data)
                let pos = data.location
                    console.log(pos)
                        initMap(pos)
    })

}

//Making the map and putting it on the page. I tried jquery at the map var but I could not get the map to work right.
    let map;
    //Click function added so you can enter your own address and the map goes there.
    //100% accurate when it comes to the location
        $("#submit").click(function(){
            address = $("#input_address").val();
            console.log(address)
                $.get(('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + key), function (data) {
                    console.log(data)
                        pos = data.results[
                            0 ].geometry.location
                        initMap(pos)
            })
    })

    function initMap(pos) {
    //Create the map
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
