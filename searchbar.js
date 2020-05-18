let searchBar = (function(){
    
    let cityId = 4;
    let latitude = 12.8484356
    let longitude = 77.6732116
    event.on('change city',setCity)
    event.on('location',setLocation);
    let form = document.getElementById('search-bar')
    let input = document.getElementById('search')
    let ul = document.querySelector('.search-list')
    //console.log(ul)
    
    
    function setLocation(data){
        latitude = data.latitude;
        longitude = data.longitude;
        //console.log(data)
    }
    function setCity(data){
        
        //console.log(data[0].id)
        cityId = data[0].id
        
    }
    function handleFormSubmit(e){
        e.preventDefault()
        //console.log("submitted")
    }
    
    async function handleInputChange(e){
        
        if(e.target.value === '' ){
            ul.innerHTML = ""
            return
        }
        
        //console.log(cityId)
        let url = `https://developers.zomato.com/api/v2.1/search?&q=${e.target.value}&count=10&apikey=81550eb0317cb4e49cd167ecc2586b10`
        let res = await fetch(url).then(res=>res.json()).then(res=>res.restaurants).catch(e=>console.log("error"))
        //console.log(res)
        if(!res){
            return
        }
        ul.innerHTML = ""
        for(let i = 0;i<res.length;i++){
            
            let restaurant = res[i].restaurant
            //console.log(restaurant)
            let li = document.createElement('li')
            let img = document.createElement('img')
            img.setAttribute('src',restaurant.featured_image)
            
            
            li.innerText = restaurant.name;
            li.appendChild(img)
            //console.log(li)
            ul.appendChild(li)
            
        }
        
    }
    function removeUL(e){
        ul.innerHTML = ""
    }
    input.addEventListener("focus",handleInputChange)
    input.addEventListener("focusout",removeUL)
    input.addEventListener("input",handleInputChange)
    form.addEventListener('submit',handleFormSubmit)
    
})()