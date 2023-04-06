var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleAttack = require('role.attacker');
var roleUpgraderTeamTwo = require('role.upgraderteamtwo');
var rolePatrol = require('role.patrol');
module.exports.loop = function(){
    
    //Auto Spawn Script
    
   for(var i in Memory.creeps) {
       
        if(!Game.creeps[i]) {
        
            delete Memory.creeps[i];
        
        }
}
    
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    
    var upgraderss = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgraderteamtwo');
    
    console.log("upgraders: " + upgraders.length);
    
    var upName = "Upgrader: " + Game.time;
    
    var builName = "Builder: " + Game.time;
    
    var harName = "Harvester: " + Game.time;
    
    var patName = "Patrol: " + Game.time;
    
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    
    console.log("Harvesters: " + harvesters.length);
    
    var attackers = _.filter(Game.creeps,(creep) => creep.memory.role == 'attacker');
    
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    
    var patrols = _.filter(Game.creeps, (creep) => creep.memory.role == 'patrol')
    console.log("Builders: " + builders.length);
    
    
   //fix here --? if(attackers.length<3){
        //console.log('Attacker Needed');
       // Game.spawns['Spawn1'].spawnCreep([ATTACK,ATTACK,MOVE], upName, {memory:{role:'attacker'}})
   // }
    
    if(harvesters.length<= 2){
        
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], harName, {memory:{role: 'harvester'}});
    }
    if(builders.length <= 5){
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], builName, {memory: {role: 'builder'}});
    }
    
    if(patrols.length < 1){
        Game.spawns['Spawn1'].spawnCreep([MOVE,MOVE,MOVE], patName, {memory: {role: 'patrol'}});
    }
    //if(upgraders.length <3){
     //   Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], builName, {memory: {role: 'upgrader'}});
   // }
    //End
    
    for(var name in Game.creeps){
        
        var creep = Game.creeps[name];
        
        if(creep.memory.role == 'harvester'){
            roleHarvester.run(creep);
        }
        
        if(creep.memory.role == 'upgrader'){
            roleUpgrader.run(creep);
        }
        
        if(creep.memory.role == 'builder'){
            roleBuilder.run(creep);
        }
        
        if(creep.memory.role == 'attacker'){
            roleAttack.run(creep);
        }
        
        if(creep.memory.role =='upgraderteamtwo'){
            roleUpgraderTeamTwo.run(creep);
        }
        if(creep.memory.role == 'patrol'){
            rolePatrol.run(creep);
        }
        
        
    }
        
    
    
}