let collections = (function(){
    
    
    let latitude = 12.8484356
    let longitude = 77.6732116
    let row = document.querySelector('.row')
    event.on('location',setLocation);
    function setLocation(data){
        latitude = data.latitude;
        longitude = data.longitude;
        //console.log(data)
        fetchCollections()
        
    }
    
    async function fetchCollections(){
        
        let url = `https://developers.zomato.com/api/v2.1/collections?lat=${latitude}&lon=${longitude}&apikey=81550eb0317cb4e49cd167ecc2586b10`
        let collections = await fetch(url).then(res=>res.json()).then(res=>res.collections)
        render(collections)
        
    }
    
    function render(collections){
        
        console.log(collections)
        for(let i = 0;i<4;i++){
            
            let col = document.createElement('div')
            col.setAttribute('class','column')
            let card = document.createElement('div')
            card.setAttribute('class','card')
            let img = document.createElement('img')
            img.setAttribute('src',collections[i].collection.image_url)
            let bottomLeft = document.createElement('div')
            bottomLeft.setAttribute('class','bottomleft')
            bottomLeft.innerText = collections[i].collection.title + "\n" + collections[i].collection.res_count + " Places"
            card.appendChild(img)
            card.appendChild(bottomLeft)
            col.appendChild(card)
            row.appendChild(col)
        }
        
    }
    
    fetchCollections()
    
    
})()