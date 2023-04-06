var roleBuilder = {
    
    run:function(creep){
        
        if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0){
            
            creep.memory.building = false;
            
            creep.say("Stockingup!");
            
        }
        
        if(!creep.memory.building && creep.store.getFreeCapacity() == 0){
            
            creep.memory.building = true;
            creep.say('Building!');
            
        }
        
        if(creep.memory.building){
            
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            
            if(targets.length){
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE){
                creep.moveTo(targets[0], {visualizePathStyle: {stroke:'#ffffff'} });
            }
            
            var inNeed = creep.room.find(FIND_STRUCTURES, {
                filter: object => object.hits < object.hitsMax
            });
            
            if(inNeed.length > 0){
                
                if(creep.repair(inNeed[0]) == ERR_NOT_IN_RANGE){
                    
                creep.moveTo(inNeed[0]);
            }
                
            }
                
            }
        }else{
            
            var sources = creep.room.find(FIND_SOURCES);
            
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE){
                
                creep.moveTo(sources[0], {visualizePathStyle:{stroke: '#ffa000'} });
                
            }
        }
    
        
    }
    
};

module.exports = roleBuilder;