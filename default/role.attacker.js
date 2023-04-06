var roleAttack = {
    run: function(creep){
        
        
        
        var targ = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        
        if(creep.store[RESOURCE_ENERGY] == 0){
            
            var nextRoom = Game.map.findExit('E5N23', 'E5N22');
            
            console.log(nextRoom);
            
            creep.moveTo(targs);
            
            const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            
            if(target) {
                
                if(creep.attack(target) == ERR_NOT_IN_RANGE) {
                    
                creep.moveTo(target);
                
                }
            }
            
            if(creep.room.controller && !creep.room.controller.my){
                
                if(creep.attackController(creep.room.controller) == ERR_NOT_IN_RANGE){
                    
                    creep.moveTo(creep.room.controller);
                    
                }
            }
        }
        
    }
};

module.exports = roleAttack;