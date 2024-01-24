function executeMe() {
	
  waitforAutobus().then (
    function(busNumber){
        console.log('the bus that is coming is the number ' + busNumber);
        if(busNumber === 5) {
          takeAPlace(busNumber);
        } else{
          console.log("this bus isn't for me! I need to wait for the next!");
          executeMe();
        }
        
      }

  ); //producing code
  // when autobus is arrived, you can get its number (see the WakeUp exercise: where "I slept x seconds" is returned)
  
  // take a seat in autobus
  
}


function takeAPlace() {
	console.log('You are riding with the autobus number 5!');
}

function waitforAutobus() {
	console.log("I'm waiting for my bus!");
  let myPromise = new Promise(function(resolve){ // gli argomenti in questo caso sono funzioni (di cui una sola delle due e' eseguita), la prima è una funzione che se eseguita significa che la richiestae' andata a buon fine
    // random delay in milliseconds
	const delay = Math.floor(Math.random() * 10000);
	setTimeout(
        () => {
            // random autobus number
            const autobusNumber = Math.floor(Math.random() * 10 + 1);
            resolve(autobusNumber);
            
        },
        delay
    );
  })
  return myPromise;
}
/*nella funzione executeMe()
utilizzare il numero generato 
dell'autobus e verificare che sia il 5
1)
*/