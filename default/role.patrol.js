var rolePatrol = {
    
    run: function(creep){
        
        creep.moveTo(3,2);
        if(creep.pos == (3,2)){
            creep.say("Checkpoint1");
        }
        
    }
    
};

module.exports = rolePatrol;