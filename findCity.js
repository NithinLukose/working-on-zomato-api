let findCity = (function(){
    
    let cityId = 4;
    event.on('location',findMyCity);
    let btn = document.getElementById('detect-location');
    
    function findMyLocation(){
        
        function success(position){
            
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;  
            //console.log(latitude+ " "+longitude) 
            event.emit("location",{latitude,longitude})
            
            
        }
        function error(){
        
            alert("unable to retrieve your location");

        }
        if(!navigator.geolocation){
            alert('Geolocation is not supported by your browser');
        }
        else{
            return navigator.geolocation.getCurrentPosition(success,error);
        }

    }
    async function findMyCity(location){
        
        
        let url = `https://developers.zomato.com/api/v2.1/cities?lat=${location.latitude}&lon=${location.longitude}&apikey=81550eb0317cb4e49cd167ecc2586b10`
        let result = await fetch(url).then(res=>res.json()).then(res=>res.location_suggestions)
        event.emit("change city",result)
        
        
    }
    btn.addEventListener('click',findMyLocation);
    
    
    
    
})()