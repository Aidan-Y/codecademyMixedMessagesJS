//array containing DragonBallZ Characters (11 in total)
const dragonBallCharacters = ['Goku', 'Vegeta', 'Piccolo', 'Krillin', 'Tien', 'Yamcha', 'Gohan', 'Goten', 'Trunks', 'Future Trunks', 'Chiaotzu']

//array containing actions they performed at the locations (5 in total)
const locationActionList = ['Fought to the death', 'Sparred', 'Hugged it out', 'Had a tickle battle', 'Raced to the finish line']

//array containing locations this happened (11 in total)
const locationList = ['West City', 'East City', 'North City', 'South City', 'Mushroom Forest', 'Castle Pilaf', 'Kami Lookout', 'Kame Island', 'Planet Namek', 'World Martial Arts Tournament', 'Capsule Corporation']


//generate a random message from an array 
function randomMessage() { 
    //create a random number based on the input array 
    function getRandNum(array){
        return Math.floor(Math.random() * array.length);
    }

    //selecting random indexes from seperate arrays 
    let character = dragonBallCharacters[getRandNum(dragonBallCharacters)];
    let action = locationActionList[getRandNum(locationActionList)];
    let location = locationList[getRandNum(locationList)]; 
    
    //the final statement
    let finalStatement = `${character} ${action} at ${location}`
    console.log('In Dragon Ball Z, ' + finalStatement); 
}; 

randomMessage(); 