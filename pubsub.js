// this is a pubsub mobel

let event = {
    
    events : {},
    on: function(eventname,fun){
        
        this.events[eventname] = this.events[eventname]||[];
        this.events[eventname].push(fun);
        //console.log(this.events)
        
    },
    off:function(eventname,fun){
        
        if(this.events[eventname]){
            
            for(let i = 0;i<this.events[eventname];i++){
                
                if(this.events[eventname] === fun){
                    this.events[eventname].splice(i,1);
                    break;
                }
                
            }
            
        }
        
    },
    emit:function(eventname,data){
        
        if(this.events[eventname]){
            this.events[eventname].forEach(function(fn){
                fn(data)
            })
        }
        
    }
}